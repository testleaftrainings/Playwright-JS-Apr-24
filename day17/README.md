## Table of Contents

1. [Retry Tests in Playwright](#retry-tests-in-playwright)
2. [Test Info](#test-info)
3. [Custom Fixture](#custom-fixture)
4. [Jira Integration](#jira-integration)
5. [Custom Reporters](#custom-reporters)
6. [GitHub Actions](#github-actions)
7. [Interface](#interface)
8. [Method Overloading](#method-overloading)
9. [Method Overriding](#method-overriding)
10. [Function Overloading](#function-overloading)
11. [Encapsulation](#encapsulation)

## Retry Tests in Playwright

### Description
Retrying tests in Playwright allows for automatic re-execution of failed tests, helping to improve test reliability and reduce flakiness.

### Implementation
To enable retries in Playwright, you can configure the `playwright.config.ts` file:

```javascript
export default defineConfig ({
  retries: 2, // Number of retry attempts
});
```

## Test Info

### Description
Test info in Playwright provides detailed information about the test execution, such as test title, status, error messages, and more.

### Usage
Access test info within your test using the `test.info()` method:

```javascript

test('example test', async ({ page }) => {
  const testInfo = test.info();
  console.log(testInfo.title);
});
```

## Custom Fixture

### Description
Custom fixtures in Playwright allow you to set up and tear down resources that are needed for your tests.

### Implementation
Define custom fixtures:

```javascript
export const test = baseTest.extend({
    page: async ({page},use) =>{

       //Set up the fixture

        await use(page);
}
})
```

## Jira Integration

### Description
Integrating Jira with Playwright helps in tracking test results and associating them with Jira issues.

### Implementation
Use the Jira API to report test results from Playwright:

```javascript
const jiraClient = require('jira-client');

const jira = new jiraClient({
  protocol: 'https',
  host: 'your-jira-domain.atlassian.net',
  username: 'your-username',
  password: 'your-api-token',
  apiVersion: '2',
  strictSSL: true,
});

jira.addNewIssue({
  fields: {
    project: { key: 'PROJ' },
    summary: 'Test Issue',
    description: 'Details about the issue',
    issuetype: { name: 'Bug' },
  },
});
```

## Custom Reporters

### Description
Custom reporters in Playwright allow you to create your own formats for test result output.

### Implementation
Create a custom reporter by extending the `Reporter` class:

```javascript
class MyReporter {
  onBegin(config, suite) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);
  }
  onTestEnd(test, result) {
    console.log(`Test ${test.title} finished with status: ${result.status}`);
  }
  onEnd(result) {
    console.log(`Finished the run: ${result.status}`);
  }
}

export{MyReporter} 
```

## GitHub Actions

### Description
GitHub Actions allow you to automate workflows for building, testing, and deploying your code.

### Implementation
Create a workflow file in `.github/workflows` directory:

```yaml
name: Playwright Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Install dependencies
      run: npm install
    - name: Run Playwright tests
      run: npx playwright test
```

## Interface

### Description
An interface defines a contract for classes, specifying the methods and properties that a class must implement.

### Implementation
In TypeScript, define an interface and implement it in a class:

```typescript
interface IPage {
  name: string;
  open(): void;
}

class HomePage implements IPage {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  open() {
    console.log('Navigating to test application page...');
  }
}
```

## Method Overloading

### Description
Method overloading allows a class to have multiple methods with the same name but different parameters.

### Implementation
In TypeScript, define overloaded methods:

```typescript
class Addition {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}
```

## Method Overriding

### Description
Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass.

### Implementation
Override a method in a subclass:

```typescript
export class PlaywrightWrapper {
  print() {
    console.log('I am from the Wrapper class');
  }
}

export class LoginPage extends PlaywrightWrapper {
  print() {
    console.log('I am from Login Page!');
  }
}
```

## Function Overloading

### Description
Function overloading allows multiple function signatures for a single function, enabling different parameter types and counts.

### Implementation
In TypeScript, define overloaded functions:

```typescript
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}
```

## Encapsulation

### Description
Encapsulation is a principle of object-oriented programming that restricts direct access to an object's data and methods, exposing only the necessary parts.

### Implementation
In TypeScript, use access modifiers to encapsulate data:

```typescript
class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}
```
