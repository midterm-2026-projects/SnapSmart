# Objective 2 – Dashboard Module

## Overview

The Dashboard Module provides analytics and reporting features for the SnapSmart Booking System. It retrieves booking records from the Booking Model, processes the data through the Dashboard Service, and exposes the analytics using REST API endpoints. This module follows a layered architecture consisting of Routes, Controllers, Services, and Models.

---

# Week 1 – Dashboard UI Components

## Day 1 – Create Dashboard UI Components

### Objective

Develop reusable Dashboard UI components using a component-based architecture and Test-Driven Development (TDD).

### Subtasks

- Create Dashboard layout component
- Develop Summary Cards component
- Implement Navigation component
- Create reusable Dashboard UI structure
- Perform unit testing using Vitest

### Deliverables

- Dashboard Component
- Summary Cards Component
- Navigation Component
- Unit Test Cases
- Documentation

### Test Suite

- Verify Dashboard renders successfully
- Verify Summary Cards display correctly
- Verify Navigation renders correctly

---

## Day 2 – Dashboard Functional Components

### Objective

Implement functional Dashboard components by integrating booking analytics into the user interface.

### Subtasks

- Connect Summary Cards to booking analytics
- Display booking statistics
- Display dashboard metrics
- Render booking overview dynamically
- Validate functional behavior

### Deliverables

- Functional Dashboard Components
- Analytics Display
- Updated Dashboard UI
- Documentation

### Test Suite

- Verify booking statistics display correctly
- Verify dashboard metrics update correctly
- Verify analytics are rendered successfully

---

# Week 2 – Dashboard API Preparation

## Day 1 – Dashboard Analytics Service

### Objective

Develop backend business logic for dashboard analytics using booking data.

### Subtasks

- Retrieve booking records from Booking Model
- Compute dashboard summary
- Compute booking trends
- Compute performance metrics

### Deliverables

- Dashboard Service
- Dashboard Analytics Functions
- Documentation

### Test Suite

- Verify dashboard summary computation
- Verify booking trends computation
- Verify performance metrics computation

---

## Day 2 – Dashboard API Design

### Objective

Design REST API endpoints required for Dashboard analytics integration.

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/dashboard/summary` | Returns dashboard summary |
| GET | `/dashboard/trends` | Returns monthly booking trends |
| GET | `/dashboard/performance` | Returns dashboard performance metrics |

### Deliverables

- Dashboard API Design
- Endpoint Structure
- Documentation

---

# Week 3 – Dashboard Backend Integration

## Day 1 – Dashboard Analytics Unit Testing

### Objective

Validate dashboard analytics business logic through unit testing.

### Subtasks

- Test Dashboard Summary computation
- Test Booking Trends computation
- Test Performance Metrics computation

### Deliverables

- Updated Booking Model
- Dashboard Analytics Logic
- Unit Test Cases
- Documentation

### Test Suite

- Verify dashboard summary calculations
- Verify booking trends calculations
- Verify performance metrics calculations

---

## Day 2 – Dashboard Backend Integration

### Objective

Integrate Dashboard backend components with the Booking Module and expose analytics through REST API endpoints.

### Backend Architecture

```
Client
   │
   ▼
Dashboard Routes
   │
   ▼
Dashboard Controller
   │
   ▼
Dashboard Service
   │
   ▼
Booking Model
   │
   ▼
JSON Response
```

---

## Components Developed

### Dashboard Service

Responsible for processing booking data and generating dashboard analytics.

Implemented Functions:

- `getDashboardSummary()`
- `getBookingTrends()`
- `getPerformanceMetrics()`

---

### Dashboard Controller

Handles incoming HTTP requests and returns JSON responses.

Implemented Functions:

- `getDashboardSummary()`
- `getBookingTrends()`
- `getPerformanceMetrics()`

---

### Dashboard Routes

Configured the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/dashboard/summary` | Retrieve dashboard summary |
| GET | `/dashboard/trends` | Retrieve booking trends |
| GET | `/dashboard/performance` | Retrieve performance metrics |

---

### Express Application

Registered Dashboard Routes inside the Express application.

```javascript
app.use("/", dashboardRoutes);
```

---

## Integration Flow

```
Client Request

↓

Dashboard Routes

↓

Dashboard Controller

↓

Dashboard Service

↓

Booking Model

↓

JSON Response
```

---

## Dashboard Analytics

### Dashboard Summary

Computes:

- Total Bookings
- Completed Bookings
- Pending Bookings
- Total Clients
- Total Revenue

---

### Booking Trends

Computes monthly booking counts for:

- January
- February
- March
- April
- May
- June

---

### Performance Metrics

Computes:

- Booking Completion Rate
- Client Satisfaction Rating

---

# Integration Testing

## Success Test Cases

### Dashboard Summary

- Retrieve dashboard summary successfully

### Booking Trends

- Retrieve booking trends successfully

### Performance Metrics

- Retrieve performance metrics successfully

---

## Error Test Cases

### Dashboard Summary

- Return **404** when no booking data exists

### Booking Trends

- Return **404** when no booking data exists

### Performance Metrics

- Return **404** when no booking data exists

---

# Files Modified

```
backend/
│
├── app.js
│
├── controllers/
│   └── dashboardController.js
│
├── routes/
│   └── dashboardRoutes.js
│
├── services/
│   ├── bookingService.js
│   └── dashboardService.js
│
├── models/
│   └── bookingModel.js
│
└── tests/
    ├── bookingModel.test.js
    ├── bookingService.test.js
    └── dashboardIntegration.test.js
```

---

# Test Results

```
✓ bookingModel.test.js

✓ bookingService.test.js

✓ bookingIntegration.test.js

✓ dashboardIntegration.test.js

23 Tests Passed
```

---

# Summary

The Dashboard Backend Integration successfully connects the Dashboard Module with the Booking Module through the Service Layer. Dashboard analytics are generated using booking records from the Booking Model and exposed through REST API endpoints. Integration testing validates both successful responses and error handling, ensuring reliable communication between backend components.

---

## Completion Status

| Week | Day | Task | Status |
|------|-----|------|--------|
| Week 1 | Day 1 | Dashboard UI Components | ✅ Completed |
| Week 1 | Day 2 | Dashboard Functional Components | ✅ Completed |
| Week 2 | Day 1 | Dashboard Analytics Service | ✅ Completed |
| Week 2 | Day 2 | Dashboard API Design | ✅ Completed |
| Week 3 | Day 1 | Dashboard Analytics Unit Testing | ✅ Completed |
| Week 3 | Day 2 | Dashboard Backend Integration | ✅ Completed |