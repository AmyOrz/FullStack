#!/usr/bin/env python
# -*- coding:utf-8 -*-

'a test module'

import sys

def test():
	args = sys.argv
	if len(args) == 1:
		print "fuck!"
	elif len(args) == 2:
		print "hello,%s!" % args[1]
	else:
		print "too many"
if __name__ == "__main__":
	test()
