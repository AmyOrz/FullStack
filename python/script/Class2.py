#mulyiple inheritance use group mixin
class People(object):
	pass

class Animal(object):
	pass

class RunMixin(object):
	def run(self):
		print "runing"

class FlyMixin(object):
	def fly(self):
		print "flying"

class Dog(Animal,RunMixin):
	pass

class bird(Animal,FlyMixin):
	pass

class Miller(People,RunMixin):
	pass

m = Miller()
m.run()
