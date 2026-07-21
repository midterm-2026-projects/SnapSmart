# SnapSmart - Booking and Gallery Management System

## Project Overview

SnapSmart is a photography booking and gallery management system designed to help customers manage photography services, bookings, galleries, notifications, and chatbot assistance.

This project focuses on developing backend services and applying different testing approaches to ensure system reliability, correct business logic implementation, API communication, and database operations.

The system includes the following modules:

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

## AI Integration

* Groq API

## Testing Tools

* Vitest
* Supertest

---

# System Modules

## Booking Management

Handles customer photography booking transactions and booking status management.

### Features:

* Create bookings
* Manage booking status
* Associate bookings with photography packages
* Store booking information in the database

---

# Gallery Management

Handles photography gallery information and uploaded photo records.

### Features:

* Manage gallery records
* Manage photo information
* Retrieve gallery data

---

# Notification System

Handles system-generated notifications for customers.

The notification module uses Supabase PostgreSQL for data persistence.

### Features:

* Create notifications
* Retrieve customer notifications
* Mark notifications as read
* Store notification records permanently

---

# Notification Database Structure

Notifications are stored in the `notifications` table.

Example structure:

```
notifications

├── id
├── user_id
├── title
├── message
├── is_read
└── created_at
```

Database relationship:

```
profiles
    |
    |
    ↓
notifications.user_id
```

Each notification is associated with a specific customer profile.

---

# AI Chatbot System

The chatbot provides automated assistance for customers using AI-generated responses.

### Features:

* Receive user messages
* Validate user input
* Generate AI responses using Groq API
* Return chatbot responses through API endpoints

The chatbot currently does not store conversations or chat history in the database.

---

# Backend Structure

```
backend
│
├── config
│   ├── supabaseClient.js
│   └── groqClient.js
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
    ├── chatbotE2E.test.js
    ├── chatbotValidation.test.js
    ├── notificationService.test.js
    ├── notificationValidation.test.js
    ├── notificationRouteController.integration.test.js
    └── NotificationDatabase.test.js
```

---

# Testing Approach

The project applies multiple testing layers to verify different parts of the system.

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

Each testing layer focuses on a specific system responsibility.

---

# Week 3 Day 1

# Chatbot API Integration Testing

## Testing Layer

```
Route
 ↓
Controller
 ↓
Chatbot Service
 ↓
Groq API
```

## Objective

Verify that the chatbot API correctly receives user messages and returns valid AI-generated responses.

## Tests Implemented

* Test chatbot POST endpoint
* Test controller response handling
* Test chatbot service execution
* Verify chatbot response generation

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
* Retrieve notification logic
* Update notification status logic
* Required field validation

## Expected Results

* Service functions return correct results
* Invalid data is rejected
* Service errors are properly handled

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

Verify that notification API endpoints correctly communicate between routes, controllers, and services.

## Tests Implemented

* Create notification API request
* Retrieve customer notifications
* Mark notification as read

## Expected Results

* API endpoints return correct responses
* Controller and service communication works properly

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

Verify that notification services can communicate with the actual database and perform database operations successfully.

Unlike API Integration Testing, this focuses on service-to-database communication.

---

# Database Integration Tests Implemented

## 1. Notification Insertion Testing

Purpose:

Verify that notification records can be inserted successfully.

Flow:

```
Notification Data
        ↓
Database Insert Operation
        ↓
Supabase Notifications Table
        ↓
Created Notification Record
```

Expected Results:

* Notification record is saved
* Database generates record ID
* Inserted data is returned

---

## 2. Notification Retrieval Testing

Purpose:

Verify that stored notifications can be retrieved based on user ID.

Flow:

```
User ID
   ↓
Query Notifications Table
   ↓
Return Customer Notifications
```

Expected Results:

* Correct notification records are retrieved
* Returned notifications belong to the requested user

---

## 3. Notification Update Testing

Purpose:

Verify that notification read status can be updated.

Flow:

```
Notification ID
        ↓
Update is_read Status
        ↓
Return Updated Record
```

Expected Results:

* Notification status changes successfully
* Updated notification record is returned

Example:

Before:

```json
{
  "is_read": false
}
```

After:

```json
{
  "is_read": true
}
```

---

# Week 5 Day 1

# Chatbot Validation Testing

## Testing Layer

```
User Input
     ↓
Validation Logic
     ↓
Chatbot Service
```

## Objective

Verify that the chatbot only processes valid user messages.

## Tests Implemented

* Empty message validation
* Blank message validation
* Invalid data type validation
* Valid message acceptance

## Expected Results

* Invalid messages are rejected
* Valid messages are processed
* AI responses are generated correctly

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
Database Operation
```

## Objective

Verify that notification data is validated before database operations.

## Tests Implemented

* Validate user ID
* Validate notification title
* Validate notification message
* Reject incomplete notification data

## Expected Results

* Invalid notification data is rejected
* Required fields are enforced
* Only valid notifications are stored

---

# Week 6 Day 1

# End-to-End Testing

## Objective

Verify the complete workflow of the system from user interaction to backend processing.

System Flow:

```
User
 ↓
Frontend Interface
 ↓
API Request
 ↓
Controller
 ↓
Service
 ↓
Database / AI Service
 ↓
System Response
```

## Tested Features

### Chatbot Flow

```
User Message
      ↓
Chatbot UI
      ↓
Chatbot API
      ↓
Groq AI Response
      ↓
Display Response
```

### Notification Flow

```
Notification Data
        ↓
Frontend Request
        ↓
Notification API
        ↓
Supabase Database
        ↓
Display Notification
```

## Expected Results

* Complete user workflow functions correctly
* System components communicate properly
* Expected outputs are displayed

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
GROQ_API_KEY=your_groq_api_key
```

---

# Running Tests

Run backend tests:

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
| Chatbot Validation Testing                | Completed |
| Notification Validation Testing           | Completed |
| End-to-End Testing                        | Completed |

---

# Conclusion

The testing implementation ensures that SnapSmart modules work correctly across different system layers.

Unit testing verifies individual service logic, API integration testing verifies backend communication, database integration testing verifies real data persistence using Supabase PostgreSQL, validation testing ensures invalid inputs are properly handled, and end-to-end testing confirms that complete user workflows function correctly.

Through these testing approaches, the reliability and maintainability of the SnapSmart system are improved.
