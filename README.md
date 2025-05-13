# 🧪 UI Test Automation for DemoBlaze using Playwright (JavaScript)

This project demonstrates automated UI testing for [DemoBlaze](https://www.demoblaze.com) — a real-world e-commerce demo site — using [Playwright](https://playwright.dev/) with JavaScript.

All test cases follow the **Page Object Model (POM)** design pattern and are structured in a modular, SOLID-compliant manner, grouped by features such as login, cart, checkout, UI components, and alerts.

---

## ✅ Features & Highlights

- **Framework**: [Playwright Test](https://playwright.dev/docs/test-intro)
- **Architecture**: Page Object Model (POM)
- **CI Integration**: GitHub Actions ready
- **Test Design Techniques**: Boundary Value Analysis, Equivalence Class Partitioning, Negative Testing
- **Cross-browser compatible**
- **Report**: Generates rich HTML test reports
- **Reusable utils**: Login and order data stored centrally

---

## 📁 Folder Structure

```
.
├── pages/           # All Page Object Model classes
├── tests/           # Feature-based test specs
├── utils/           # Shared test data (e.g., login credentials)
├── .github/         # GitHub Actions workflow (CI)
├── playwright.config.js
└── README.md
```

---

## 🧪 Test Cases Implemented (12 Unique Scenarios)

### Login (`tests/login.spec.js`)

1. Log in with valid credentials
2. Log in with invalid credentials
3. Log in with empty credentials
4. Logout and return to login state

### Cart (`tests/cart.spec.js`)

5.  Add a single product to cart
6.  Remove product from cart
7.  Add multiple products to cart
8.  Add to cart as a logged-in user

### Checkout (`tests/checkout.spec.js`)

9.  Place order with valid form
10. Attempt to place order with empty form

### 📦 UI Components

11.  Category filter working (`tests/category.spec.js`)
12.  Validate no broken product images (`tests/image.spec.js`)
13.  Alert appears on add-to-cart (`tests/alert.spec.js`)
14.  Place order modal opens and closes (`tests/modal.spec.js`)

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (v16+)
- npm

### 📦 Installation

```bash
npm install
npx playwright install
```

---

## ▶️ Running Tests

### Run all tests

```bash
npx playwright test
```

### Run in headed browser mode

```bash
npx playwright test --headed
```

### Run a specific test by name

```bash
npx playwright test -g "Add multiple products to cart"
```

---

## 📊 View HTML Report

```bash
npx playwright show-report
```

> After test execution, an interactive HTML report will be generated inside the `playwright-report/` directory.

---

## GitHub Actions (CI)

This project uses GitHub Actions to automatically run all Playwright tests on every push or pull request to the main branch. It:

- Installs dependencies and Playwright

- Runs tests in headless mode

- Uploads the HTML report as an artifact

📍 Check the Actions tab on GitHub to view test results and download reports.

---

## 📌 Notes

- The application under test is [https://www.demoblaze.com](https://www.demoblaze.com)
- Cart and product selection work without login.
- Order placement and logout functionalities require login.
- User credentials and form data are stored in `utils/testData.js`.

---

## 🙋 Author

**Simran Choudhary**  
📧 simranchoudhary1319@gmail.com / simran4work@outlook.com  
🔗 [GitHub: @simranchoudhary](https://github.com/simranchoudhary)
