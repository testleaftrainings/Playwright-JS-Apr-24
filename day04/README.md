## Agenda: Dig deeper into Playwright

# Understanding Browser, Context, and Pages

In Playwright, automation is structured around three key objects: Browser, Context, and Pages, each serving distinct roles in the automation workflow.

## Browser

Represents an instance of a web browser. Playwright can control multiple Browser instances simultaneously, with each operating in its isolated environment.

## Context
A Browser Context simulates an incognito session, allowing for parallel tests in a single Browser instance without shared cookies, localStorage, or session data.

## Pages

A Page object represents a single browser tab or window, serving as the primary interface for web content interaction, including navigation and element manipulation.

# Playwright Locators

     - page.getByRole() - to locate a web element by its role (button, link, checkbox)
     - page.getByText() - to locate a web element by text content
     - page.getByLabel() - to locate a web element by the label's text
     - page.getByPlaceholder() - to locate an input by placeholder
     - page.getByAltText() - to locate a web element by its text alternative
     - page.getByTitle() - to locate a web element by its title attribute 
      <span title = "Sign In">
     - page.getByTestId() - to locate a web element based on its data-testId attribute
