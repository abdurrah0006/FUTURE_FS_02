# 📊 Mini CRM — Client Lead Management System

A full-stack **Client Lead Management System** built with the **MERN Stack**, designed to help businesses capture, organize, track, and manage leads generated through website contact forms.

The application provides a modern SaaS-style admin dashboard where leads can be monitored, updated, searched, filtered, and managed throughout their sales journey.

The project uses **MongoDB locally through MongoDB Compass** for database management and is structured with a separate frontend and backend architecture.

---

## ✨ Features

### 🔐 Admin Authentication

* Admin Login
* JWT-based Authentication
* Protected Admin Routes
* Persistent Authentication
* Logout System
* Secure API Access

### 👤 Lead Management

* Add New Leads
* View Lead Information
* Update Lead Information
* Delete Leads
* Lead Status Management
* Individual Lead Tracking

### 📈 Lead Status Pipeline

Each lead can be assigned one of the following statuses:

* **New**
* **Contacted**
* **Converted**

This allows administrators to quickly understand where each lead currently stands in the sales process.

### 📝 Notes & Follow-ups

* Add notes to individual leads
* View lead notes
* Add follow-up dates
* Track upcoming follow-ups
* Manage customer-specific information

### 🔎 Search & Filtering

* Search leads
* Filter by status
* Filter by source
* Quickly locate specific customers

### 📊 Dashboard Analytics

The dashboard provides a quick overview of the lead pipeline, including:

* Total Leads
* New Leads
* Contacted Leads
* Converted Leads
* Lead source statistics
* Lead status distribution
* Conversion statistics

### 🕒 Timestamp Tracking

Lead records include timestamps for tracking when records were:

* Created
* Updated

This makes it easier to monitor recent activity and lead progression.

### 🎨 Modern SaaS Dashboard UI

The frontend follows a consistent modern SaaS design system featuring:

* Soft pink / magenta visual theme
* Rounded cards
* Subtle gradients
* Consistent spacing
* Responsive layouts
* Status badges
* Dashboard statistics
* Analytics charts
* Reusable UI components
* Dedicated lead management page
* Consistent navigation across pages

### 📱 Responsive Interface

The application is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS
* Framer Motion
* React Icons

### Backend

* Node.js
* Express.js
* RESTful API
* JWT Authentication
* Middleware-based authentication

### Database

* MongoDB
* Mongoose ODM
* MongoDB Compass
* Local MongoDB Server

### Development Tools

* Vite
* Nodemon
* Git
* GitHub
* VS Code

---

## 📂 Project Structure

```bash
mini-crm/
│
├── server/
│   │
│   ├── config/
│   │   ├── jwt.js
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── leadController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── logger.js
│   │   └── errorMiddleware.js
│   │
│   ├── models/
│   │   ├── Admin.js
│   │   └── Lead.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── leadRoutes.js
│   │
│   ├── Seed/
│   │   └── adminSeeder.js
│   │
│   ├── Services/
│   │   └── leadServices.js
│   │
│   ├── utils/
│   │   ├── constant.js
│   │   └── generateToken.js
│   │
│   ├── app.js
│   ├── server.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json.js
│   └── package-lock.json
│
├── client/
│   │
│   ├── src/
│   │   │
│   │   ├── components/
│   │   │   │
│   │   │   └── Charts/
│   │   │   │   ├── LeadSourceChart.jsx
│   │   │   │   └── LeadStatusChart.jsx
│   │   │   │
│   │   │   ├── AnalyticsCard.jsx
│   │   │   ├── FollowUpReminder.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── LeadForm.jsx
│   │   │   ├── LeadTable.jsx
│   │   │   ├── LeadFilters.jsx
│   │   │   ├── ProctedRoutes.jsx
│   │   │   └── Layout/
│   │   │       ├── Layout.jsx
│   │   │       ├── Sidebar.jsx
│   │   │       └── Header.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Analytics.jsx
│   │   │   ├── CreatedLead.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── LeadDetails.jsx
│   │   │   ├── Leads.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   └── leadService.js
│   │   │
│   │   ├── styles/
│   │   │   └── main.css
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── routes.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── .gitignore
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

> The exact filenames may differ slightly depending on the final component organization, but the project follows a separated **frontend/backend architecture** with modular React components and Express API layers.

---

## 🗄️ MongoDB Structure

The application uses a local MongoDB database.

Example connection:

```env
MONGO_URI=mongodb://127.0.0.1:27017/mini-crm
```

The database can be viewed and managed using **MongoDB Compass**.

### Lead Document

A lead contains information such as:

```js
{
    name: "John Doe",
    email: "john@example.com",
    source: "Website",
    status: "New",
    notes: "Interested in the service",
    followUp: "2026-08-20",
    createdAt: Date,
    updatedAt: Date
}
```

The schema is managed through **Mongoose**.

---

## 🔐 Authentication Flow

The application uses JWT-based authentication.

```text
Admin
  ↓
