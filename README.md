# 🔐 Secure Authentication System

A beautiful, secure, and centralized authentication system built with Next.js, React, Express.js, and MongoDB. Features a stunning UI with complete user management capabilities.

## ✨ Features

### 🔒 Security
- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - bcryptjs for secure password storage
- **Input Validation** - Comprehensive validation on both client and server
- **CORS Protection** - Cross-origin resource sharing protection
- **Environment Variables** - Secure configuration management

### 👤 User Management
- **User Registration** - Beautiful signup form with validation
- **User Login** - Secure login with remember me functionality
- **Profile Management** - Complete profile CRUD operations
- **Password Change** - Secure password update functionality
- **Account Deletion** - Safe account removal with confirmation
- **Logout** - Secure session termination

### 🎨 Beautiful UI
- **Modern Design** - Stunning gradient backgrounds and animations
- **Responsive Layout** - Works perfectly on all device sizes
- **Interactive Elements** - Smooth hover effects and transitions
- **Form Validation** - Real-time validation with error messages
- **Loading States** - Beautiful loading indicators
- **Toast Notifications** - Elegant success/error messages

### 🚀 Performance
- **Next.js 15** - Latest React framework with App Router
- **React 19** - Latest React features and optimizations
- **Tailwind CSS** - Utility-first CSS framework
- **Optimized Images** - Next.js Image optimization
- **Code Splitting** - Automatic code splitting for better performance

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **express-validator** - Input validation

### Frontend
- **Next.js 15** - React framework
- **React 19** - UI library
- **Tailwind CSS** - CSS framework
- **React Hook Form** - Form handling
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **Lucide React** - Icons

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account (or local MongoDB)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd auth
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://jaydeepjnvmzp2002_db_user:bo7uwnzNiNWK8Qxq@cluster0.lymhals.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=your_super_secret_jwt_key_here_make_it_very_long_and_secure_123456789
   JWT_EXPIRE=7d
   ```

5. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```

6. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```

7. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
auth/
├── backend/
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   └── .env              # Environment variables
├── frontend/
│   ├── src/
│   │   ├── app/          # Next.js app directory
│   │   │   ├── login/    # Login page
│   │   │   ├── register/ # Registration page
│   │   │   ├── dashboard/# Dashboard page
│   │   │   ├── layout.js # Root layout
│   │   │   └── page.js   # Home page
│   │   ├── components/   # React components
│   │   │   └── ProtectedRoute.js
│   │   ├── contexts/     # React contexts
│   │   │   └── AuthContext.js
│   │   └── lib/          # Utility functions
│   │       ├── api.js    # API functions
│   │       └── utils.js  # Helper functions
│   ├── package.json      # Frontend dependencies
│   └── tailwind.config.js
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Profile Management
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/change-password` - Change password
- `DELETE /api/auth/account` - Delete account

### Health Check
- `GET /api/health` - Server health check

## 🎯 Usage

### Registration
1. Navigate to `/register`
2. Fill in the registration form
3. Click "Create Account"
4. You'll be automatically logged in and redirected to dashboard

### Login
1. Navigate to `/login`
2. Enter your email and password
3. Click "Sign In"
4. You'll be redirected to dashboard

### Profile Management
1. Go to `/dashboard`
2. Click "Edit Profile" to update your information
3. Click "Change Password" to update your password
4. Use "Delete Account" to remove your account

## 🔐 Security Features

- **Password Hashing**: All passwords are hashed using bcryptjs
- **JWT Tokens**: Secure authentication tokens with expiration
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured for secure cross-origin requests
- **Environment Variables**: Sensitive data stored in environment variables
- **Error Handling**: Comprehensive error handling and logging

## 🎨 UI Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark/Light Mode**: Automatic theme detection
- **Smooth Animations**: Beautiful transitions and hover effects
- **Form Validation**: Real-time validation with helpful error messages
- **Loading States**: Elegant loading indicators
- **Toast Notifications**: Success and error notifications

## 🚀 Deployment

### Backend Deployment
1. Deploy to platforms like Heroku, Railway, or DigitalOcean
2. Set environment variables in your hosting platform
3. Ensure MongoDB Atlas is accessible from your hosting platform

### Frontend Deployment
1. Deploy to Vercel, Netlify, or similar platforms
2. Set `NEXT_PUBLIC_API_URL` environment variable
3. Build and deploy the application

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the console for error messages
2. Verify your environment variables
3. Ensure MongoDB connection is working
4. Check network connectivity

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the beautiful styling system
- MongoDB for the database solution
- All the open-source contributors

---

**Built with ❤️ by [Your Name]**

Enjoy your secure authentication system! 🎉
