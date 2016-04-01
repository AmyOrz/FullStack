#*args 可变参数，接受一个tuple#
#**kw 关键字参数，接受一个dict（map）#
def calc(*num):
	sum = 0
	for n in num:
		sum = sum +n
	return sum
arr = [1,2,45,67,89]
print calc(*arr)

def person(name,age,**kw):
	print name,age,"other:",kw

fck = {"gf":"hehe","city":"yunnan"}
person("yh",23,**fck)
