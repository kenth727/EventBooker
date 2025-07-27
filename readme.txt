# Event Booker

**Event Booker** is a full-stack application for managing events and bookings.  
It features a backend built with **Node.js**, **Express**, **GraphQL**, and **MongoDB**, and a frontend built with **React**.

---

## 🚀 Features

- ✅ User authentication (signup/login) with JWT
- 📅 Create, view, and manage events
- 🎟️ Book events and cancel bookings
- 💻 Responsive UI built with React
- 🔗 Backend API powered by GraphQL

---

## 🗂️ Project Structure

### 📦 Backend

```
backend/
├── app.js                  # Entry point for the backend server
├── graphql/
│   ├── schema/index.js     # GraphQL schema definition
│   └── resolvers/          # Authentication, event, and booking resolvers
├── middleware/
│   └── is-auth.js          # JWT auth middleware
├── models/                 # Mongoose models: User, Event, Booking
└── helpers/
    └── date.js             # Date formatting utility
```

### 🎨 Frontend

```
frontend/src/
├── components/             # Reusable UI components (Modal, Spinner, Navigation)
├── pages/                  # Auth, Events, Bookings pages
├── context/
│   └── auth-context.js     # Global auth context
├── App.js                  # Main component with routing
└── index.js                # React entry point
```

---

## ⚙️ Installation

### Prerequisites

- Node.js & npm installed
- MongoDB instance (local or cloud)

---

### 🔧 Backend Setup

1. Clone the repository and navigate to the project root:

   ```sh
   git clone https://github.com/your-username/event-booker.git
   cd event-booker
   ```

2. Install backend dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file with the following variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. Start the backend server:

   ```sh
   npm start
   ```

   The backend will be available at: http://localhost:8000

---

### 🌐 Frontend Setup

1. Navigate to the frontend directory:

   ```sh
   cd frontend
   ```

2. Install frontend dependencies:

   ```sh
   npm install
   ```

3. Start the React development server:

   ```sh
   npm start
   ```

   The frontend will run at: http://localhost:3000

---

## 🧪 Usage

1. Open http://localhost:3000 in your browser.
2. Sign up or log in.
3. Create new events and view details.
4. Book events or cancel your bookings from the **Bookings** page.

---

## 🔍 GraphQL API

The backend exposes a GraphQL endpoint at:

http://localhost:8000/graphql

You can test it using GraphiQL or a GraphQL client.

### 📥 Queries

```graphql
events {
  _id
  title
  description
  date
  price
  creator {
    email
  }
}

bookings {
  _id
  event {
    title
  }
}

login(email: String!, password: String!): AuthData
```

### ✏️ Mutations

```graphql
createUser(userInput: { email: "test@example.com", password: "123456" })

createEvent(eventInput: { title: "Test Event", description: "Details", date: "2025-01-01", price: 20 })

bookEvent(eventId: "eventIdHere")

cancelBooking(bookingId: "bookingIdHere")
```

---

## 🛠 Technologies Used

### Backend

- Node.js
- Express
- GraphQL
- MongoDB & Mongoose
- JWT (authentication)

### Frontend

- React
- React Router
- Context API (state management)

---

## 📄 License

This project is licensed under the MIT License.
