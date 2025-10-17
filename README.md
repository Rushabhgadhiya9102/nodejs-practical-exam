# 🧠 Node.js Practical Exam (Blog Project)

A fully functional **Node.js + Express.js** application integrated with **MongoDB (Mongoose)**, **EJS templating**, and **JWT authentication with cookies**.  
This project demonstrates modern backend practices including secure authentication, modular architecture, and clean environment-based configuration.

---

## 📂 Project Structure

```
nodejs-practical-exam/
├── configs/
│   ├── configs.js          # Handles environment setup and dotenvx config
│   ├── database.js         # MongoDB connection setup
├── routers/
│   ├── index.js            # Main route manager
│   ├── auth.routes.js      # (Optional) Authentication routes
│   ├── user.routes.js      # (Optional) User routes
├── models/
│   ├── user.model.js       # User schema for MongoDB
├── views/                  # EJS templates for UI rendering
│   ├── pages/
│   └── partials/
├── public/                 # Static assets (CSS, JS, images)
├── server.js               # Main server file (entry point)
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Technologies Used

| Package | Purpose |
|----------|----------|
| **Express.js** | Web framework for Node.js |
| **EJS** | Template engine for dynamic views |
| **Mongoose** | MongoDB object modeling |
| **bcrypt** | Password hashing |
| **jsonwebtoken (JWT)** | Token-based authentication |
| **cookie-parser** | Parses cookies for authentication/session |
| **body-parser** | Parses form and JSON data |
| **passport / passport-local** | Authentication middleware |
| **dotenvx** | Environment configuration manager |
| **nodemon** | Auto-restart server during development |

---

## 🔑 Environment Configuration

The `.env` file (already included) defines sensitive configuration values:

```env
PORT=8081
MONGO_URL=mongodb+srv://<username>:<password>@globaldb.lxz5bje.mongodb.net/nodejsPractical
SECRET_KEY=usersprivatekey
```

### ⚠️ Important:
- Replace `<username>` and `<password>` with your MongoDB credentials.
- Never expose `.env` content publicly in production.

---

## 🧰 Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Rushabhgadhiya9102/nodejs-practical-exam.git
cd nodejs-practical-exam
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Configure environment variables
Update your `.env` file with:
- Your **MongoDB connection string**
- Your **JWT secret key**

### 4️⃣ Start the server

For production:
```bash
npm start
```

For development (auto restart with nodemon):
```bash
npm run dev
```

---

## 🌐 Access the App

Once the server starts, visit:

```
http://localhost:8081
```

If you used a different port in `.env`, use that instead.

---

## 📜 Scripts

| Command | Description |
|----------|-------------|
| `npm start` | Runs the server with Node |
| `npm run dev` | Runs the server with Nodemon (auto reload) |

---

## 🧩 Middleware Stack

| Middleware | Description |
|-------------|-------------|
| `express.static('public')` | Serves static files |
| `body-parser.urlencoded({ extended: true })` | Handles form submissions |
| `cookie-parser()` | Parses cookies for auth |
| `app.set('view engine', 'ejs')` | Sets EJS for templating |

---

## 🧠 Authentication Flow (If Implemented)

1. User signs up or logs in via form.
2. Server verifies credentials with **bcrypt**.
3. Generates a **JWT token** using `jsonwebtoken`.
4. Token is stored in a **cookie** using `cookie-parser`.
5. Protected routes verify the token to allow access.

---

## 🧪 Example Output

When you run the app successfully, the terminal will show:

```
server is started
http://localhost:8081
Connected to MongoDB successfully
```

---

## 🧑‍💻 Author

**👤 Rushabh Gadhiya**  
📧 Email: [rushabhgadhiya9102@gmail.com](mailto:rushabhgadhiya9102@gmail.com)  
💼 GitHub: [@Rushabhgadhiya9102](https://github.com/Rushabhgadhiya9102)

---

## 🪪 License

This project is licensed under the **ISC License**.  
You’re free to use, modify, and distribute this project with attribution.
