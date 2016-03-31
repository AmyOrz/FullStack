g = (x * x for x in range(1,4))
for s in g:
	print s

def fib(max):
	n,a,b = 0,0,1
	while n < max:
		yield b
		a,b = b,a+b
		n = n+1
L = fib(7)
for l in L:
	print l
