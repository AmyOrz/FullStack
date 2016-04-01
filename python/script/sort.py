arr = [1,4,7,8,3232,31,4,23123,3]
print sorted(arr)

def reversed_cmp(x,y):
	if x>y:
		return -1
	elif x<y:
		return 1
	else:
		return 0

print sorted(arr,reversed_cmp)
