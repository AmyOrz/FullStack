#!/bin/bash

read -p "please input num :" num
s=0
for((i=1;i<=$num;i++))
do 
	s=$(($s+$i))
done
echo "the sum is :" $s
