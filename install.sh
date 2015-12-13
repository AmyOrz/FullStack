#!/bin/bash
INST_CLI_VER=aegis_00_81
INST_UPDATE_VER=update_00_83
if [ `uname -m` = "x86_64" ]; then
    ARCH="linux64"
else
    ARCH="linux32"
fi

UPDATE_RPOC="AliYunDunUpdate"
CLIENT_PROC="AliYunDun"

#check linux Gentoo os 
var=`lsb_release -a 2>/dev/null | grep Gentoo`
if [ -z "${var}" ]; then 
    var=`cat /etc/issue | grep Gentoo`
fi

if [ -d "/etc/runlevels/default" -a -n "${var}" ]; then
    LINUX_RELEASE="GENTOO"
else
    LINUX_RELEASE="OTHER"
fi

AEGIS_INSTALL_DIR="/usr/local/aegis"

AEGIS_UPDATE_SITE="http://update.aegis.aliyun.com/download"
AEGIS_UPDATE_SITE2="http://update2.aegis.aliyun.com/download"
AEGIS_UPDATE_SITE3="http://update3.aegis.aliyun.com/download"


DEST_UPDATE_FILE=${AEGIS_INSTALL_DIR}/aegis_update/${UPDATE_RPOC}

download_file()
{
    wget "${AEGIS_UPDATE_SITE}""$1" -O "$2" -t 1
    if [ $? != 0 ]; then
        rm -rf "$2"
        wget "${AEGIS_UPDATE_SITE2}""$1" -O "$2" -t 1
        if [ $? != 0 ]; then
			rm -rf "$2"
			wget "${AEGIS_UPDATE_SITE3}""$1" -O "$2" -t 1
			if [ $? != 0 ]; then
				rm -rf "$2"
				echo "download file error" 1>&2
				exit 1
			fi
		fi
    fi
}

install_aegis()
{

    echo "begin to install"
	
    killall ${UPDATE_RPOC} 2>/dev/null
    killall ${CLIENT_PROC} 2>/dev/null
    killall aegis_cli 2>/dev/null
    killall aegis_update 2>/dev/null
    killall -9 AliHids 2>/dev/null
    
    if [ -d "${AEGIS_INSTALL_DIR}/aegis_client" ];then
        rm -rf "${AEGIS_INSTALL_DIR}/aegis_client"
    fi 
    if [ -d "${AEGIS_INSTALL_DIR}/aegis_update" ];then
        rm -rf "${AEGIS_INSTALL_DIR}/aegis_update"
    fi 
    mkdir -p "${AEGIS_INSTALL_DIR}/aegis_client"
    mkdir -p "${AEGIS_INSTALL_DIR}/aegis_update"

    echo "downloading aegis_update..."
    download_file "/$ARCH/updates/${INST_UPDATE_VER}/aegis_update" "${DEST_UPDATE_FILE}"

    echo "downloading aegis_update checksum..."
    download_file "/$ARCH/updates/${INST_UPDATE_VER}/aegis_update.md5" "${AEGIS_INSTALL_DIR}/aegis_update/aegis_update.md5"

    echo "checking aegis_update file..."
    md5_check=`md5sum "${DEST_UPDATE_FILE}" | awk '{print $1}' ` 
    md5_server=`head -1 "${AEGIS_INSTALL_DIR}/aegis_update/aegis_update.md5" | awk '{print $1}'`
    if [ "$md5_check"x = "$md5_server"x ]; then
		chmod +x "${DEST_UPDATE_FILE}"
        echo "${INST_CLI_VER}" > ${AEGIS_INSTALL_DIR}/aegis_update/up_cmd.txt
    else
        echo "aegis_update checksum error."
		exit 1
    fi
}

