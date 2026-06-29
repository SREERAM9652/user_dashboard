# User Management Dashboard

A modern, responsive User Management Dashboard built with React, Vite, and Tailwind CSS. It allows administrators to perform complete CRUD operations on user data using JSONPlaceholder as a mock backend.

## Project Overview

This dashboard features:
- **Responsive UI:** Seamless navigation across mobile, tablet, and desktop screens, featuring a rich, glassmorphic design system.
- **User Table:** A clear table layout displaying core user attributes (ID, First Name, Last Name, Email, Department).
- **Search & Filter:** Real-time search across names and emails, plus a department filter.
- **Sorting:** Multi-field lexicographical sorting.
- **Pagination:** Flexible page-size controls and state-aware navigation.
- **Add/Edit User Form:** Clean modal with client-side validation.
- **Delete Confirmation:** Prevention of accidental deletions via a safety prompt.
- **Error Handling:** Safe `try...catch` blocks preventing application crashes with visual system alerts.

## Installation Instructions

1. Clone the repository or extract the project files.
2. Navigate into the project directory:
   ```bash
   cd user-management-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

To start the development server:
```bash
npm run dev
```
Navigate to `http://localhost:5173` to view the application.

To build for production:
```bash
npm run build
```

## Folder Structure Map

```
user-management-dashboard/
├── public/                 # Static assets
├── src/
│   ├── api/
│   │   └── userService.js  # Axios configurations and API calls
│   ├── components/         # Reusable React components
│   │   ├── ConfirmDelete.jsx
│   │   ├── Header.jsx
│   │   ├── Pagination.jsx
│   │   ├── UserForm.jsx
│   │   └── UserTable.jsx
│   ├── hooks/
│   │   └── useUsers.js     # Custom hook for data fetching and CRUD state
│   ├── utils/
│   │   └── validators.js   # Client-side input validation utilities
│   ├── App.jsx             # Root layout containing shared state
│   ├── index.css           # Global Tailwind styles
│   └── main.jsx            # Application entry point
├── tailwind.config.js      # Tailwind configuration
├── package.json            # Dependencies and scripts
└── README.md               # Documentation
```

## Libraries Used

- **React:** Core UI library.
- **Vite:** Next-generation frontend tooling for fast builds.
- **Axios:** Promise-based HTTP client for API requests.
- **Tailwind CSS:** Utility-first CSS framework for rapid styling.
- **Lucide React:** Beautiful and consistent SVG icons.

## Engineering Assumptions

1. **Name Extraction:** The mock API provides a single `name` string. I assumed the first word is the `firstName` and the rest of the string is the `lastName`. If there is no space, the entire string becomes the `firstName`.
2. **Department Logic:** The mock API does not provide a department. I assigned a default "Engineering" department to all fetched users. The Add/Edit form allows selecting from a predefined list of departments.
3. **Data Persistence:** Because JSONPlaceholder is a mock API, changes (Add, Edit, Delete) are not persisted on their server. I implemented a robust local React state layer to ensure the UI instantly reflects all CRUD operations during the active session.

## Challenges Faced

- **JSONPlaceholder Read-Only Limitation:** Handling POST, PUT, and DELETE requests required artificially mutating the local component state since the mock backend doesn't save the changes. This was solved using a custom hook (`useUsers.js`) to seamlessly merge the simulated API responses with the local array.
- **Responsive Tables:** Standard HTML tables often break mobile layouts. This was mitigated by wrapping the table in a container with `overflow-x-auto` to allow horizontal scrolling on small screens without breaking the main layout.

## Future Architectural Improvements

- **Database Persistence:** Migrate to a real backend (e.g., Node.js + MongoDB or Supabase) to persist data across reloads.
- **Authentication:** Add a login system to restrict dashboard access to authorized administrators only.
- **Advanced State Management:** As the app grows, moving state from `App.jsx` to a global store like Redux Toolkit or Zustand could improve maintainability.
- **Bulk Actions:** Implement checkboxes on the table rows to allow administrators to delete or update multiple users simultaneously.
"# user-management-dashboard" 
