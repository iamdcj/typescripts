# TypeScript Decorators

### What are Decorators in TS?

They are functions that can be used to modify the properties and methods in a Class.

They aren't the same as Decorators in regular JavaScript.

They can be used inside or on a class.

The execution order is the key to understanding and appreciating them.

They are totally experimental.

They take three arguments
1. Prototype of the object (the class itself, e.g. class Boat)
2. Key of the property, method or accessor(getter/setter) on the object
3. Property descriptor

### How they work?
Decorators are applied during invocation(runtime), not when the instance is created(compile time).
