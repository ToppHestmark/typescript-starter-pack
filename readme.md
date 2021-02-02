# Typescript beginner class

Teaching myself some typescript typing language.

## Core Types

- Number
- String
- Boolean
- object
- Array
- Tuple: ~ Added Typescript fixed length array ~
- Enum: ~ Added by Typescript, automatically enumerated global constant identifiers ~
- Any: ~ Any unspecified value ~

## Other Types

- Union ~ Accepting two different kind of values ~
- Literal ~ The clear exact value ~
- Alias ~ Name/variable for combined types of value ~
- [-] Example: type Combinable = number; (etc.) ~ start with 'type' ~
- Functions ~ Show us the return value of expected output type ~
- [-] Can also be stored in a variable
- [-] () => string; (etc.)
- [-] (a: number, b: number) => number; (example of callback function with parameters)
- unknown ~ Common use for user input, a stricter type of any ~
- never ~ never return anything, a code that never return anything ~

## Classes and properties

- 'public' [by default]
- 'private' [Only accessable in the class on call of related function/method]
- 'readonly' [Value assigned cannot be overwrite]
- 'protected' [Can be accessed through extended classes]
- 'get' [Read the property]
- 'set' [Set the property]
- 'static' [call the method in the class without using 'new' keyword, and detached from the classes]
- 'abstract' [That assigned method have to be implemented based on the abstracted classes, it's kinda mandatory assigning to other classes - Enforce other extended classes to share the common method/property]
- 'private' (in front of constructor) [Only have one instanced on the certain class]

## Interface

Describe the structure of an object and defines the syntax that any entity must adhere to. It's a pure typescript method and have no javascript assigned javascript output when compiling. Recommended for use on object structure type of data.

## Advances

- Intersection type: Combining unions types that contain at least one similarities of value. (string, numbers, boolean etc.)
- Typeguard: Checking instances of other types and then executed the method based on type checking.
- Discriminated union: Makes and implementing typeguards
- Typecasting: Tell typescript the type of element
- Functions overload: Combline a function with a function that already contain union properties by assigning a same fuction above the previous without curly bracket or return statement.
- Optional chaining: '?' in front of dot '.' before accessing data to specify if the data that one try to accessing exist or not.
- Nullish Coalescing: '??' the similar as '||'. Help you to correlate a default value in case the callback object doesn't contain any value.

## Generics

- Connect with other types that specify which type of data that exist on the other types.
- Tell the type what kind of data to be expected without specifying the type of data from the previous assignment, passing in the <> within the function.
- Generics type lock in a type!

## Decorators

- Functions which are prefixed with @expression symbol, where the expression evaluates to function called at runtime with no information on the declaration.
  For example., we shall use the decorator @sealed as below;

```
@sealed
function sampleEmp(target) {
// ‘target’ needs some coding here
}
```
