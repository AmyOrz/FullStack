#!/bin/bash

i=0
sum=0

while [ "$i" != "100" ]
do
	i=$(($i+1))
	sum=$(($i+$sum))
done
echo "100 leijia is" $sum
