names = ["fuck1","fcuk2","fuck3"]
for name in names:
	print name

sum = 0
for s in range(101):
	sum = sum + s
print sum

map = {"a":1,"b":2,"c":3}
for k in map:
	print k,"=",map[k]

L = ["F1","FFf2",213,1235,"fSSuck"]
print [s.lower() for s in L if isinstance(s,str)]
