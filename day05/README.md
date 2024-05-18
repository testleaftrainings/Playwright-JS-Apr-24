# CSS Selectors
- *Universal Selector (*)*: Selects all elements within a page.

- *Class Selector (.className)*: Selects all elements with a specific class.

- *ID Selector (#idName)*: Selects a single element with a specific ID.

## Combinators
- *Descendant Selector (space)*: Selects all elements that are descendants of a specified element.

- *Child Selector (>)*: Selects all elements that are direct children of a specified element.

- *Adjacent Sibling Selector (+)*: Selects all elements that are immediately preceded by a specific element.

- *General Sibling Selector (~)*: Selects all elements that are siblings of a specific element.

## Attribute Selectors
- *Presence and Value Attribute Selectors:*

    - [attribute]: Selects elements with a specific attribute.
    >> Example: a[target] targets all <a> elements with a "target" attribute.
    - [attribute="value"]: Selects elements with a specific attribute and value.
    >> Example: input[type="text"] targets all <input> elements with a type of "text".

- *Substring Value Attribute Selector:* 

    - [attribute*="value"]: Selects elements with an attribute value containing a specified substring.
    >> Example: a[href*="example"] targets all <a> elements whose href attribute contains "example".

# Arrays in JavaScript

## What is an Array?

An array is a single, ordered collection of multiple items, called elements, that are indexed by a numerical value. Arrays are used to store multiple values in a single variable, allowing for efficient access and manipulation of each element using its index.

## Array Declaration

In JavaScript, arrays can be declared in several ways:

1. *Literal Syntax*: The simplest and most common way to create an array.
let testTypes = ["Smoke", "Sanity", "Regression"];

2. *Constructor with Array Keyword*: Using the Array constructor to create an array.
let browsers = new Array("chrome", "firefox", "edge");

3. *Array Constructor with Single Length*: Creating an array with a predefined length.
let scores = new Array(10);  // Creates an array with 10 undefined items

## Array Methods

JavaScript arrays come with a number of built-in methods:

- push(): Adds one or more elements to the end of an array and returns the new length of the array.
- pop(): Removes the last element from an array and returns that element.
- shift(): Removes the first element from an array and returns that removed element.
- unshift(): Adds one or more elements to the beginning of an array and returns the new length.
- forEach(): Executes a provided function once for each array element.
- map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
- filter(): Creates a new array with all elements that pass the test implemented by the provided function.
- reduce(): Executes a reducer function on each element of the array, resulting in a single output value.