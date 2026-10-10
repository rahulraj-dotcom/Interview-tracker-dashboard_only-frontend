# Interview Practice Tracker

A responsive React-based Interview Practice Tracker designed to help developers organize and track their weekly interview preparation.

# Features

    1. Dashboard with overall preparation progress
    2. Add interview questions
    3. Categories: DSA, Technical, Git, Machine Coding
    4. Difficulty levels: Easy, Medium, Hard
    5. Question status: Pending, In Progress, Completed
    6. Search questions
    7. Filter by category, difficulty, and status
    8. Completion percentage and progress tracking
    9. LocalStorage data persistence
    10. Responsive design
    11. Form validation
    12. Empty and no-search-results states


# Tech Stack

    1. React.js
    2. React Router
    3. Tailwind CSS
    4. React Hook Form
    5. Lucide React
    6. LocalStorage


# Project Structure

src/
├── components/
│ └── AsideNavbar.jsx
├── layouts/
│ └── MainLayouts.jsx
├── pages/
│ ├── HomePage.jsx
│ ├── AddQuestionPage.jsx
│ └── AllQuestionsPage.jsx
├── router/
│ └── router.jsx
├── App.jsx
└── main.jsx

    Folder and file names may vary depending on the final project structure.


# Getting Started

    1. Clone the repository

        git clone <your-repository-url>

    2. Open the project

        cd <project-folder>

    3. Install dependencies

        npm install

    4. Start the development server

        npm run dev

        Open the local URL shown in the terminal.


# How It Works

    1. Add Questions

        Go to Add Question and enter:

            a. Question title
            b. Category
            c. Difficulty
            d.Status

        The question is saved in the browser's LocalStorage.

    2. Track Progress

        The dashboard calculates:

            a. Total questions
            b. Completed DSA questions
            c. Completed Git questions
            d. Completed Technical questions
            e. Machine Coding progress
            f. verall completion percentage

    3. Search and Filter

        The All Questions page allows questions to be searched and filtered by:
            
            a. Question title
            b. Category
            c. Difficulty
            d. Status

    4. Data Storage

        This project currently uses LocalStorage instead of a backend database.

        Questions are stored using:

        addQuestion

        The data remains available after refreshing the browser on the same device and browser.


# Responsive Design

    The application is designed for:

        a. Desktop
        b. Tablet
        c. Mobile


# Future Improvements

    1. Edit and delete questions
    2. User authentication
    3. Backend API
    4. Database integration
    5. Cloud data synchronization
    6. Detailed analytics
    7. Interview preparation reminders


# Author

Rahul Kumar

Built as a weekly interview preparation tracker using React.
