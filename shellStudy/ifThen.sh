#!/bin/bash
read -p "please input y/n :" yn
if [ "$yn" == "Y"  ] || [ "$yn" == "y" ];then 
	echo "ok,continue"
elif [ "$yn" == "N" ] || [ "$yn" == "n" ];then
	echo "oh,interrupt!"
else 
	echo "I do not know what you input"
fi


