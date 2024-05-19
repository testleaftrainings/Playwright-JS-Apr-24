```markdown
# Functions and Types in JavaScript

## Table of Contents

1. [Function Declaration](#function-declaration)
2. [Arrow Function](#arrow-function)
3. [Anonymous Function](#anonymous-function)
4. [Callback and Callback Hell](#callback-and-callback-hell)
5. [Asynchronous JavaScript](#asynchronous-javascript)
    - [Promises](#promises)
    - [Async/Await](#asyncawait)
6. [Introduction to TypeScript](#introduction-to-typescript)
    - [TypeScript (TS) and TypeScript Compiler (TSC)](#typescript-ts-and-typescript-compiler-tsc)
    - [Installation Commands](#installation-commands)
    - [TypeScript Variable Declaration and Syntax](#typescript-variable-declaration-and-syntax)

## Function Declaration

A standard function declaration defines a function with the specified parameters.

```javascript
function displayName(name) {
    console.log("Hello " + name);
}
```

## Arrow Function

An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

```javascript
const message = name => console.log("Hello " + name);
```

## Anonymous Function

An anonymous function is a function that is defined without a name, often used where functions are used as temporary expressions or passed as arguments to other functions. Here's a simple example of an anonymous function in JavaScript, which logs a message to the console:

```javascript
setTimeout(function() {
    console.log("This is an anonymous function");
}, 1000);
```

In this example, an anonymous function is passed as the first argument to `setTimeout`. It executes after a delay of 1000 milliseconds (or 1 second), logging "This is an anonymous function" to the console.

## Callback and Callback Hell

A callback is a function passed into another function as an argument to be executed later.

Callback Hell, also known as the pyramid of doom, is a situation where callbacks are nested within other callbacks several levels deep, making the code hard to read and maintain.

## Asynchronous JavaScript

### Promises

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

```javascript
let myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Data received"), 3000);
});
```

### Async/Await

`async` and `await` are syntactic sugar built on top of promises. They make asynchronous code look and behave a little more like synchronous code.

```javascript
async function fetchData() {
    let data = await fetch('https://api.leaftaps.com/data');
    console.log(data);
}
```

# Introduction to TypeScript

## TypeScript (TS) and TypeScript Compiler (TSC)

TypeScript is a superset of JavaScript that adds static types. To run TypeScript, you need to compile it into JavaScript using the TypeScript Compiler (TSC).

### Installation Commands

Install TypeScript globally via npm:

```bash
npm install -g typescript
```

## TypeScript Variable Declaration and Syntax

Variables in TypeScript can be declared using `let` or `const`, similar to JavaScript.

```typescript
let username: string = "Babu";
```
```