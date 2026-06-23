# Objective 2 – Week 1 Day 1 Documentation

## Objective Title

Business Analytics and Reporting Module

## Owner

Jeric S. De Castro

---

## Objective Description

This objective focuses on developing analytics dashboards and reporting features that help monitor booking activities, financial performance, photographer and videographer assignments, and business trends. The module provides visual reports and summaries that support decision-making for Toni Photography. It also receives booking-related data from the Booking and Gallery Management Module and can provide summarized information for the AI Chatbot and Notification Module.

---

## Task Description

Create Dashboard UI Components using Test-Driven Development (TDD).

---

## Sub-Tasks Completed

* Create Navigation Component
* Create SummaryCards Component
* Create FinancialSummary Component
* Create BookingTrends Component
* Create RecentBookings Component

---

## Deliverables

### Navigation Component

Provides navigation links for dashboard pages and features.

### SummaryCards Component

Displays business summary information such as bookings, completed transactions, pending bookings, clients, revenue, and upcoming events.

### FinancialSummary Component

Displays financial information including monthly revenue, expenses, and profit.

### BookingTrends Component

Displays booking trend visualization or placeholder data for future chart integration.

### RecentBookings Component

Displays recent booking records or a default message when no bookings are available.

---

## Folder Structure

```text
frontend/
│
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── SummaryCards.jsx
│   │   ├── FinancialSummary.jsx
│   │   ├── BookingTrends.jsx
│   │   └── RecentBookings.jsx
│   │
│   ├── tests/
│   │   ├── Navigation.test.jsx
│   │   ├── SummaryCards.test.jsx
│   │   ├── FinancialSummary.test.jsx
│   │   ├── BookingTrends.test.jsx
│   │   └── RecentBookings.test.jsx
│   │
│   └── App.jsx
│
├── preview.html
├── package.json
├── package-lock.json
└── vitest.config.js
```

---

## Technologies Used

* React
* Vitest
* React Testing Library
* JSDOM
* GitHub Actions

---

## Test Cases

### Navigation Component

#### Test Case 1

**Objective:** Verify that the navigation title is rendered.

**Expected Result:** Navigation title is displayed.

**Status:** Passed

#### Test Case 2

**Objective:** Verify that navigation menu items are displayed.

**Expected Result:** Dashboard menu and navigation items are visible.

**Status:** Passed

---

### SummaryCards Component

#### Test Case 1

**Objective:** Verify default values when no data is provided.

**Expected Result:** All summary values display 0.

**Status:** Passed

#### Test Case 2

**Objective:** Verify booking statistics when data exists.

**Expected Result:** Booking summary information is displayed correctly.

**Status:** Passed

---

### FinancialSummary Component

#### Test Case 1

**Objective:** Verify default state when no financial data exists.

**Expected Result:** "No financial data available" message is displayed.

**Status:** Passed

#### Test Case 2

**Objective:** Verify financial data rendering.

**Expected Result:** Revenue, expenses, and profit information are displayed.

**Status:** Passed

---

### BookingTrends Component

#### Test Case 1

**Objective:** Verify default state when no trend data exists.

**Expected Result:** "No booking trend data available" message is displayed.

**Status:** Passed

#### Test Case 2

**Objective:** Verify trend data rendering.

**Expected Result:** Chart placeholder is displayed.

**Status:** Passed

---

### RecentBookings Component

#### Test Case 1

**Objective:** Verify default state when no bookings exist.

**Expected Result:** "No bookings available" message is displayed.

**Status:** Passed

#### Test Case 2

**Objective:** Verify booking data rendering.

**Expected Result:** Booking records are displayed correctly.

**Status:** Passed

---

## Test-Driven Development Process

### Red Phase

Created failing test cases before implementing each component.

### Green Phase

Implemented the minimum functionality required for all tests to pass.

### Refactor Phase

Refined component structure and improved readability while preserving functionality.

---

## Test Results

Command:

```bash
npm run test -- --run
```

Output:

```text
✓ src/tests/Navigation.test.jsx
✓ src/tests/SummaryCards.test.jsx
✓ src/tests/FinancialSummary.test.jsx
✓ src/tests/BookingTrends.test.jsx
✓ src/tests/RecentBookings.test.jsx

Test Files  5 passed (5)
Tests       10 passed (10)
```

---

## Test Coverage Summary

| Component        | No Data State Tested | With Data State Tested | Status |
| ---------------- | -------------------- | ---------------------- | ------ |
| Navigation       | ✅                    | ✅                      | Passed |
| SummaryCards     | ✅                    | ✅                      | Passed |
| FinancialSummary | ✅                    | ✅                      | Passed |
| BookingTrends    | ✅                    | ✅                      | Passed |
| RecentBookings   | ✅                    | ✅                      | Passed |

---

## Acceptance Criteria

| Criteria                           | Status   |
| ---------------------------------- | -------- |
| Navigation component created       | ✅ Passed |
| SummaryCards component created     | ✅ Passed |
| FinancialSummary component created | ✅ Passed |
| BookingTrends component created    | ✅ Passed |
| RecentBookings component created   | ✅ Passed |
| Component tests created            | ✅ Passed |
| No-data scenarios tested           | ✅ Passed |
| With-data scenarios tested         | ✅ Passed |
| TDD process applied                | ✅ Passed |

---

## Conclusion

The Navigation, SummaryCards, FinancialSummary, BookingTrends, and RecentBookings components were successfully developed and tested using the Test-Driven Development (TDD) approach. Both no-data and with-data scenarios were validated for each component. All test files and test cases passed successfully, satisfying the requirements for Objective 2 Week 1 Day 1 of the Business Analytics and Reporting Module.
