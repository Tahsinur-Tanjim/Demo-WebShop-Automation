# Demo Web Shop UI Automation

## 1. Project Overview

This project is developed as part of an SQA automation assignment. The main objective is to automate UI testing of the Demo Web Shop application using Playwright and JavaScript.

**Application Under Test:** Demo Web Shop

**Website URL:** https://demowebshop.tricentis.com/

### Technologies Used

- JavaScript
- Node.js
- Playwright
- Visual Studio Code
- Git
- GitHub

---

## 2. Phase 1: Initial Project Setup

This phase includes project initialization, Playwright installation, browser configuration, initial test execution, and GitHub repository setup.

### Step 1: Check Installed Software

Open the VS Code terminal and execute these commands one by one.

**Check Node.js:**
node -v
**Check NPM:**
npm -v
**Check Git:**
git --version

These commands verify that Node.js, NPM, and Git are installed correctly.

### Step 2: Initialize the Project

Create a folder named `Demo-WebShop-Automation` and open it in VS Code.

**Initialize the Node.js project:**

npm init -y

### Step 3: Install Playwright

**Install Playwright:**

npm init playwright@latest

**Check Playwright version:**
npx playwright --version

### Step 4: Create Project Folder Structure

### Step 5: Configure Playwright

### Step 6: Configure .gitignore

### Step 7: Initialize Git
git init
### Step 11: Rename the Branch to Master



### Phase 2: UI Automation Scenarios (Playwright with POM)

This phase includes implementation of automation test scenarios using Playwright and the Page Object Model (POM) design pattern.

### Q1: Invalid Login Scenario

# Objective #

Verify that the application displays an error message when invalid login credentials are provided.

**Create Feature Branch**

git checkout \-b q1\-invalid\-login

**Create Page Object**

pages/LoginPage.js

**Create Test Script**

tests/q1\-invalid\-login.spec.js

#### Test Steps

1. Open Demo Web Shop.
2. Click Login.
3. Enter invalid email.
4. Enter invalid password.
5. Click Login button.
6. Verify login error message.

**Execute Test**

npx playwright test tests/q1\-invalid\-login.spec.js

**Generate HTML Report**

npx playwright show\-report reports/html\-report

**Commit Changes**

git add .

git commit \-m "Implemented invalid login scenario"

git push \-u origin q1\-invalid\-login


### Q2: Register and Add Product to Cart

#### Objective

Verify that a new customer can register successfully, add a product to the shopping cart, and validate product information.

**Create Feature Branch**

git checkout \-b q2\-register\-cart

**Create Page Object**

pages/RegisterPage.js

**Create Test Script**

tests/q2\-register\-cart.spec.js

#### Test Steps

1. Register a new customer using a dynamic email.
2. Verify successful registration.
3. Navigate to Books category.
4. Select "Computing and Internet" product.
5. Add product to cart.
6. Open shopping cart.
7. Verify product information.
8. Verify quantity.

**Execute Test**

npx playwright test tests/q2\-register\-cart.spec.js

**Generate HTML Report**

npx playwright show\-report reports/html\-report

**Commit Changes**

git add .

git commit \-m "Implemented register and add product to cart scenario"

git push \-u origin q2\-register\-cart


### Q3: End\-to\-End Checkout Flow

#### Objective

Verify complete checkout functionality from product search to successful order placement.

**Create Feature Branch**

git checkout \-b q3\-e2e\-checkout

**Create Page Object**

pages/CheckoutPage.js

**Create Test Script**

tests/q3\-e2e\-checkout.spec.js

#### Test Steps

1. Register a new customer.
2. Search for "Computing and Internet".
3. Open product details page.
4. Update quantity to 2.
5. Add product to cart.
6. Open shopping cart.
7. Accept Terms and Conditions.
8. Proceed to Checkout.
9. Complete Billing Address.
10. Complete Shipping Address.
11. Select Shipping Method.
12. Select Payment Method.
13. Confirm Order.
14. Verify successful order placement.

**Execute Test**

npx playwright test tests/q3\-e2e\-checkout.spec.js

**Generate HTML Report**

npx playwright show\-report reports/html\-report

**Commit Changes**

git add .

git commit \-m "Implemented end to end checkout scenario"

git push \-u origin q3\-e2e\-checkout


## Allure Report Generation

Generate Allure Results:

npx playwright test

Generate Allure Report:

npx allure generate allure\-results \-\-clean \-o allure\-report

Open Allure Report:

npx allure open allure\-report


## Branch Strategy

The project follows a feature branch approach.

master

├── q1\-invalid\-login

├── q2\-register\-cart

└── q3\-e2e\-checkout

Each scenario is developed in a separate branch and later merged into the master branch.

## Current Status

Completed:

Project Setup

 Playwright Configuration

 GitHub Integration

 Q1 Invalid Login Scenario

 Q2 Register and Add Product to Cart Scenario

 Q3 End\-to\-End Checkout Scenario

 HTML Report Generation

 Allure Report Generation

 Page Object Model (POM)

 ## Phase 3: API Automation (Postman with Newman)

This phase includes API testing of the JSONPlaceholder Users API using Postman and Newman.

**API Under Test:** https://jsonplaceholder.typicode.com/users

### Technologies Used
- Postman
- Newman
- newman-reporter-htmlextra
- newman-reporter-allure
- Allure Commandline

### Folder Structure

api-tests/
├── Project_API_Testing.postman_collection.json
├── package.json
└── package-lock.json

**Create Feature Branch**

git checkout -b feature/api-testing

### API Test Steps
1. Send a GET request to /users.
2. Verify status code is 200.
3. Verify the response is a non-empty array.
4. Verify each user has "id", "name" and "email".
5. Save one user ID in a local variable (pm.variables).
6. Send a PUT request to "/users/{{userId}}".
7. Update "name", "email" and "company.name" using dynamic data.
8. Verify status code is 200.
9. Verify the returned ID matches the saved ID.
10. Verify phone is not empty.
11. Verify the returned name matches the updated name.

### Note on the PUT request
"phone" is also sent in the PUT body with its original value. JSONPlaceholder is a mock API and returns only the fields that were sent, so without "phone" the "Phone should not be empty" check would fail. Only "name", "email" and "company.name" are actually updated.

### Setup

**Install Newman and the reporters globally:**

npm install -g newman newman-reporter-htmlextra newman-reporter-allure allure-commandline

**Install local dependencies:**

cd api-tests

npm install

### Execute API Tests

cd api-tests

npm test

This cleans old results, runs the collection and generates the HTML and Allure results.

### Generate Reports

HTML report: api-tests/reports/html/report.html

**Allure report:**

npm run report

### Commit Changes

git add .

git commit -m "Add Postman collection for GET all users and PUT update user"

git push -u origin feature/api-testing


## Running the Tests

##### Run each scenario individually #####

npm run test:q1

npm run test:q2

npm run test:q3

npm run test:api

### Run all tests together (UI then API) ###

npm run test:all

### Generate reports

UI Allure report: npm run report:ui

API Allure report: npm run report:api

API HTML report: api-tests/reports/html/report.html

UI HTML report: npx playwright show-report reports/html-report