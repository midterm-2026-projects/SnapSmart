# SnapSmart – Chatbot Functional Module

## Week 3 - Day 1

### Overview

This module implements the core functional components of the SnapSmart AI Chatbot. It provides the basic user interface elements required for chatbot interaction, including the chat header, conversation window, and quick reply options.

## Components

### ChatHeader

* Displays the chatbot title.
* Serves as the header section of the chatbot interface.

### ChatWindow

* Displays chatbot conversations.
* Renders messages passed through props.

### QuickReply

* Displays selectable quick reply options.
* Dynamically renders buttons from the provided options array.

## Project Structure

```text
src/
├── components/
│   ├── ChatHeader.jsx
│   ├── ChatWindow.jsx
│   └── QuickReply.jsx
│
├── test/
│   ├── ChatHeader.test.jsx
│   ├── ChatWindow.test.jsx
│   └── QuickReply.test.jsx
│
└── App.jsx
```

## Acceptance Criteria

* ✅ ChatHeader component renders correctly.
* ✅ ChatWindow component displays conversations correctly.
* ✅ QuickReply component displays options correctly.
* ✅ All unit tests pass successfully.

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run the test suite:

```bash
npm test
```

## Git Workflow

```bash
git switch main
git pull origin main
git switch -c feature/chatbot-functional

git add .
git commit -m "Add chatbot functional components and tests"
git push -u origin feature/chatbot-functional
```

## Author

Developed as part of the **SnapSmart** project for **Week 3 – Day 1: Chatbot Functional Components**.
