#!/bin/bash
function printit(){
	echo "Your choice is $1"   # 这个 $1 必须要参考底下命令的下达
}

case $1 in
  "one")
	printit $1  
	;;
  "two")
	printit $1  
	;;
  "three")
	printit $1  
	;;
  *)
	echo "Usage $0 {one|two|three}"
	;;
esac
