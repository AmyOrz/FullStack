m = {"a":65,"b":66,"c":67}
print m["a"]
print m.get("fuck",-1)  
m.pop("a")
print m

arr = ["wjefwe","SFKJWH","jnJHJ"]
def chVal(x):
	x1 = x[:1].upper()
	x2 = x[1:].lower()
	return x1+x2

print(map(chVal,arr))