Login
  ↓
Backend Authentication
  ↓
JWT Token
  ↓
Protected Routes
  ↓
CRM Dashboard
```

Protected lead-management endpoints require valid authentication before administrative operations can be performed.

---

## 🔌 API Structure

### Authentication

```text
POST /api/auth/login
POST /api/auth/register
```

### Leads

```text
POST   /api/leads
GET    /api/leads
GET    /api/leads/:id
PUT    /api/leads/:id
DELETE /api/leads/:id
```

The API is responsible for handling lead creation, retrieval, updating, deletion, authentication, and database communication.

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** directory.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mini-crm
JWT_SECRET=your_super_secret_key
NODE_ENV=development
```

> Never commit the `.env` file to GitHub.

---

## 🚀 Running the Project Locally

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* MongoDB Community Server
* MongoDB Compass
* Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/abdurrah0006/mini-crm.git
cd mini-crm
```

---

### 2. Start MongoDB

Make sure your local MongoDB server is running.

Open **MongoDB Compass** and connect to:

```text
mongodb://127.0.0.1:27017
```

---

### 3. Start the Backend

```bash
cd backend
npm install
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

---

### 4. Start the Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite will provide the local frontend URL, typically:

```text
http://localhost:5173
```

---

## 🔄 Application Flow

```text
Website / Admin
       │
       ▼
   React Frontend
       │
       │ Axios
       ▼
   Express API
       │
       ▼
 Authentication Middleware
       │
       ▼
   Lead Controller
       │
       ▼
    Mongoose
       │
       ▼
 MongoDB Database
```

---

## 📊 Dashboard Overview

The dashboard is designed around the most important CRM questions:

### How many leads do I have?

→ Total Leads

### Which leads need attention?

→ New and Contacted leads

### How successful are my leads?

→ Converted leads and conversion analytics

### Where are my leads coming from?

→ Lead Source Analytics

### What needs follow-up?

→ Follow-up tracking

---

## 🧠 What I Learned

Building this project helped strengthen practical experience with:

* MERN Stack Architecture
* React Component Architecture
* REST API Development
* Express.js
* MongoDB & Mongoose
* JWT Authentication
* Protected Routes
* CRUD Operations
* Lead Management Systems
* Search & Filtering
* Dashboard Analytics
* Responsive CSS
* SaaS UI Design Systems
* Reusable Components
* CSS Architecture
* Error Handling
* Debugging Full-Stack Applications
* Local MongoDB Development with MongoDB Compass

---

## 🔮 Future Improvements

Possible future improvements include:

* Automated website contact-form integration
* Real-time lead notifications
* Advanced analytics
* Lead conversion funnel
* Follow-up reminders
* Email integration
* WhatsApp integration
* Lead assignment to team members
* Role-based admin permissions
* CSV lead import/export
* Advanced reporting
* Pagination
* Activity history
* Automated follow-up workflows
* Production deployment

---

## 📸 Screenshots

### Dashboard

![Dashboard](image/dashboard.jpg)

### Lead Management

![Lead Management](image/leadManagement.jpg)

### Add Lead

![Add Lead](image/addLead.jpg)

### Analytics

![Analytics](image/analytics.jpg)

---

## 📬 Contact

If you are interested in the project, collaboration, or full-stack web development:

**GitHub:** `https://github.com/abdurrah0006`

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.
