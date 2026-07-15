# Objective 2 - Backend Unit Testing

## Overview

Objective 2 focuses on implementing and testing backend business logic using unit testing. The goal is to verify that backend services and models behave correctly under different scenarios before integrating them into the complete system.

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

The Dashboard Service does not use fixed or hardcoded values. All analytics are generated dynamically from booking data stored in the Booking Model.

### Implemented Functions

- getDashboardSummary()
- getBookingTrends()
- getPerformanceMetrics()

### Data Source

Dashboard analytics are generated from:

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
- All dashboard values are dynamically generated from booking records.

---

# Week 4 - Report Service Unit Testing

## Task

Create unit tests for the Report Service that generates booking reports using booking records.

The Report Service retrieves booking data from the Booking Model and dynamically generates reports without using fixed or hardcoded values.

### Implemented Functions

- generateReport()
- getGeneratedReports()
- downloadReport()

### Data Source

Report data is generated from:

```
Booking Model
      ↓
Report Service
```

### Test Coverage

#### generateReport()

- Generate report successfully using booking data
- Calculate total bookings
- Calculate completed bookings
- Calculate pending bookings
- Calculate cancelled bookings
- Calculate total revenue
- Generate report when no booking data exists

#### getGeneratedReports()

- Return generated reports successfully

#### downloadReport()

- Download report successfully using report ID
- Throw error when report is not found

### Expected Output

- Reports are generated successfully from booking records.
- Generated reports are retrieved successfully.
- Reports can be retrieved using their ID.
- Invalid report IDs are handled properly.
- Empty booking data is handled correctly.
- All report values are dynamically generated from booking records.

---

# Testing Tools

- Vitest
- Node.js
- JavaScript (ES Modules)

---

# Test Results

## Week 4 Report Service

- 5 Unit Tests Passed

## Backend

- 9 Test Files Passed
- 52 Tests Passed

---

# Summary

Objective 2 demonstrates backend unit testing for booking management, dashboard analytics, and report generation.

## Completed Deliverables

- ✅ Week 1 - Booking Model Unit Testing
- ✅ Week 2 - Booking Service Unit Testing
- ✅ Week 3 - Dashboard Service Unit Testing
- ✅ Week 4 - Report Service Unit Testing

All implemented backend functions have been verified through unit testing to ensure correct business logic, proper validation, dynamic report generation, and reliable handling of both valid and invalid scenarios.