# Chatbot and Notification System Testing Documentation

## Project Overview

This project focuses on the development and testing of a chatbot and notification system. The implementation includes reusable frontend components, chatbot message handling, notification interfaces, backend services, API testing, and database validation.

The project follows a structured development and testing approach where components and services are developed first, followed by unit testing, integration testing, and validation of system functionality.

The main objectives of this project are:

* Develop chatbot user interface components.
* Implement chatbot message display and interaction features.
* Create notification management components.
* Perform unit testing on individual services and functions.
* Perform integration testing to verify API communication.
* Validate database operations and error handling.
* Ensure system reliability through different testing levels.

---

# Development and Testing Schedule

## Week 1 - Day 1: Create Chatbot UI Components

### Components Developed

* ChatbotInterface Component
* MessageDisplay Component
* UserInput Component

### Description

The first stage focuses on creating the main chatbot interface and its supporting components. These components handle the chatbot layout, message presentation, and user input functionality.

### Testing Criteria

* ChatbotInterface component renders correctly.
* MessageDisplay component displays messages correctly.
* UserInput component accepts valid input correctly.

---

# Week 2 - Day 1: Create Chatbot Message Components

### Components Developed

* BotMessage Component
* UserMessage Component
* TypingIndicator Component

### Description

This stage improves chatbot interaction by separating bot and user messages into individual components. A typing indicator is also added to provide feedback while waiting for chatbot responses.

### Testing Criteria

* BotMessage displays bot responses correctly.
* UserMessage displays user messages correctly.
* TypingIndicator appears while waiting for responses.

---

# Week 2 - Day 2: Create Notification UI Components

### Components Developed

* NotificationList Component
* NotificationCard Component
* SendNotificationModal Component

### Description

This stage focuses on creating the notification interface. Users can view notifications, see notification details, and open a modal for sending notifications.

### Testing Criteria

* NotificationList displays notifications correctly.
* NotificationCard displays notification details correctly.
* SendNotificationModal displays required form fields correctly.

---

# Week 3 - Day 1: Unit Testing - Chatbot Service

## Tests Implemented

* Test `getChatbotResponse()`
* Test `searchResponseByKeyword()`
* Test `validateUserMessage()`

## Test Categories

* Chatbot Response Unit Tests
* Keyword Search Unit Tests
* Message Validation Unit Tests

## Testing Results Expected

* `getChatbotResponse()` returns the correct chatbot response.
* `searchResponseByKeyword()` finds matching responses.
* `validateUserMessage()` rejects invalid user input.

---

## Why Week 3 Day 1 is Unit Testing and NOT API Integration Testing

Week 3 Day 1 focuses on testing individual chatbot service functions rather than testing API communication.

Unit testing is performed before integration testing because it verifies whether each function works correctly in isolation. At this stage, the goal is to confirm that the internal logic of the chatbot service is working properly before connecting it to external components such as API routes, databases, or frontend applications.

Examples of functions tested:

* `getChatbotResponse()` checks if the chatbot can return the correct response.
* `searchResponseByKeyword()` checks if keyword matching works properly.
* `validateUserMessage()` checks if invalid inputs are detected.

API integration testing is performed later because it requires multiple system components working together, such as:

* Frontend request handling.
* Backend API routes.
* Service functions.
* Database communication.

Therefore, Week 3 Day 1 is classified as **Unit Testing** because it validates individual functions independently before testing the complete API workflow.

---

# Week 3 - Day 2: Integration Testing - Chatbot API

## Tests Implemented

* Test `POST /chatbot/message`
* Test `GET /chatbot/responses`
* Test invalid chatbot request

## Test Categories

* Chatbot API Integration Tests
* API Response Validation
* Error Handling Tests

## Testing Results Expected

* Chatbot message endpoint returns a valid response.
* Response list endpoint returns available chatbot responses.
* Invalid requests return proper error responses.

---

# Week 4 - Day 1: Unit Testing - Notification Service

## Tests Implemented

* Test `createNotification()`
* Test `getNotifications()`
* Test `markAsRead()`

## Test Categories

* Notification Creation Unit Tests
* Notification Retrieval Unit Tests
* Read Status Unit Tests

## Testing Results Expected

* `createNotification()` saves notifications correctly.
* `getNotifications()` returns notification records.
* `markAsRead()` updates notification status correctly.

---

# Week 4 - Day 2: Integration Testing - Notification API

## Tests Implemented

* Test `POST /notifications`
* Test `GET /notifications`
* Test `PATCH /notifications/:id/read`

## Test Categories

* Notification API Integration Tests
* API Response Validation
* Database Verification

## Testing Results Expected

* Notification creation endpoint returns success.
* Notification list endpoint returns stored notifications.
* Read status endpoint updates notification successfully.

---

# Week 5 - Day 1: Unit Testing - Chatbot Knowledge Base

## Tests Implemented

* Test `createResponse()`
* Test `updateResponse()`
* Test `deleteResponse()`

## Test Categories

* Response Creation Unit Tests
* Response Update Unit Tests
* Response Deletion Unit Tests

## Testing Results Expected

* `createResponse()` saves chatbot responses correctly.
* `updateResponse()` updates existing responses.
* `deleteResponse()` removes chatbot responses successfully.

---

# Week 5 - Day 2: Integration Testing - Chatbot Management API

## Tests Implemented

* Test `POST /chatbot/responses`
* Test `PUT /chatbot/responses/:id`
* Test `DELETE /chatbot/responses/:id`

## Test Categories

* Chatbot Management API Tests
* API Response Validation
* Database Verification

## Testing Results Expected

* Response creation endpoint returns success.
* Response update endpoint updates correctly.
* Response deletion endpoint removes data successfully.

---

# Week 6 - Day 1: Unit Testing - Notification Validation

## Tests Implemented

* Test notification input validation.
* Test recipient validation.
* Test empty notification message handling.

## Test Categories

* Notification Validation Unit Tests
* Recipient Validation Test Cases
* Empty Message Test Cases

## Testing Results Expected

* Invalid notification input is rejected.
* Invalid recipient information is rejected.
* Empty notification messages are handled correctly.

---

# Testing Approach

The project follows a layered testing approach:

## 1. Unit Testing

Unit testing focuses on individual functions and services. It ensures that each part of the system works correctly before being connected with other modules.

Examples:

* Chatbot response generation.
* Message validation.
* Notification creation.
* Knowledge base management.

---

## 2. Integration Testing

Integration testing verifies that different parts of the system communicate properly.

Examples:

* Frontend requests reaching backend APIs.
* API routes communicating with services.
* Services interacting with the database.

---

# Technologies Used

## Frontend

* React.js
* Component-based UI architecture

## Backend

* Node.js
* Express.js

## Database

* MySQL

## Testing

* Unit Testing Framework
* API Integration Testing Tools

---

# Project Structure

```
project-root
│
├── frontend
│   ├── components
│   │   ├── ChatbotInterface
│   │   ├── MessageDisplay
│   │   ├── UserInput
│   │   ├── NotificationList
│   │   └── NotificationCard
│
├── backend
│   ├── services
│   │   ├── chatbotService
│   │   └── notificationService
│   │
│   ├── routes
│   │   ├── chatbotRoutes
│   │   └── notificationRoutes
│
└── tests
    ├── unit-tests
    └── integration-tests
```

---

# Conclusion

This project demonstrates the development and testing process of a chatbot and notification system using component-based development, service-level validation, and API integration testing.

By following the sequence of:

1. Component Development
2. Unit Testing
3. API Integration Testing
4. Database Validation

the system can ensure better reliability, maintainability, and correctness before deployment.
