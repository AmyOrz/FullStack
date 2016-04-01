class Student(object):
	def __init__(self,name):
		self._name = name
	def __str__(self):
		return "the student is object (name:%s)"% self._name
	__repr__ = __str__
	
	def __call__(self):
		print "My name is %s" % self._name

s = Student("fck")
print s
print s()


#__iter__ is iteration
class Fib(object):
	def __init__(self):
		self.a,self.b = 0,1
	def __iter__(self):
		return self
	def __next__(self):
		self.a,self.b = self.b,self.a+self.b
		if self.a > 1000:
			raise StopIteration()
		return self.a
