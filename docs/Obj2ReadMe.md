# Objective 3 - Chatbot and Notification System Testing

## Overview

Objective 3 focuses on validating the chatbot and notification system through unit testing, API integration testing, database integration testing, validation testing, and end-to-end testing.

The objective ensures that chatbot responses, notification processing, API communication, business logic, and database operations work correctly before complete system deployment.

---

# Week 1 - Chatbot UI Component Testing

## Task

Create frontend components for the chatbot interface.

### Implemented Components

* ChatbotInterface.jsx
* MessageDisplay.jsx
* UserInput.jsx

### Test Coverage

* Display chatbot interface
* Display user messages
* Display chatbot responses
* Accept user input
* Send messages through the interface
* Prevent empty message submission

### Expected Output

* Chatbot interface renders correctly.
* User messages are displayed properly.
* Chatbot responses appear correctly.
* Invalid empty inputs are handled.

---

# Week 2 - Notification UI Component Testing

## Task

Create frontend components for displaying system notifications.

### Implemented Components

* NotificationCard.jsx
* NotificationList.jsx
* NotificationContainer.jsx

### Test Coverage

* Display notification card
* Display notification title
* Display notification message
* Display notification date
* Render multiple notifications
* Retrieve notifications from API

### Expected Output

* Notification components render correctly.
* Notification information is displayed properly.
* Multiple notifications are displayed successfully.
* Frontend communicates with notification API.

---

# Week 3 Day 1 - Chatbot API Integration Testing

## Task

Create integration tests for the chatbot API endpoints to verify communication between Routes, Controllers, Services, and AI integration.

### Tested API Endpoint

```
POST /api/chatbot
```

### Integration Flow

```
HTTP Request
      ↓
app.js
      ↓
Chatbot Routes
      ↓
Chatbot Controller
      ↓
Chatbot Service
      ↓
Groq API
      ↓
AI Response
```

### Test Coverage

#### POST /api/chatbot

* Send valid chatbot message
* Validate HTTP status code
* Validate chatbot response
* Handle invalid message requests
* Verify AI response generation

### API Response Validation

The integration tests verify:

* HTTP status codes
* Response success status
* Response message
* Error handling

### Expected Output

* Chatbot endpoint accepts valid messages.
* AI-generated responses are returned successfully.
* Invalid requests return proper error responses.

---

# Week 3 Day 2 - Notification Service Unit Testing

## Task

Create unit tests for the Notification Service business logic.

The Notification Service handles notification creation, retrieval, and status updates using a mock notification model.

### Implemented Functions

* createNotification()
* getNotificationsByCustomer()
* markAsRead()

### Data Source

```
Notification Service
        ↓
Mock Notification Model
```

### Test Coverage

#### createNotification()

* Create notification successfully
* Validate required notification fields
* Handle missing notification data

#### getNotificationsByCustomer()

* Retrieve customer notifications
* Return empty result when no notifications exist

#### markAsRead()

* Update notification read status
* Throw error when notification does not exist

### Expected Output

* Notification business logic works correctly.
* Invalid notification data is rejected.
* Notification status updates successfully.

---

# Week 4 Day 1 - Notification Route-Controller Integration Testing

## Task

Create integration tests for Notification API endpoints to verify communication between Routes, Controllers, Services, and the Notification Model.

### Tested API Endpoints

* POST /api/notifications
* GET /api/notifications/customer/:customerId
* PATCH /api/notifications/:id/read

### Integration Flow

```
HTTP Request
      ↓
app.js
      ↓
Notification Routes
      ↓
Notification Controller
      ↓
Notification Service
      ↓
Notification Model
```

### Test Coverage

#### POST /api/notifications

* Create notification successfully
* Validate HTTP status code
* Validate API response
* Verify notification data

#### GET /api/notifications/customer/:customerId

* Retrieve customer notifications
* Validate returned notification list
* Handle unavailable notifications

#### PATCH /api/notifications/:id/read

* Update notification status
* Validate updated notification response
* Handle invalid notification IDs

### API Response Validation

The integration tests verify:

* HTTP status codes
* Success flag
* Response body
* Notification data
* Error handling

### Expected Output

