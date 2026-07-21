# Objective 2 - Backend Testing

## Overview

Objective 2 focuses on validating backend functionality through unit testing and integration testing. The objective ensures that business logic, API endpoints, and backend components behave correctly before full system integration.

---

# Week 1 - Booking Model Unit Testing

## Task

Create unit tests for the Booking Model.

### Implemented Functions

- createBooking()
- getBookingById()
- updateBookingStatus()
- getAllBookings()

### Test Coverage

- Create booking successfully
- Generate unique booking ID
- Retrieve booking by existing ID
- Return undefined for non-existing booking
- Update booking status
- Return null when booking does not exist
- Retrieve all bookings

### Expected Output

- Booking is created correctly.
- Booking data is stored properly.
- Booking information is retrieved correctly.
- Booking status updates successfully.
- Invalid booking IDs are handled properly.

---

# Week 2 - Booking Service Unit Testing

## Task

Create unit tests for the Booking Service business logic.

### Implemented Functions

- createBooking()
- getBookingById()
- updateBookingStatus()

### Test Coverage

#### createBooking()

- Create booking successfully
- Throw error when client name is missing
- Throw error when event date is missing

#### getBookingById()

- Return booking when ID exists
- Return undefined when booking does not exist

#### updateBookingStatus()

- Update booking status successfully
- Throw error when booking is not found

### Expected Output

- Booking validation works correctly.
- Invalid input throws proper errors.
- Booking retrieval works correctly.
- Booking status updates correctly.

---

# Week 3 - Dashboard Service Unit Testing

## Task

Create unit tests for the Dashboard Service that generates dashboard analytics using booking records.

The Dashboard Service dynamically generates analytics from booking records stored in the Booking Model without using fixed or hardcoded values.

### Implemented Functions

- getDashboardSummary()
- getBookingTrends()
- getPerformanceMetrics()

### Data Source

```
Booking Model
      ↓
Dashboard Service
```

### Test Coverage

#### getDashboardSummary()

- Returns dashboard summary successfully
- Calculates total bookings
- Calculates completed bookings
- Calculates pending bookings
- Throws error when no booking data exists

#### getBookingTrends()

- Returns monthly booking statistics
- Groups bookings correctly by month
- Throws error when no booking data exists

#### getPerformanceMetrics()

- Calculates booking completion rate
- Calculates client satisfaction
- Throws error when no booking data exists

### Expected Output

- Dashboard summary is generated correctly.
- Booking trends are calculated correctly.
- Performance metrics are calculated correctly.
- Empty booking data is handled properly.
- Dashboard values are dynamically generated from booking records.

---

# Week 4 Day 1 - Report Service Unit Testing

## Task

Create unit tests for the Report Service that generates booking reports.

The Report Service dynamically generates reports from booking records stored in the Booking Model.

### Implemented Functions

- generateReport()
- getGeneratedReports()
- downloadReport()

### Data Source

```
Booking Model
      ↓
Report Service
```

### Test Coverage

#### generateReport()

- Generate report successfully
- Calculate total bookings
- Calculate completed bookings
- Calculate pending bookings
- Calculate cancelled bookings
- Calculate total revenue
- Handle empty booking records

#### getGeneratedReports()

- Return all generated reports

#### downloadReport()

- Return report by ID
- Throw error when report is not found

### Expected Output

- Reports are generated successfully.
- Generated reports are retrieved successfully.
- Reports are downloaded successfully.
- Invalid report IDs are handled correctly.
- Report values are dynamically generated from booking records.

---

# Week 4 Day 2 - Report Route-Controller Integration Testing

## Task

Create integration tests for the Report API endpoints to verify communication between Routes, Controllers, Services, and the Booking Model.

### Tested API Endpoints

- POST /reports/generate
- GET /reports
- GET /reports/:id

### Integration Flow

```
HTTP Request
      ↓
app.js
      ↓
Report Routes
      ↓
Report Controller
      ↓
Report Service
      ↓
Booking Model (Mock Database)
```

### Test Coverage

#### POST /reports/generate

- Generate report successfully
- Validate HTTP status code
- Validate API response
- Verify report is generated from booking records

#### GET /reports

- Retrieve all generated reports
- Validate HTTP status code
- Validate returned report collection

#### GET /reports/:id

- Retrieve report by ID
- Validate returned report
- Return 404 when report does not exist

