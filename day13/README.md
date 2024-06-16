# Playwright JS Data Reading Guide

This guide outlines how to efficiently read data from various sources such as JSON, CSV, and environment variables in your Playwright test scripts. Additionally, it includes instructions for enabling video capture and tracing.

## Table of Contents
- [JSON](#json)
- [CSV](#csv)
- [Environment Variables (ENV)](#environment-variables-env)
- [Video Capture](#video-capture)
- [Tracing](#tracing)

## JSON

You can read data from a JSON file using the Node.js `fs` module or any other preferred library.

### Example

```javascript
import fs from 'fs';

const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// Use jsonData in your tests
```

## CSV

To read data from a CSV file, you can utilize libraries like `csv-parse` combined with `fs`.

### Example

```javascript
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const loginData = parse(fs.readFileSync(path.join(__dirname, "testData.csv")), {
    columns: true,
    skip_empty_lines: true,
    skip_records_with_empty_values: true
});

for (const data of loginData) {
    test(`Learn to read data from CSV file for ${data.testId}`, async ({ page }) => {
        await page.goto("http://www.leaftaps.com/opentaps");
        await page.fill("#username", data.username);
        await page.fill("#password", data.password);
        await page.click(".decorativeSubmit");
    });
}
```

## Environment Variables (ENV)

Accessing environment variables in tests can be done using `process.env`.

### Example

```javascript
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

// Use username and password in your tests
```

## Video Capture

To enable video capture in your Playwright tests, you need to configure it in the `context` options.

### Example

```javascript
import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: { width: 1280, height: 720 }
        }
    });

    const page = await context.newPage();
    await page.goto('http://www.leaftaps.com/opentaps');
    // Perform actions on the page

    await browser.close();
})();
```

## Tracing

Tracing helps in debugging your tests by capturing screenshots, console logs, network activity, etc.

### Example

```javascript
import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();

    // Start tracing before creating a page
    await context.tracing.start({ screenshots: true, snapshots: true });

    const page = await context.newPage();
    await page.goto('http://www.leaftaps.com/opentaps');
    // Perform actions on the page

    // Stop tracing and save it to a file
    await context.tracing.stop({ path: 'trace.zip' });

    await browser.close();
})();
```

## Final Notes

Ensure you have the necessary environment variables set up in your development environment. You can use a `.env` file and the `dotenv` package to load them:

### Example

```bash
# .env file
USERNAME=myusername
PASSWORD=mypassword
```

```javascript
// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
```