* Notification API endpoints communicate correctly.
* Notification creation works successfully.
* Customer notifications are retrieved properly.
* Notification status updates correctly.

---

# Week 4 Day 2 - Notification Database Integration Testing

## Task

Create database integration tests to verify communication between the Notification Service, Database Model, and Supabase PostgreSQL database.

Unlike API Integration Testing, this testing focuses on service-to-database communication.

### Integration Flow

```
Notification Service
        ↓
Notification Database Model
        ↓
Supabase PostgreSQL
        ↓
Database Response
```

### Test Coverage

## Notification Insertion Testing

Purpose:

Verify that notification records can be inserted into the database.

Flow:

```
Notification Data
        ↓
Insert Operation
        ↓
Notifications Table
        ↓
Created Record
```

Expected Results:

* Notification record is saved successfully.
* Generated notification ID is returned.
* Inserted data matches stored data.

---

## Notification Retrieval Testing

Purpose:

Verify that stored notifications can be retrieved using user ID.

Flow:

```
User ID
   ↓
Query Notifications Table
   ↓
Return User Notifications
```

Expected Results:

* Correct notifications are retrieved.
* Notifications belong to the specified user.

---

## Notification Update Testing

Purpose:

Verify that notification read status can be updated.

Flow:

```
Notification ID
        ↓
Update is_read field
        ↓
Return Updated Record
```

Expected Results:

* Notification changes from unread to read.
* Updated database record is returned.

---

# Week 5 Day 1 - Chatbot Validation Testing

## Task

Create validation tests for chatbot user input handling.

### Testing Flow

```
User Input
     ↓
Validation Logic
     ↓
Chatbot Service
     ↓
AI Response
```

### Test Coverage

* Validate empty message
* Validate blank message
* Validate invalid data type
* Accept valid messages

### Expected Output

* Invalid inputs are rejected.
* Valid inputs are processed.
* Chatbot service only receives valid messages.

---

# Week 5 Day 2 - Notification Validation Testing

## Task

Create validation tests for notification data before processing.

### Testing Flow

```
Notification Data
        ↓
Validation Logic
        ↓
Notification Service
        ↓
Database Operation
```

### Test Coverage

* Validate user ID
* Validate notification title
* Validate notification message
* Reject incomplete notification data

### Expected Output

* Invalid notification data is rejected.
* Required fields are enforced.
* Only valid notifications are stored.

---

# Week 6 Day 1 - End-to-End Testing

## Task

Verify the complete chatbot and notification workflow from frontend interaction to backend processing.

### System Flow

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

### Test Coverage

## Chatbot Workflow

* Send message through chatbot UI
* Send request to chatbot API
* Generate AI response
* Display response on frontend

## Notification Workflow

* Retrieve notifications
* Display notification list
* Update notification read status
* Verify database changes

### Expected Output

* Complete workflow functions correctly.
* Frontend and backend communicate successfully.
* AI responses are displayed properly.
* Notifications are retrieved and updated successfully.

---

# Testing Tools

* Vitest
* Supertest
* React Testing Library
* Node.js
* JavaScript (ES Modules)
* Supabase PostgreSQL
* Groq API

---

# Test Results

## Backend

* All Backend Test Suites Passed
* API Integration Tests Passed
* Database Integration Tests Passed

## Frontend

* Chatbot Components Passed
* Notification Components Passed

---

# Summary

Objective 3 demonstrates the implementation and testing of the Chatbot and Notification System through multiple testing layers.

## Completed Deliverables

* ✅ Week 1 - Chatbot UI Component Testing
* ✅ Week 2 - Notification UI Component Testing
* ✅ Week 3 Day 1 - Chatbot API Integration Testing
* ✅ Week 3 Day 2 - Notification Service Unit Testing
* ✅ Week 4 Day 1 - Notification API Integration Testing
* ✅ Week 4 Day 2 - Notification Database Integration Testing
* ✅ Week 5 Day 1 - Chatbot Validation Testing
* ✅ Week 5 Day 2 - Notification Validation Testing
* ✅ Week 6 Day 1 - End-to-End Testing

The chatbot and notification system has been validated through frontend testing, backend testing, API integration testing, database integration testing, and end-to-end testing to ensure reliable functionality, correct business logic, proper API communication, and successful system integration.
