# Objective 2 – Week 3 Day 1
## Unit Testing – Analytics Service

### Student
**Name:** Jeric De Castro

### Branch
`analytics-service-unit-testing`

---

# Objective

The objective of this task is to implement **unit tests** for the Analytics Service module using **Vitest**. The tests verify that each analytics function returns the expected data independently of the database by using mocked model functions.

---

# Task Description

Implement unit testing for the Analytics Service.

The following service functions were tested:

- getDashboardSummary()
- getBookingTrends()
- getPerformanceMetrics()

---

# Files Created

```
backend/
│
├── models/
│   └── analyticsModel.js
│
├── services/
│   └── analyticsService.js
│
└── tests/
    └── analyticsService.test.js
```

---

# File Description

## analyticsModel.js

Contains the analytics data source.

For this activity, the model returns **mock analytics data** instead of retrieving information from the database.

Functions:

- getDashboardSummary()
- getBookingTrends()
- getPerformanceMetrics()

---

## analyticsService.js

Contains the business logic for the Analytics module.

The service receives requests and calls the corresponding functions from the Analytics Model.

Functions:

- getDashboardSummary()
- getBookingTrends()
- getPerformanceMetrics()

---

## analyticsService.test.js

Contains the unit tests for the Analytics Service using **Vitest**.

The Analytics Model is mocked using:

```javascript
vi.mock("../models/analyticsModel.js");
```

This allows the service logic to be tested without depending on the database.

---

# Unit Tests Implemented

## 1. getDashboardSummary()

Purpose:

Verifies that the Analytics Service returns the correct dashboard summary.

Expected Output:

- Total Bookings
- Completed Bookings
- Pending Bookings
- Total Clients
- Total Revenue

Status:

✔ Passed

---

## 2. getBookingTrends()

Purpose:

Verifies that the Analytics Service returns the expected booking trend data.

Expected Output:

- Monthly booking records
- Correct month labels
- Correct booking values

Status:

✔ Passed

---

## 3. getPerformanceMetrics()

Purpose:

Verifies that the Analytics Service returns the expected performance metrics.

Expected Output:

- Booking Completion Rate
- Client Satisfaction
- Revenue Growth
- Service Quality Score

Status:

✔ Passed

---

# Test Result

Command:

```bash
npx vitest run
```

Result:

```text
✓ tests/bookingService.test.js (7 tests)
✓ tests/analyticsService.test.js (3 tests)

Test Files  2 passed (2)
Tests      10 passed (10)
```

---

# Test Suite / Acceptance Criteria

| Acceptance Criteria | Status |
|---------------------|--------|
| getDashboardSummary() returns correct summary | ✔ Passed |
| getBookingTrends() returns expected analytics data | ✔ Passed |
| getPerformanceMetrics() calculates metrics correctly | ✔ Passed |

---

# Technologies Used

- JavaScript (ES Modules)
- Node.js
- Vitest

---

# Summary

The Analytics Service was successfully unit tested using mocked model functions. The service correctly returned dashboard summaries, booking trends, and performance metrics. All unit tests passed successfully, confirming that the Analytics Service business logic works as expected without relying on a live database.

---

# Sprint Reference

**Objective 2**

**Week 3 – Day 1**

Task:

> Unit Testing – Analytics Service

Deliverables:

- Dashboard Summary Unit Tests
- Booking Trends Unit Tests
- Performance Metrics Unit Tests

Status:

**Completed**