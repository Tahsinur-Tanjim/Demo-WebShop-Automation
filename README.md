# AI-Driven Software Quality Assurance
# Demo Web Shop — UI & API Automation Testing Framework

An end-to-end Software Quality Assurance automation project integrating Web UI testing, REST API testing, automated execution, test reporting, and GitHub-based version control.

## 1. Project Overview

This project is developed as part of an SQA automation assignment. The primary objective is to design and implement a structured automation testing framework for validating web application functionality and REST API behavior.

The framework combines two major testing components:

- **UI Automation Testing:** Developed using Playwright, JavaScript, and the Page Object Model (POM) design pattern.
- **API Automation Testing:** Developed using Postman and Newman for REST API request execution and validation.

The project focuses on automating essential e-commerce workflows, validating API responses, managing dynamic test data, generating test reports, and maintaining a structured GitHub development workflow.

### Project Objectives

The main objectives are:

- Automate critical e-commerce UI workflows.
- Implement the Page Object Model (POM) architecture.
- Validate login functionality using invalid credentials.
- Automate customer registration and shopping cart operations.
- Implement an end-to-end checkout workflow.
- Perform REST API testing using Postman.
- Validate HTTP status codes and response data.
- Implement dynamic API test data.
- Execute API collections through Newman.
- Generate HTML and Allure reports.
- Maintain separate feature branches for different test scenarios.
- Execute UI and API tests independently and sequentially.

## 2. Technology Stack

| Technology | Purpose |
|---|---|
| JavaScript | Automation programming language |
| Node.js | JavaScript runtime environment |
| npm | Package management |
| Playwright | Web UI automation |
| Page Object Model | Test architecture |
| Postman | API request development and testing |
| Newman | Command-line API execution |
| Newman HTML Extra | API HTML reporting |
| Newman Allure Reporter | API Allure reporting |
| Allure Commandline | Test reporting |
| Visual Studio Code | Development environment |
| Git | Version control |
| GitHub | Source code hosting |
| PowerShell / CLI | Test execution |

## 3. Applications Under Test

This project uses two separate testing targets.

### 3.1 Web Application — Demo Web Shop

**Application:** Tricentis Demo Web Shop

**Website URL:** https://demowebshop.tricentis.com/

The web application is used to validate essential e-commerce functionalities, including:

- User login
- Customer registration
- Product search
- Product details
- Shopping cart operations
- Checkout process
- Order confirmation

### 3.2 REST API — JSONPlaceholder

**API Provider:** JSONPlaceholder

**API Base URL:** https://jsonplaceholder.typicode.com

**API Resource:** `/users`

JSONPlaceholder is a free fake REST API used for testing and prototyping.

The API automation component focuses on:

- Retrieving all users using GET requests.
- Validating response structures and user information.
- Dynamically selecting a user ID.
- Updating user information using PUT requests.
- Validating updated response data.

**Important:** JSONPlaceholder is a mock API. PUT requests return simulated updated responses but do not permanently modify the server's database.

## 4. Project Architecture

The project is organized into separate UI and API testing components, with dedicated page objects, test scripts, reporting directories, and configuration files.

### Project Folder Structure

