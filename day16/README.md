# OOPs for Playwright

This README covers key TypeScript concepts, providing explanations and examples for each topic with a focus on web automation testing.

## Table of Contents

1. [Class](#class)
2. [Object](#object)
3. [Methods](#methods)
4. [Difference between Method and Function](#difference-between-method-and-function)
5. [Access Modifiers](#access-modifiers)
6. [Inheritance and Types](#inheritance-and-types)
7. [Best Practices for Designing Framework](#best-practices-for-designing-framework)
8. [Different Design Patterns](#different-design-patterns)
9. [Page Object Model](#page-object-model)

## Class

A class in TypeScript is a blueprint for creating objects with predefined properties and methods. It encapsulates data and behavior, promoting reusability and modularity.

## Object

An object in TypeScript is an instance of a class. It holds data (properties) and functionalities (methods) defined by its class.

## Methods

Methods are functions defined inside a class, used to perform operations on the class's properties.

## Difference between Method and Function

- **Method**: A function associated with an object or class.
- **Function**: A standalone block of code designed to perform a specific task.

### Example:

```typescript
// Function
function navigateTo(url: string, page:Page) {
    return page.goto(url);
}

// Method
class Navigation {
 page: Page
    constructor(page:Page) {
        this.page = page;
    }

    navigateTo(url: string) {
        return this.page.goto(url);
    }
}

await navigateTo('http://example.com',page);
const navigation = new Navigation(page);
await navigation.navigateTo('http://example.com');
```

## Access Modifiers

Access modifiers control the visibility of class members. TypeScript supports `public`, `private`, and `protected`.

- **public**: Accessible from anywhere.
- **private**: Accessible only within the class.
- **protected**: Accessible within the class and its subclasses.

## Inheritance and Types

Inheritance allows a class to inherit properties and methods from another class. TypeScript supports single and multiple inheritance using interfaces.


## Best Practices for Designing Framework

1. **Modularity**: Break down the framework into smaller, reusable modules.
2. **Consistency**: Maintain consistent naming conventions and coding styles.
3. **Documentation**: Provide clear and comprehensive documentation.
4. **Testing**: Implement thorough testing to ensure reliability.
5. **Scalability**: Design with scalability in mind to accommodate future growth.
6. **Performance**: Optimize for performance and efficiency.
7. **Security**: Incorporate security best practices to protect data and functionality.

## Different Design Patterns

1. **Singleton**: Ensures a class has only one instance.
2. **Factory**: Creates objects without specifying the exact class.
3. **Observer**: Allows objects to be notified of state changes.
4. **Decorator**: Adds behavior to objects dynamically.
5. **Strategy**: Defines a family of algorithms and makes them interchangeable.
6. **Facade**: Provides a simplified interface to a complex system.


## Page Object Model

The Page Object Model (POM) is a design pattern used in test automation to create an object repository for web UI elements. It helps in maintaining and reusing code.