uninstall_service() 
{
   echo "uninstalling service..."
   if [ -f "/etc/init.d/aegis" ]; then
      /etc/init.d/aegis stop  >/dev/null 2>&1
      rm -f /etc/init.d/aegis 
   fi

   if [ $LINUX_RELEASE = "GENTOO" ]; then
    rc-update del aegis default
        if [ -f "/etc/runlevels/default/aegis" ]; then
            rm -f "/etc/runlevels/default/aegis" >/dev/null 2>&1;
        fi
    elif [ -f /etc/init.d/aegis ]; then
         /etc/init.d/aegis  uninstall
        for ((var=2; var<=5; var++)) do
            if [ -d "/etc/rc${var}.d/" ];then
                 rm -f "/etc/rc${var}.d/S80aegis"
            elif [ -d "/etc/rc.d/rc${var}.d" ];then
                rm -f "/etc/rc.d/rc${var}.d/S80aegis"
            fi
        done
    fi
}

install_service()
{    
    echo "installing service..."

    if [ $LINUX_RELEASE = "GENTOO" ];then
		download_file "/linux_install/0061plus/aegis_gentoo" "/etc/init.d/aegis"
		download_file "/linux_install/0061plus/aegis_gentoo.md5" "${AEGIS_INSTALL_DIR}/aegis_update/aegis.md5"
    else
		download_file "/linux_install/0061plus/aegis" "/etc/init.d/aegis"
		download_file "/linux_install/0061plus/aegis.md5" "${AEGIS_INSTALL_DIR}/aegis_update/aegis.md5"
    fi

    echo "checking aegis service file..."
    md5_check=`md5sum "/etc/init.d/aegis" | awk '{print $1}' ` 
    md5_server=`head -1 "${AEGIS_INSTALL_DIR}/aegis_update/aegis.md5" | awk '{print $1}'`
    if [ "$md5_check"x = "$md5_server"x ]; then
		echo "aegis checksum success."
    else
        echo "aegis checksum error."
        exit 1
    fi
    

    chmod +x /etc/init.d/aegis
    
    echo "remove old server"
    
    #delete old aegis sever
    if [ $LINUX_RELEASE = "GENTOO" ]; then
        rc-update del aegis default 2> /dev/null
        if [ -f "/etc/runlevels/default/aegis" ]; then
            rm -f "/etc/runlevels/default/aegis"
        fi
    else
        for ((var=2; var<=5; var++))
        do
            if [ -f "/etc/rc${var}.d/S80aegis" ]; then
                 rm -f "/etc/rc${var}.d/S80aegis"
            elif [ -f "/etc/rc.d/rc${var}.d/S80aegis" ];then
                 rm -f "/etc/rc.d/rc${var}.d/S80aegis"
            fi
        done
    fi

    echo "installing new server"
    
    # install new aegis server
    if [ $LINUX_RELEASE = "GENTOO" ]; then
        rc-update add aegis default 2>/dev/null
    else
        for ((var=2; var<=5; var++)) do
            if [ -d "/etc/rc${var}.d/" ];then
                #redhat 
                ln -s /etc/init.d/aegis /etc/rc${var}.d/S80aegis 2>/dev/null
            elif [ -d "/etc/rc.d/rc${var}.d" ]; then
                 #suse
                 ln -s /etc/init.d/aegis /etc/rc.d/rc${var}.d/S80aegis  2>/dev/null
            fi
        done
    fi

    path="/etc/debian_version"

    if [ -f "$path" -a -s "$path" ];
    then
        var=`awk -F. '{print $1}' $path`

        if [ -z $(echo $var|grep "[^0-9]") ]; then
            if [ $var -ge 6 ]; then
                echo "insserv aegis"
                insserv aegis  >/dev/null 2>&1
            fi
        fi
    fi
}

check_aegis()
{
    var=1
    limit=18
    echo "Aegis client is installing , please wait for 1 to 3 minutes.";

    while [[ $var -lt $limit ]]; do 
        if [ -n "$(ps -ef|grep aegis_client|grep -v grep)" ]; then
             break
         else
            sleep 10
         fi
         
        ((var++))
    done     
}

if [ `id -u` -ne "0" ]; then
    echo "ERROR: This script must be run as root." 1>&2
    exit 1
fi


uninstall_service
install_aegis
install_service
if [ -f /etc/init.d/aegis ];then
    /etc/init.d/aegis start
fi 

check_aegis
#service aegis start
echo "Aegis successfully installed"
exit 0