def my_abs(x):
	if x >= 0:
		return x
	else:
		return -x

num = int(raw_input())
print my_abs(num)


def new_abs(x):
	if not isinstance(x,(int,float)):
		raise TypeError("bad type")
	if x >=0:
		return x
	else:
		return -x

print new_abs(num)
