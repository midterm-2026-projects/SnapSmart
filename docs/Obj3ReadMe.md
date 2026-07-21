# SnapSmart - Booking and Gallery Management System

## Project Overview

SnapSmart is a photography booking and gallery management system designed to assist customers in managing photography services, bookings, galleries, and notifications.

This project focuses on implementing backend services and applying different testing approaches to ensure system reliability, correct business logic, API communication, and database operations.

The system includes:

* Booking Management
* Gallery Management
* Notification System
* AI Chatbot Assistance

---

# Technology Stack

## Frontend

* React
* Vite

## Backend

* Node.js
* Express.js

## Database

* Supabase PostgreSQL

## Testing Tools

* Vitest
* Supertest

---

# System Modules

## Booking Management

Handles customer booking transactions and booking status management.

Features:

* Create bookings
* Manage booking status
* Associate bookings with photography packages

---

## Gallery Management

Handles photography gallery information.

Features:

* Manage gallery records
* Manage uploaded photo information

---

## Notification System

Handles system-generated notifications for users.

Features:

* Create notifications
* Retrieve user notifications
* Update notification status

The notification module uses Supabase PostgreSQL for data persistence.

---

## AI Chatbot System

The chatbot provides automated responses based on user messages.

Features:

* Receive user messages
* Validate user input
* Generate AI mock responses

Note:

The chatbot does not use a database. Conversation storage and chat history are not part of the current implementation.

---

# Backend Structure

```
backend
│
├── config
│   └── supabaseClient.js
│
├── controllers
│   ├── chatbotController.js
│   └── notificationController.js
│
├── models
│   ├── notificationModel.js
│   └── notificationDatabaseModel.js
│
├── routes
│   ├── chatbotRoutes.js
│   └── notificationRoutes.js
│
├── services
│   ├── chatbotService.js
│   └── notificationService.js
│
└── tests
    ├── chatbotAPI.test.js
    ├── notificationService.test.js
    ├── notificationRouteController.integration.test.js
    └── NotificationDatabase.test.js
```

---

# Testing Approach

The project applies multiple testing layers:

```
Component Testing
        |
        ↓
API Integration Testing
        |
        ↓
Service Unit Testing
        |
        ↓
Database Integration Testing
        |
        ↓
Validation Testing
        |
        ↓
End-to-End Testing
```

Each testing layer focuses on a different part of the system.

---

# Week 3 Day 1

# Chatbot API Integration Testing

## Testing Layer

```
Route
 ↓
Controller
 ↓
AI Chatbot Service
```

## Objective

Verify that the chatbot API correctly receives user messages and returns appropriate responses.

## Tests Implemented

* Test chatbot POST endpoint
* Test controller response handling
* Test chatbot service execution

## Expected Results

* Valid messages are accepted
* Chatbot returns a response
* Invalid requests return proper errors

---

# Week 3 Day 2

# Notification Service Unit Testing

## Testing Layer

```
Notification Service
        |
        ↓
Mock Notification Model
```

## Objective

Verify notification business logic without depending on an actual database.

## Tests Implemented

* Create notification logic
* Retrieve notifications logic
* Update notification status logic
* Required field validation

## Expected Results

* Service functions return correct results
* Invalid data is rejected
* Service errors are handled correctly

---

# Week 4 Day 1

# Notification API Integration Testing

## Testing Layer

```
Route
 ↓
Controller
 ↓
Service
 ↓
Mock Model
```

## Objective

Verify that notification API endpoints correctly communicate with controllers and services.

## Tests Implemented

* Create notification API request
* Retrieve notification API request
* Update notification API request

## Expected Results

* API endpoints return correct responses
* Controller-service communication works properly

---

# Week 4 Day 2

# Notification Database Integration Testing

## Testing Layer

```
Notification Service
        |
        ↓
Database Model
        |
        ↓
Supabase PostgreSQL
        |
        ↓
Verify Data Persistence
```

## Objective

Verify that the notification service can communicate with the actual database and perform database operations successfully.

Unlike API Integration Testing, this testing focuses on service-to-database communication.

---

# Database Integration Tests Implemented

## 1. Notification Insertion Testing

Purpose:

Verify that notification records can be successfully inserted into the database.

Flow:

```
Notification Data
        ↓
Insert Operation
        ↓
Supabase Database
        ↓
Return Created Record
```

Expected Result:

* Notification record is saved
* Database generates record ID
* Inserted data is returned

---

## 2. Notification Retrieval Testing

Purpose:

Verify that stored notifications can be retrieved from the database.

Flow:

```
User ID
   ↓
Query Notifications Table
   ↓
Return Notifications
```

Expected Result:

* Correct notification records are retrieved
* Data belongs to the specified user

---

## 3. Notification Update Testing

Purpose:

Verify that existing notification records can be updated.

Flow:

```
Notification ID
        ↓
Update is_read Status
        ↓
Return Updated Record
```

Expected Result:

* Notification status is updated successfully
* Updated record is returned

---

## Database Relationship Testing

The notification database integration also verifies relational constraints.

Database relationship:

```
auth.users
    |
    ↓
profiles
    |
    ↓
notifications
```

Invalid user references are rejected to maintain database integrity.

---

# Week 5 Day 1

# Chatbot Validation Testing

## Testing Layer

```
User Input
     ↓
Validation Logic
     ↓
AI Chatbot Service
```

## Objective

Verify that the chatbot only processes valid user messages before generating responses.

Since the chatbot does not store data in a database, validation focuses only on input handling.

## Tests Implemented

* Empty message validation
* Blank message validation
* Invalid data type validation
* Valid message acceptance

## Expected Results

* Invalid messages are rejected
* Valid messages are processed
* AI mock response is generated correctly

---

# Week 5 Day 2

# Notification Validation Testing

## Testing Layer

```
Notification Data
        ↓
Validation Logic
        ↓
Notification Service
        ↓
Database
```

## Objective

Verify that notification data is valid before performing database operations.

## Tests Implemented

* Validate user ID
* Validate notification title
* Validate notification message
* Reject incomplete notification data

## Expected Results

* Invalid notification data is rejected
* Required fields are enforced
* Only valid notifications are processed

---

# Week 6 Day 1

# End-to-End Testing

## Objective

Verify the complete workflow of the system.

System Flow:

```
User
 ↓
Frontend
 ↓
API Request
 ↓
Controller
 ↓
Service
 ↓
Database / AI Response
 ↓
System Response
```

## Expected Results

* Complete user workflow functions correctly
* System components communicate properly
* Expected outputs are produced

---

# Environment Setup

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
SUPABASE_URL=your_supabase_url
SUPABASE_SECRET_KEY=your_supabase_secret_key
```

Run tests:

```bash
npm test
```

---

# Testing Summary

| Testing Layer                             | Status    |
| ----------------------------------------- | --------- |
| Chatbot API Integration Testing           | Completed |
| Notification Service Unit Testing         | Completed |
| Notification API Integration Testing      | Completed |
| Notification Database Integration Testing | Completed |
| Chatbot Validation Testing                | Pending   |
| Notification Validation Testing           | Pending   |
| End-to-End Testing                        | Pending   |

---

# Conclusion

The testing implementation ensures that SnapSmart modules work correctly across different system layers.

Unit testing verifies individual service logic, API integration testing verifies backend communication, database integration testing verifies real data persistence using Supabase, and validation testing ensures that invalid inputs are properly handled before processing.
