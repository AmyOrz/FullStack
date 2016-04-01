#add _ is private
class Stu(object):
	def __init__(self,name,age):
		self._name = name
		self._age = age
	def print_stu(self):
		print self._name,":",self._age

prople = Stu("fck",12)
prople.print_stu()

#__slots__   limit attr

class Student(object):
	__slots__ = ("name","hehe")
	
s = Student()
s.name = "fck"
#s.age = 123  is wrong  because age not exist __slots__