```text
Demo-WebShop-Automation/
│
├── api-tests/
│   ├── Project_API_Testing.postman_collection.json
│   ├── package.json
│   ├── package-lock.json
│   └── reports/
│       └── html/
│           └── report.html
│
├── pages/
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   └── CheckoutPage.js
│
├── tests/
│   ├── q1-invalid-login.spec.js
│   ├── q2-register-cart.spec.js
│   └── q3-e2e-checkout.spec.js
│
├── reports/
│   └── html-report/
│
├── allure-results/
│
├── allure-report/
│
├── playwright-report/
│
├── test-results/
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

*Note: Report and result directories are generated during test execution. Their presence locally does not necessarily mean they are tracked by Git.*

## 5. UI Automation Testing

### 5.1 Framework Design

The UI automation framework is developed using Playwright and JavaScript.

The Page Object Model (POM) design pattern separates page-specific locators and actions from test scenarios.

This approach provides:

- Reusable page objects.
- Better separation of test logic and page interactions.
- Easier maintenance of locators.
- Improved test readability.
- Better scalability as new test cases are introduced.

### 5.2 Implemented UI Test Scenarios

#### Q1 — Invalid Login

**Objective:** Verify that the application handles invalid login credentials correctly.

Test activities:

- Navigate to the login page.
- Enter an invalid email address.
- Enter an invalid password.
- Click the login button.
- Verify that an appropriate error message is displayed.
- Verify that the user is not logged in.

#### Q2 — User Registration and Add to Cart

**Objective:** Automate the customer registration and shopping cart workflow.

Test activities:

- Navigate to the registration page.
- Enter customer information.
- Generate and use dynamic email data.
- Complete the registration process.
- Navigate to the Books category.
- Select the Computing and Internet product.
- Add the product to the shopping cart.
- Verify that the product is added successfully.
- Verify the product and quantity in the cart.

#### Q3 — End-to-End Checkout

**Objective:** Automate a complete e-commerce checkout workflow.

Test activities:

- Register a new customer.
- Search for a product.
- Select the desired product.
- Set the product quantity to 2.
- Add the product to the shopping cart.
- Accept the Terms and Conditions.
- Enter billing and shipping information.
- Select shipping and payment methods.
- Confirm the order.
- Verify the order confirmation.

### 5.3 Page Object Model Implementation

The framework uses separate page classes to manage application interactions.

| Page Object | Responsibility |
|---|---|
| LoginPage.js | Login page locators and actions |
| RegisterPage.js | Customer registration functionality |
| CheckoutPage.js | Checkout-related interactions |

This structure improves code reusability and makes the automation framework easier to maintain.

### 5.4 Playwright Configuration

The Playwright configuration is maintained in `playwright.config.js`.

Key configuration features:

- Test directory: `./tests`
- Browser: Chromium
- Base URL: Demo Web Shop
- Browser viewport: 1920 × 1080
- Worker count: 1
- Fully parallel execution: Disabled
- Slow motion: 1000 milliseconds
- Retries: 0
- Screenshots: Captured on test failure
- Traces: Retained on test failure
- HTML reporting enabled
- Allure reporting integration enabled

The browser runs in visible mode locally and uses headless mode when the `CI` environment variable is enabled.

## 6. API Automation Testing

### 6.1 API Testing Overview

API automation is implemented using Postman and Newman.

The project validates HTTP responses, response structures, dynamically generated values, and data consistency between dependent requests.

**API Base URL:**

```text
https://jsonplaceholder.typicode.com
```

**API Resource:**

```text
/users
```

### 6.2 Implemented API Test Scenarios

#### Scenario 1 — Retrieve All Users

**HTTP Method:** GET

**Endpoint:**

```http
GET https://jsonplaceholder.typicode.com/users
```

Validations include:

- HTTP status code must be 200.
- Response body must contain a non-empty array.
- Each user must contain an ID.
- Each user must contain a name.
- Each user must contain an email address.
- A user ID is dynamically selected for the next request.

#### Scenario 2 — Update User Information

**HTTP Method:** PUT

**Endpoint:**

```http
PUT https://jsonplaceholder.typicode.com/users/{{userId}}
```

Validations include:

- HTTP status code must be 200.
- Response ID must match the selected user ID.
- Updated user information must be returned.
- Updated name must match the submitted value.
- Updated email must match the submitted value.
- Company information is updated and validated.
- Phone information is included and validated.

### 6.3 Dynamic Variables

Postman variables are used to transfer data between dependent API requests.

The selected user ID from the GET request is stored dynamically and reused in the PUT request.

This approach avoids hardcoding a user ID and makes the collection more flexible.

### 6.4 Newman Execution

Newman is used to execute the Postman collection from the command line.

The API testing component supports:

- Command-line collection execution.
- Automated response validation.
- HTML report generation.
- Allure reporting integration.

## 7. GitHub Workflow and Version Control

Git and GitHub are used to maintain source code, track changes, and organize development activities.

### 7.1 Branching Strategy

Separate feature branches are used for different testing tasks.

| Branch | Purpose |
|---|---|
| master | Main project branch |
| q1-invalid-login | Invalid login automation |
| q2-register-cart | Registration and cart automation |
| q3-e2e-checkout | End-to-end checkout automation |
| feature/api-testing | API automation |

### 7.2 Common Git Commands

Check the current branch:

```bash
git branch
```

Check modified files:

```bash
git status
```

Create a new feature branch:

```bash
git checkout -b feature-name
```

Stage changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Add automation test"
```

Push the current branch:

```bash
git push -u origin feature-name
```

Switch to the master branch:

```bash
git checkout master
```

Merge a feature branch:

```bash
git merge feature-name
```

Push the updated master branch:

```bash
git push origin master
```

*Note: Create a new branch only when it does not already exist. Feature branches should be merged into the main branch after reviewing and testing the changes.*

## 8. Test Execution Commands

The root `package.json` contains npm scripts for executing UI tests, API tests, and the complete automation workflow.

### 8.1 Run Individual UI Tests

Run Q1 — Invalid Login:

```bash
npm run test:q1
```

Run Q2 — Register and Add Product to Cart:

```bash
npm run test:q2
```

Run Q3 — End-to-End Checkout:

```bash
npm run test:q3
```

### 8.2 Run All UI Tests

```bash
npm run test:ui
```

This command cleans previous UI report files and executes the complete Playwright test suite.

### 8.3 Run API Tests

```bash
npm run test:api
```

This command executes the API test collection using the API project's npm test script.