### API Response Validation

The integration tests verify:

- HTTP status codes
- Success flag
- Response body
- Generated report data
- Error handling

### Database Verification

The integration tests use the Booking Model as the mock data source.

Booking records are first created through the Booking API, after which reports are generated dynamically from those records without using hardcoded values.

### Expected Output

- Report generation endpoint returns a successful response.
- Reports endpoint returns generated reports.
- Selected report endpoint returns the correct report.
- Invalid report IDs return the appropriate error response.
- Report data is generated dynamically from booking records.

---

# Week 5 Day 1 - Financial Analytics Service Unit Testing

## Task

Create unit tests for the Dashboard Service financial analytics functions that calculate revenue, expenses, and net profit from booking records.

The financial analytics are dynamically generated using booking data stored in the Booking Model without relying on hardcoded values.

### Implemented Functions

- calculateRevenue()
- calculateExpenses()
- calculateProfit()

### Data Source

```
Booking Model
      ↓
Dashboard Service
```

### Test Coverage

#### calculateRevenue()

- Calculate total revenue successfully
- Sum booking amounts correctly
- Throw error when no booking data exists

#### calculateExpenses()

- Calculate total expenses successfully
- Sum booking expenses correctly
- Throw error when no booking data exists

#### calculateProfit()

- Calculate net profit successfully
- Compute revenue minus expenses
- Throw error when no booking data exists

### Expected Output

- Total revenue is calculated correctly.
- Total expenses are calculated correctly.
- Net profit is calculated correctly.
- Empty booking data is handled properly.
- Financial analytics are dynamically generated from booking records.

---

# Week 5 Day 2 - Financial Analytics API Integration Testing

## Task

Create integration tests for the Dashboard Financial Analytics API endpoints to verify communication between Routes, Controllers, Services, and the Booking Model.

### Tested API Endpoints

- GET /dashboard/revenue
- GET /dashboard/expenses
- GET /dashboard/profit

### Integration Flow

```
HTTP Request
      ↓
app.js
      ↓
Dashboard Routes
      ↓
Dashboard Controller
      ↓
Dashboard Service
      ↓
Booking Model (Mock Database)
```

### Test Coverage

#### GET /dashboard/revenue

- Return total revenue successfully
- Validate HTTP status code
- Validate API response
- Return error when no booking data exists

#### GET /dashboard/expenses

- Return total expenses successfully
- Validate HTTP status code
- Validate API response
- Return error when no booking data exists

#### GET /dashboard/profit

- Return net profit successfully
- Validate HTTP status code
- Validate API response
- Return error when no booking data exists

### API Response Validation

The integration tests verify:

- HTTP status codes
- Success flag
- Response body
- Financial analytics values
- Error handling

### Database Verification

The integration tests use the Booking Model as the mock data source.

Booking records are first created through the Booking API before requesting the dashboard analytics endpoints. The financial analytics are then calculated dynamically from those booking records without using hardcoded values.

### Expected Output

- Revenue endpoint returns the correct total revenue.
- Expenses endpoint returns the correct total expenses.
- Profit endpoint returns the correct net profit.
- Empty booking records return the appropriate error response.
- Financial analytics are dynamically generated from booking records.

---

# Testing Tools

- Vitest
- Supertest
- Node.js
- JavaScript (ES Modules)

---

# Test Results

## Backend

- 13 Test Files Passed
- 84 Tests Passed
- All Tests Passed Successfully

---

# Summary

Objective 2 demonstrates backend unit testing and integration testing for booking management, dashboard analytics, financial analytics, report generation, and API integration.

## Completed Deliverables

- ✅ Week 1 - Booking Model Unit Testing
- ✅ Week 2 - Booking Service Unit Testing
- ✅ Week 3 - Dashboard Service Unit Testing
- ✅ Week 4 Day 1 - Report Service Unit Testing
- ✅ Week 4 Day 2 - Report Route-Controller Integration Testing
- ✅ Week 5 Day 1 - Financial Analytics Service Unit Testing
- ✅ Week 5 Day 2 - Financial Analytics API Integration Testing

The backend implementation has been validated through unit testing and integration testing to ensure reliable business logic, correct API behavior, proper response validation, dynamic dashboard analytics, financial analytics generation, report generation, and successful interaction between Routes, Controllers, Services, and the Booking Model.