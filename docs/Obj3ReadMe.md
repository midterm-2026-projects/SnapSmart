# SnapSmart - Chatbot Message Components

## Project Overview

This repository contains the Chatbot Message Components for the SnapSmart application. The components are built using React and tested with Vitest and React Testing Library following the Test-Driven Development (TDD) approach.

---

# Development Plan

# Owner - Jhon Charlie R. Villacoba

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

# Components

## BotMessage Component

Displays chatbot responses inside the conversation.

### Features
- Displays bot messages correctly
- Accepts message as a prop
- Styled using the `bot-message` class

---

## UserMessage Component

Displays messages sent by the user.

### Features
- Displays user messages correctly
- Accepts message as a prop
- Styled using the `user-message` class

---

## TypingIndicator Component

Displays a typing indicator while the chatbot is generating a response.

### Features
- Appears only when `isTyping` is `true`
- Hidden when `isTyping` is `false`
- Uses the `typing-indicator` class

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
5. Repeat for every component.

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

or

```bash
npm run test
```

# Build Project

```bash
npm run build
```