### 8.4 Run All UI and API Tests

```bash
npm run test:all
```

This command executes the UI and API testing workflows sequentially.

The `--continue-on-error` option allows the API test workflow to run even if the UI test workflow fails.

### 8.5 Clean Previous UI Reports

```bash
npm run clean:ui
```

This command removes the configured UI report and Allure result directories.

## 9. Test Reporting

The project integrates Playwright HTML reporting and Allure reporting for UI testing, along with HTML and Allure reporting support for API testing.

### 9.1 Playwright HTML Report

Generate the report by running the UI tests.

Open the report:

```bash
npx playwright show-report reports/html-report
```

The report provides information about:

- Test execution status.
- Passed and failed tests.
- Test duration.
- Error details.
- Execution results.

### 9.2 UI Allure Report

Generate and open the UI Allure report:

```bash
npm run report:ui
```

This command generates the report from `allure-results` and opens it.

### 9.3 API HTML Report

Run:

```bash
npm run report:api
```

The API report is generated and opened using the report script configured inside `api-tests`.

### 9.4 Reporting Benefits

The reporting system helps to:

- Review test execution results.
- Identify failed test cases.
- Analyze test failures.
- Track execution history when results are retained.
- Improve debugging and maintenance.

## 10. Installation and Setup

### 10.1 Prerequisites

Install the following software before running the project:

- Node.js
- npm
- Git
- Visual Studio Code
- Postman
- Playwright Chromium browser
- Newman
- Allure Commandline

### 10.2 Clone the Repository

```bash
git clone https://github.com/Tahsinur-Tanjim/Demo-WebShop-Automation.git
```

### 10.3 Navigate to the Project Directory

```bash
cd Demo-WebShop-Automation
```

### 10.4 Install Root Dependencies

```bash
npm install
```

### 10.5 Install Playwright Chromium

```bash
npx playwright install chromium
```

### 10.6 Install API Dependencies

```bash
cd api-tests
npm install
```

Return to the root project directory:

```bash
cd ..
```

### 10.7 Execute the Complete Automation Suite

```bash
npm run test:all
```

Alternatively, execute UI and API tests independently using their respective npm scripts.

## 11. Quality Engineering Practices Demonstrated

This project demonstrates practical applications of several Software Quality Assurance and automation engineering concepts:

- Functional UI Testing.
- End-to-End Testing.
- REST API Testing.
- Page Object Model Architecture.
- Reusable Page Objects.
- Locator Management.
- Dynamic Test Data Generation.
- HTTP Method Validation.
- Status Code Verification.
- Response Body Validation.
- Postman Variable Management.
- Newman CLI Execution.
- Automated Test Execution.
- Sequential Test Orchestration.
- HTML and Allure Reporting.
- Git Branching Strategy.
- Version Control.
- GitHub Repository Management.
- Technical Documentation.

## 12. Challenges and Considerations

The project uses publicly available demonstration applications and mock API services.

Some important considerations include:

- The Demo Web Shop is an external application, so changes to its interface may require locator updates.
- Dynamic registration data is required to avoid duplicate email addresses.
- Checkout testing depends on the application's external availability and workflow behavior.
- JSONPlaceholder simulates API update behavior and does not permanently persist PUT changes.
- Dynamic API data may differ between executions.
- Test execution requires network connectivity.
- Report generation depends on the configured reporting dependencies.
- The current GitHub workflow uses feature branches and a master branch.

## 13. Future Enhancements

Potential improvements include:

- Integrating GitHub Actions for CI/CD.
- Adding cross-browser testing.
- Expanding UI automation coverage.
- Adding more API testing scenarios.
- Implementing API schema validation.
- Introducing environment-based configuration.
- Improving test data management.
- Adding reusable API utilities.
- Implementing automated test execution on every pull request.
- Improving logging and debugging capabilities.

## 14. GitHub Repository

**Project Name:** Demo Web Shop UI & API Automation Testing Framework

**Repository:** https://github.com/Tahsinur-Tanjim/Demo-WebShop-Automation

The repository contains:

- UI automation source code.
- Page Object Model implementation.
- Playwright test scripts.
- Postman API collection.
- Newman execution configuration.
- Reporting configuration.
- Project documentation.

## 15. Author

**Project:** Demo Web Shop — UI & API Automation Testing

**Domain:** Software Quality Assurance | QA Automation | UI & API Testing

**GitHub:** [Tahsinur-Tanjim](https://github.com/Tahsinur-Tanjim)

---

## Final Note

This project represents a practical implementation of Software Quality Assurance concepts through UI automation, REST API testing, version control, and automated test reporting.

The main focus is to develop a structured, maintainable, and repeatable automation testing framework that demonstrates how different QA tools and techniques can work together in a real-world testing workflow.

**Quality is not just about finding defects. It is about building confidence in software through systematic verification.**