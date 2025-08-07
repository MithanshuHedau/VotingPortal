# 🗳️ Voting Portal

A modern, secure, and user-friendly online voting platform built with the MERN stack. This application provides a complete digital voting experience with separate interfaces for voters and administrators.

![Voting Portal](https://img.shields.io/badge/Status-Active-brightgreen)
![React](https://img.shields.io/badge/React-18+-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-6+-orange)

## 🌟 Features

### For Voters

- **Secure Registration**: Register with Aadhar card verification
- **One-Time Voting**: Each user can vote only once per election
- **Real-time Results**: View live voting results and statistics
- **Profile Management**: Update personal information and change passwords
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### For Administrators

- **Candidate Management**: Add, edit, and delete candidates
- **Vote Monitoring**: Real-time vote tracking and analytics
- **User Management**: Monitor registered users and voting status
- **Results Dashboard**: Comprehensive voting results with visual representations

### Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Encryption**: Bcrypt hashing for password security
- **CORS Protection**: Configured cross-origin resource sharing
- **Input Validation**: Comprehensive form validation on both client and server
- **Role-based Access**: Separate permissions for voters and administrators

## 🚀 Live Demo

- **Frontend**: [https://electorportal.vercel.app](https://electorportal.vercel.app)
- **Backend API**: [https://votingportal-fp5j.onrender.com](https://votingportal-fp5j.onrender.com)

## 🛠️ Tech Stack

### Frontend

- **React 19.1.0** - Modern UI library with latest features
- **React Router DOM 7.7.1** - Client-side routing
- **React Icons 5.5.0** - Beautiful icons
- **Vite 7.0.4** - Fast build tool and development server
- **CSS3** - Custom styling with responsive design

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js 5.1.0** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 8.17.0** - MongoDB object modeling

### Security & Authentication

- **JSON Web Tokens (JWT)** - Secure authentication
- **Bcrypt.js** - Password hashing
- **CORS** - Cross-origin resource sharing

### Deployment

- **Frontend**: Vercel
- **Backend**: Render
- **Database**: MongoDB Atlas

## 📁 Project Structure

```
VotingPortal/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx              # Landing page
│   │   │   ├── Login.jsx             # User login
│   │   │   ├── Signup.jsx            # User registration
│   │   │   ├── Dashboard.jsx         # Voter dashboard
│   │   │   ├── AdminPanel.jsx        # Admin management panel
│   │   │   ├── Profile.jsx           # User profile management
│   │   │   ├── About.jsx             # About page
│   │   │   ├── Navbar.jsx            # Navigation component
│   │   │   ├── Footer.jsx            # Footer component
│   │   │   └── ProtectedRoute.jsx    # Route protection
│   │   ├── context/
│   │   │   └── AuthContext.jsx       # Authentication context
│   │   ├── styles/
│   │   │   ├── global.css            # Global styles
│   │   │   ├── auth.css              # Authentication styles
│   │   │   ├── dashboard.css         # Dashboard styles
│   │   │   ├── admin.css             # Admin panel styles
│   │   │   └── navbar.css            # Navigation styles
│   │   ├── utils/
│   │   │   └── api.js                # API utility functions
│   │   ├── App.jsx                   # Main app component
│   │   └── main.jsx                  # App entry point
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── models/
│   │   ├── user.js                   # User schema
│   │   └── candidate.js              # Candidate schema
│   ├── routes/
│   │   ├── userRoutes.js             # User-related routes
│   │   └── candidateRoutes.js        # Candidate-related routes
│   ├── connection/
│   │   └── db.js                     # Database connection
│   ├── jwt.js                        # JWT utilities
│   ├── server.js                     # Express server
│   └── package.json
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (Atlas or local installation)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/MithanshuHedau/VotingPortal.git
cd VotingPortal
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file and add your environment variables
echo "MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000" > .env

# Start the backend server
npm start
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

### 4. Environment Variables

Create a `.env` file in the backend directory:

```env

```

## 🚀 Deployment

### Frontend (Vercel)

1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push to main branch

### Backend (Render)

1. Connect your GitHub repository to Render
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables in Render dashboard
5. Deploy automatically on push to main branch

## 📖 API Documentation

### Authentication Endpoints

```
POST /user/signup          # Register new user
POST /user/login           # User login
GET  /user/profile         # Get user profile
PUT  /user/profile/password # Update password
```

### Candidate Endpoints

```
GET    /user/candidates              # Get all candidates (voter)
POST   /candidate                    # Add candidate (admin only)
PUT    /candidate/:id               # Update candidate (admin only)
DELETE /candidate/:id               # Delete candidate (admin only)
POST   /candidate/vote/:id          # Vote for candidate
GET    /candidate/vote/count        # Get vote counts
```

## 👥 User Roles

### Voter

- Register and login to the system
- View available candidates
- Cast one vote per election
- View real-time results
- Manage profile and change password

### Administrator

- All voter permissions except voting
- Add, edit, and delete candidates
- Monitor vote counts and analytics
- Access comprehensive admin dashboard

## 🔐 Security Measures

1. **Password Security**: Bcrypt hashing with salt rounds
2. **JWT Authentication**: Secure token-based authentication
3. **Input Validation**: Server-side validation for all inputs
4. **CORS Configuration**: Restricted cross-origin requests
5. **Role-based Access**: Protected admin routes
6. **One Vote Policy**: Database-level vote tracking

## 🎨 UI/UX Features

- **Modern Design**: Clean and intuitive interface
- **Responsive Layout**: Mobile-friendly design
- **Real-time Updates**: Live vote counting and results
- **Loading States**: User-friendly loading indicators
- **Error Handling**: Comprehensive error messages
- **Success Feedback**: Clear confirmation messages

## 🧪 Testing

### Manual Testing Checklist

- [ ] User registration with validation
- [ ] User login and authentication
- [ ] Protected route access
- [ ] Candidate voting process
- [ ] Admin candidate management
- [ ] Real-time vote counting
- [ ] Profile management
- [ ] Password updates
- [ ] Responsive design on mobile

## 🔄 Version History

- **v1.0.0** - Initial release with core voting functionality
- **v1.1.0** - Added admin panel and candidate management
- **v1.2.0** - Improved UI/UX and mobile responsiveness
- **v1.3.0** - Enhanced security and error handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🛡️ Data Privacy

- User data is encrypted and securely stored
- Voting records are anonymized
- Personal information is protected according to privacy standards
- Regular security audits and updates

## 📞 Support & Contact

For any questions, issues, or suggestions, please feel free to reach out:

**Email**: hedaumithanshu@gmail.com

---

**Built with ❤️ by Mithanshu Hedau**

_Making democracy accessible through technology_
