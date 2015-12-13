#!/bin/bash
echo "you should input 2 numbers,I will cross them!"
read -p "fitst number:" fnum
read -p "last number:" lnum
total=$(($fnum*$lnum))
echo "the result is:" ${total}
