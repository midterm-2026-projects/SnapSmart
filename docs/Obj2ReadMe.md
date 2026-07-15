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

The dashboard service does not use fixed or hardcoded values. All analytics are generated from the booking data stored in the Booking Model.

### Implemented Functions

- getDashboardSummary()
- getBookingTrends()
- getPerformanceMetrics()

### Data Source

Dashboard analytics are generated from:

```
Booking Model
      ↓
Booking Service
      ↓
Dashboard Service
```

No hardcoded dashboard values are used.

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

- Calculates total revenue
- Calculates average customer rating
- Calculates completed booking percentage
- Throws error when no booking data exists

### Expected Output

- Dashboard summary is generated correctly.
- Booking trends are calculated correctly.
- Performance metrics are calculated correctly.
- Empty booking data is handled properly.
- All dashboard values are dynamically generated from booking records.

---

# Testing Tools

- Vitest
- Node.js
- JavaScript (ES Modules)

---

# Summary

Objective 2 demonstrates backend unit testing for both booking management and dashboard analytics.

Completed Deliverables:

- Week 1 - Booking Model Unit Testing
- Week 2 - Booking Service Unit Testing
- Week 3 - Dashboard Service Unit Testing

All implemented functions are verified through unit tests to ensure correctness, validation, and reliable backend business logic.