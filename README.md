# User Management App

A simple React application to demonstrate **components, state management, routing, and form validation**.  
This project fetches user data from an API and also allows adding local users.

---

## 🚀 Features
- 📋 **Users Page**:  
  - View a list of users (fetched from API + locally added ones).  
  - Search users by name.  
  - Sort user cards alphabetically (A → Z / Z → A).  
  - Click on a user card arrow to view detailed profile information.

- 🙋 **Add User Page**:  
  - Form with validation (**Name** and **Email** are required).  
  - Add a new user locally and display it immediately in the **Added Users** section below the form.  
  - Added users also appear alongside API users in the **Users** page.

- 🏠 **Intro/Home Page**:  
  - Simple introduction / welcome page.  
  - Explains how to navigate to Users and Add User.

- 👤 **User Details Page**:  
  - View detailed information about a selected user (address, contact info, etc.).

---

## 🛠️ Tech Stack
- ⚛️ React (functional components + hooks)
- 🎨 TailwindCSS (styling)
- 🔀 React Router DOM (routing)
- 🌐 Axios (fetching users from API)

---

## 📦 Installation & Setup
```bash
# Clone the repository
git clone https://github.com/xhesikamula/UserManagementApp.git

# Navigate into the project
cd UserManagementApp

# Install dependencies
npm install

# Run the development server
npm start

```
---

## ⚡ Notes

- ⏳ It may take a few seconds for API users to load.  
- 💾 Local users are stored in localStorage and persist until manually cleared.  

---
**🌐 Live Preview:** [xhesis-usermanagementapp.netlify.app](https://xhesis-usermanagementapp.netlify.app)
---
## 👤 Author
**Xhesika Mula**

