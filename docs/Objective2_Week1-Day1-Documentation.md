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

- Create Dashboard Component
- Create SummaryCards Component
- Create Navigation Component

---

## Deliverables

### Dashboard Component
Displays the dashboard title and serves as the main dashboard view.

### SummaryCards Component
Displays summary information such as booking statistics.

### Navigation Component
Provides navigation for dashboard pages and features.

---

## Folder Structure

```text
frontend/
│
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── Navigation.jsx
│   │   └── SummaryCards.jsx
│   │
│   ├── tests/
│   │   ├── Dashboard.test.jsx
│   │   ├── Navigation.test.jsx
│   │   └── SummaryCards.test.jsx
│   │
│   └── App.jsx
│
├── package.json
├── package-lock.json
└── vitest.config.js
```

---

## Technologies Used

- React
- Vitest
- React Testing Library
- JSDOM
- GitHub Actions

---

## Test Cases

### Dashboard Component

**Test Objective**
Verify that the Dashboard component renders correctly.

**Expected Result**
The Dashboard title is displayed.

**Status**
Passed

---

### SummaryCards Component

**Test Objective**
Verify that the SummaryCards component displays booking data correctly.

**Expected Result**
Summary information is displayed correctly.

**Status**
Passed

---

### Navigation Component

**Test Objective**
Verify that the Navigation component renders correctly.

**Expected Result**
Navigation content is displayed correctly.

**Status**
Passed

---

## Test-Driven Development Process

### Red Phase
Created failing test cases before component implementation.

### Green Phase
Implemented the minimum code required for all tests to pass.

### Refactor Phase
Reviewed and organized component structure while preserving functionality.

---

## Test Results

Command:

```bash
npm run test -- --run
```

Output:

```text
✓ src/tests/Dashboard.test.jsx
✓ src/tests/SummaryCards.test.jsx
✓ src/tests/Navigation.test.jsx

Test Files  3 passed (3)
Tests       3 passed (3)
```

---

## Acceptance Criteria

| Criteria | Status |
|-----------|----------|
| Dashboard component renders correctly | ✅ Passed |
| SummaryCards component displays data correctly | ✅ Passed |
| Navigation component functions correctly | ✅ Passed |
| Component tests created | ✅ Passed |
| TDD process applied | ✅ Passed |

---

## Conclusion

The Dashboard, SummaryCards, and Navigation components were successfully developed and tested using the Test-Driven Development (TDD) approach. All component tests passed successfully, meeting the required acceptance criteria for Objective 2 Week 1 Day 1 of the Business Analytics and Reporting Module.