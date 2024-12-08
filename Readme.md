# 📚 Library Management System  

The **Library Management System** is a backend application built with **Node.js**, **Express**, and **MongoDB** to streamline library operations like managing books, authors, and users, along with borrowing and returning books.

---

## 🛠 Features  

- **Author Management**: Add and manage authors in the database.  
- **Book Management**: Add books, associate them with authors, and track availability.  
- **User Management**: Register users who can borrow and return books.  
- **Borrow & Return Operations**: Efficiently handle borrowing and returning books with due date management.  
- **List Books by Author**: Retrieve all books written by a specific author.  
- **List Borrowed Books**: View all books borrowed by a specific user.  

---

## 🚀 Getting Started  

### Prerequisites  

- **Node.js** (v14+ recommended)  
- **MongoDB** (local or cloud instance)  
- Package manager: `npm` or `yarn`  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-username/library-management-system.git  
   cd library-management-system  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Configure environment variables

4. Start the server:  
   ```bash  
   nodemon index.js  
   ```  

---

## 🖇 API Endpoints  

### **Author Management**  
- **Add Author**  
  `POST /api/authors`  
  **Body**:  
  ```json  
  { "name": "Author Name" }  
  ```  

### **Book Management**  
- **Add Book**  
  `POST /api/books`  
  **Body**:  
  ```json  
  { "title": "Book Title", "authorId": "AuthorID" }  
  ```  

- **List Books by Author**  
  `GET /api/books/:authorId`  

### **User Management**  
- **Add User**  
  `POST /api/users`  
  **Body**:  
  ```json  
  { "name": "User Name" }  
  ```  

### **Borrow & Return Management**  
- **Borrow a Book**  
  `POST /api/borrow`  
  **Body**:  
  ```json  
  { "userId": "UserID", "bookId": "BookID" }  
  ```  

- **Return a Book**  
  `POST /api/return`  
  **Body**:  
  ```json  
  { "userId": "UserID", "bookId": "BookID" }  
  ```  

- **List Borrowed Books**  
  `GET /api/borrowed/:userId`  

---

## 🛡 Error Handling  

- Returns **400 Bad Request** for missing or invalid inputs.  
- Provides **404 Not Found** for nonexistent resources like books or authors.  
- Ensures meaningful error messages for all operations.  

---

## 🌟 Technologies Used  

- **Node.js**: Backend runtime environment.  
- **Express.js**: Framework for routing and middleware.  
- **MongoDB**: NoSQL database.  
- **Mongoose**: MongoDB ORM for schema and validation.  

---

## 📂 Project Structure  

```plaintext  
LibraryManagementSystem/  
├── config/  
│   └── db.js             # Database connection setup  
├── controllers/  
│   └── libraryController.js  # Logic for library operations  
├── models/  
│   ├── Author.js         # Author schema  
│   ├── Book.js           # Book schema  
│   ├── BorrowingTransaction.js  # Transaction schema  
│   └── User.js           # User schema  
├── routes/  
│   └── libraryRoutes.js  # API route definitions  
├── .env                  # Environment variables  
├── index.js              # Application entry point  
└── package.json          # Dependencies and scripts  
```  

---

## 📝 Notes  

- Ensure **MongoDB** is running or provide a valid cloud connection string in the `.env` file.  
- All data operations are validated to ensure integrity and consistency.  
- This application is extensible and can include additional features like overdue book tracking, notifications, and more.  
