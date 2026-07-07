# SnapSmart - Booking and Gallery Management Module

## Project Overview

SnapSmart is an AI-Powered Booking and Business Analytics System for Toni Photography. This repository contains the Booking and Gallery Management Module developed using React, Vite, and Vitest following Test-Driven Development (TDD).

---

# Development Plan
# Owner - Mar Franklin I. Caraig

## Week 1 - Day 1
### Create Booking UI Components

#### Sub-Tasks
- Create BookingForm Component
- Create EventInformation Component
- Create ClientInformation Component

#### Deliverables
- BookingForm Component
- EventInformation Component
- ClientInformation Component

#### Test Suite / PR Acceptance Criteria
- BookingForm component renders correctly
- EventInformation component displays input fields correctly
- ClientInformation component displays input fields correctly

---

## Week 2 - Day 1
### Create Gallery UI Components

#### Sub-Tasks
- Create GalleryLayout Component
- Create ImageGrid Component
- Create GalleryNavigation Component

#### Deliverables
- GalleryLayout Component
- ImageGrid Component
- GalleryNavigation Component

#### Test Suite / PR Acceptance Criteria
- GalleryLayout component renders correctly
- ImageGrid component displays images correctly
- GalleryNavigation component functions correctly

---

## Week 2 - Day 2
### Create Booking Summary Components

#### Sub-Tasks
- Create PackageSelection Component
- Create BookingStatusBadge Component
- Create BookingActionButton Component

#### Deliverables
- PackageSelection Component
- BookingStatusBadge Component
- BookingActionButton Component

#### Test Suite / PR Acceptance Criteria
- PackageSelection component allows users to select a package correctly
- BookingStatusBadge component displays the correct booking status
- BookingActionButton component triggers the correct booking action

---

## Week 3 - Day 1
### Unit Testing - Booking Service

#### Sub-Tasks
- Test createBooking() validation
- Test getBookingById()
- Test updateBookingStatus()

#### Deliverables
- Booking Service Unit Tests
- Validation Test Cases
- Status Update Test Cases

#### Test Suite / PR Acceptance Criteria
- createBooking() passes validation input tests
- getBookingById() returns the expected booking information
- updateBookingStatus() updates booking status correctly

---

## Week 3 - Day 2
### Integration Testing - Booking API

#### Sub-Tasks
- Test POST /bookings
- Test GET /bookings/:id
- Test PUT /bookings/:id/status

#### Deliverables
- Booking API Integration Tests
- API Response Validation
- Database Verification

#### Test Suite / PR Acceptance Criteria
- POST request creates booking successfully
- GET request retrieves booking information correctly
- PUT request updates booking status successfully

---

## Week 4 - Day 1
### Unit Testing - Gallery Service

#### Sub-Tasks
- Test createGallery()
- Test getGalleryById()
- Test deleteGallery()

#### Deliverables
- Gallery Service Unit Tests
- Gallery Retrieval Test Cases
- Gallery Deletion Test Cases

#### Test Suite / PR Acceptance Criteria
- createGallery() validates gallery input correctly
- getGalleryById() retrieves gallery information correctly
- deleteGallery() removes gallery successfully

---

## Week 4 - Day 2
### Integration Testing - Gallery API

#### Sub-Tasks
- Test POST /gallery
- Test GET /gallery/:id
- Test DELETE /gallery/:id

#### Deliverables
- Gallery API Integration Tests
- API Response Validation
- Gallery Database Verification

#### Test Suite / PR Acceptance Criteria
- POST request uploads gallery successfully
- GET request retrieves gallery information correctly
- DELETE request removes gallery successfully

---

## Week 5 - Day 1
### Unit Testing - Photo Management Service

#### Sub-Tasks
- Test uploadPhoto()
- Test getPhotosByGallery()
- Test deletePhoto()

#### Deliverables
- Photo Management Unit Tests
- Photo Retrieval Test Cases
- Photo Deletion Test Cases

#### Test Suite / PR Acceptance Criteria
- uploadPhoto() validates photo upload correctly
- getPhotosByGallery() retrieves gallery photos correctly
- deletePhoto() removes selected photo successfully

---

## Week 5 - Day 2
### Integration Testing - Photo Management API

#### Sub-Tasks
- Test POST /gallery/:id/photos
- Test GET /gallery/:id/photos
- Test DELETE /photos/:id

#### Deliverables
- Photo Management API Integration Tests
- API Response Validation
- Photo Database Verification

#### Test Suite / PR Acceptance Criteria
- POST request uploads photo successfully
- GET request retrieves uploaded photos correctly
- DELETE request removes selected photo successfully

---

## Week 6 - Day 1
### Unit Testing - Booking & Gallery Validation

#### Sub-Tasks
- Test booking input validation
- Test gallery ownership validation
- Test duplicate booking validation

#### Deliverables
- Booking Validation Unit Tests
- Gallery Validation Test Cases
- Duplicate Booking Test Cases

#### Test Suite / PR Acceptance Criteria
- Booking validation prevents invalid booking data
- Gallery ownership validation works correctly
- Duplicate booking validation prevents duplicate booking records

---

# Technology Stack

## Frontend
- React
- Vite
- JavaScript
- CSS

## Testing
- Vitest
- React Testing Library

## Version Control
- Git
- GitHub

---

# Development Approach

This project follows the **Test-Driven Development (TDD)** methodology.

Development process:

1. Write a failing test.
2. Implement the minimum code required.
3. Make the test pass.
4. Refactor the code.
5. Repeat for every feature and component.

---

# Components Developed

## Booking Module
- BookingForm
- ClientInformation
- EventInformation
- PackageSelection
- BookingStatusBadge
- BookingActionButton

## Gallery Module
- GalleryLayout
- ImageGrid
- GalleryNavigation

---

# Running the Project

Install the project dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

---

# Running Tests

Run all unit tests.

```bash
npm test
```

or

```bash
npm run test
```

---

# Build Project

Generate the production build.

```bash
npm run build
```

---

# Repository Owner

**Mar Franklin I. Caraig**

---

# License

This project is developed for academic purposes as part of the BSIT Capstone Project of Toni Photography's **SnapSmart - AI-Powered Booking and Business Analytics System**.