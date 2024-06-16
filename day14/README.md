# Playwright JS Test Guide

This guide outlines how to manage browser contexts and their states across tests using Playwright's `test.use()`, how to utilize the Playwright test class for organizing automated tests, and how to launch a persistent context.

## Table of Contents
- [Storage State Using test.use()](#storage-state-using-testuse)
  - [Example](#example)
  - [Note](#note)
- [Test Functions](#test-functions)
  - [Key Features](#key-features)
- [Persistent Context](#persistent-context)
  - [Example](#persistent-context-example)

## Storage State Using test.use()

Playwright provides the `test.use()` function to manage browser contexts and their state across tests. This is particularly useful for scenarios where you want to maintain certain states, such as logged-in sessions, across multiple tests.

### Example

```javascript
test.use({ storageState: 'state.json' });

test('Logged-In User Test', async ({ page }) => {
  // Your test code here
});

test('Another Test', async ({ page }) => {
  // Your test code here
});
```

### Note
Ensure to use the correct path to your storage state file.

## Test Functions

The Playwright test class provides a robust framework for writing and organizing your automated tests. It offers a variety of methods to define test behavior, manage test execution, and utilize hooks for setting up and tearing down conditions.

### Key Features

1. **Basic Test Declaration**: Define tests using `test('name', async ({ page }) => {...})`.
2. **Test Modifiers**: Enhance tests with tags and annotations to categorize and provide additional information, such as linking to issues.
3. **Hooks**: Utilize `beforeEach`, `afterEach`, `beforeAll`, and `afterAll` to set up preconditions and clean up after your tests.
4. **Grouping Tests**: Use `test.describe` to group tests logically. This structure supports nested groups for detailed organization.
5. **Execution Control**: Control test execution through methods like `test.only`, `test.skip`, and `test.fail` to focus on specific tests or exclude them under certain conditions.
6. **Configuration**: Configure the test execution environment using `test.describe.configure`, allowing adjustments like parallel or serial execution.

### Example

```javascript
import { test } from '@playwright/test';

test.describe('User Authentication', () => {
  test.beforeEach(async ({ page }) => {
    // Code to set up preconditions
  });

  test('Login Test', async ({ page }) => {
    await page.goto('http://www.leaftaps.com/opentaps');
    await page.fill('#username', 'user');
    await page.fill('#password', 'password');
    await page.click('#loginButton');
    // Assertions
  });

  test('Logout Test', async ({ page }) => {
    // Your test code here
  });

  test.afterEach(async ({ page }) => {
    // Code to clean up after tests
  });
});
```

## Persistent Context

To launch a persistent context, which is useful for scenarios where you need to maintain the same browser state across multiple sessions, you can use the `launchPersistentContext` method.

### Example

```javascript
import { chromium } from 'playwright';

(async () => {
  const userDataDir = './user-data-dir';
  const browserContext = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    viewport: { width: 1280, height: 720 }
  });

  const page = await browserContext.newPage();
  await page.goto('http://www.leaftaps.com/opentaps');
  // Perform actions on the page

  // Close the context and browser when done
  await browserContext.close();
})();
```

## Final Notes

- **Ensure Correct Paths**: Always ensure the paths to your storage state files, user data directories, and other resources are correct.
- **Environment Variables**: Use environment variables to manage sensitive data and configuration settings securely.

