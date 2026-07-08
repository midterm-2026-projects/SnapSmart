# SnapSmart - AI Chatbot Module

## Project Overview

SnapSmart is an AI-Powered Booking and Business Analytics System for Toni Photography. This repository contains the AI Chatbot Module developed using React, Vite, and Vitest following Test-Driven Development (TDD).

---

# Development Plan
# Owner - Jhon Charlie Villacoba

## Week 1 - Day 1
### Create Chatbot UI Components

#### Sub-Tasks
- Create ChatbotInterface Component
- Create MessageDisplay Component
- Create UserInput Component

#### Deliverables
- ChatbotInterface Component
- MessageDisplay Component
- UserInput Component

#### Test Suite / PR Acceptance Criteria
- ChatbotInterface component renders correctly
- MessageDisplay component displays messages correctly
- UserInput component accepts valid input correctly

---

## Week 2 - Day 1
### Create Chatbot Message Components

#### Sub-Tasks
- Create BotMessage Component
- Create UserMessage Component
- Create TypingIndicator Component

#### Deliverables
- BotMessage Component
- UserMessage Component
- TypingIndicator Component

#### Test Suite / PR Acceptance Criteria
- BotMessage displays bot responses correctly
- UserMessage displays user messages correctly
- TypingIndicator appears while waiting for responses

---

## Week 3 - Day 1
### Create Chatbot Response Components

#### Sub-Tasks
- Create SuggestedReplies Component
- Create QuickActions Component
- Create ChatHistory Component

#### Deliverables
- SuggestedReplies Component
- QuickActions Component
- ChatHistory Component

#### Test Suite / PR Acceptance Criteria
- SuggestedReplies displays response options correctly
- QuickActions execute predefined actions correctly
- ChatHistory stores and displays previous conversations

---

## Week 3 - Day 2
### Integrate Chatbot Components

#### Sub-Tasks
- Integrate ChatbotInterface
- Integrate MessageDisplay
- Integrate UserInput

#### Deliverables
- Chatbot Interface Integration
- Message Flow Integration
- Input Handling Integration

#### Test Suite / PR Acceptance Criteria
- Chatbot interface works correctly
- Messages are displayed correctly
- User input is processed correctly

---

## Week 4 - Day 1
### Create Chatbot Validation Features

#### Sub-Tasks
- Create InputValidation Module
- Create EmptyMessage Validation
- Create ErrorMessage Component

#### Deliverables
- InputValidation Module
- EmptyMessage Validation
- ErrorMessage Component

#### Test Suite / PR Acceptance Criteria
- InputValidation validates messages correctly
- EmptyMessage validation prevents blank submissions
- ErrorMessage component displays validation errors correctly

---

## Week 4 - Day 2
### Create Chatbot Routes and Services

#### Sub-Tasks
- Create Chatbot Routes
- Create Chatbot Services
- Connect Routes and Services

#### Deliverables
- ChatbotRoutes Module
- ChatbotServices Module
- RouteServiceIntegration Module

#### Test Suite / PR Acceptance Criteria
- Chatbot routes function correctly
- Chatbot services process requests correctly
- Route-service integration works correctly

---

## Week 5 - Day 1
### Connect Chatbot Module to Backend

#### Sub-Tasks
- Connect Chat API
- Handle Chat Responses
- Handle API Errors

#### Deliverables
- ChatAPI Integration
- ResponseHandler Module
- ErrorHandler Module

#### Test Suite / PR Acceptance Criteria
- Chat requests are sent successfully
- Responses are received and displayed correctly
- API errors are handled gracefully

---

## Week 6 - Day 1
### Perform End-to-End Testing

#### Sub-Tasks
- Test Chatbot Workflow
- Test User Interaction
- Fix Identified Issues

#### Deliverables
- Chatbot E2E Test Report
- User Interaction Test Report
- Issue Resolution Log

#### Test Suite / PR Acceptance Criteria
- Chatbot workflow passes end-to-end testing
- User interactions function correctly
- Identified issues are resolved successfully

---

# Technology Stack

## Frontend
- React
- Vite
- CSS

## Testing
- Vitest
- React Testing Library

## Version Control
- Git
- GitHub

---

# Development Approach

This project follows the Test-Driven Development (TDD) process:

1. Write a failing test.
2. Implement the minimum code required.
3. Make the test pass.
4. Refactor the code.
5. Repeat for every feature and component.

---

# Running the Project

```bash
npm install
npm run dev
```

# Running Tests

```bash
npm test
```

# Build Project

```bash
npm run build
```
