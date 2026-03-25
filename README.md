# ProConnect - LinkedIn Clone

A full-stack professional networking platform built with Next.js and Node.js, inspired by LinkedIn. Connect with professionals, share posts, manage your profile, and grow your network.

---

## Live Demo

> Frontend: Coming soon (Vercel)  
> Backend: Coming soon (Render)

---

## Features

- **Authentication** — Register and login with secure token-based auth (bcrypt + crypto tokens)
- **Feed / Dashboard** — LinkedIn-style 3-column layout with post feed
- **Create Posts** — Share text posts with optional image/media upload
- **Like, Comment, Repost, Send** — Full post interaction system
- **User Profiles** — Edit bio, current position, work history, profile picture
- **View Profiles** — Browse other users' profiles with their recent activity
- **Connections** — Send, accept, and manage connection requests
- **Discover People** — Browse all users on the platform
- **Download Resume** — Auto-generate PDF resume from profile data
- **Responsive Design** — Mobile-friendly with bottom navigation bar

---

## Tech Stack

### Frontend
| Tech | Purpose |
|------|---------|
| Next.js 16 | React framework with SSR |
| React 19 | UI library |
| Redux Toolkit | Global state management |
| Axios | HTTP client |
| CSS Modules | Component-scoped styling |

### Backend
| Tech | Purpose |
|------|---------|
| Node.js | Runtime |
| Express.js 5 | Web framework |
| MongoDB Atlas | Cloud database |
| Mongoose | ODM for MongoDB |
| bcrypt | Password hashing |
| Multer | File/image uploads |
| PDFKit | PDF resume generation |
| dotenv | Environment config |

---

## Project Structure

```
ProConnectLinkedinClone-main/
├── backend/
│   ├── controllers/
│   │   ├── post.controller.js     # Post, comment, like logic
│   │   └── user.controller.js     # Auth, profile, connections logic
│   ├── models/
│   │   ├── user.model.js          # User schema
│   │   ├── posts.model.js         # Post schema
│   │   ├── profile.model.js       # Profile (bio, work, education)
│   │   ├── comments.model.js      # Comment schema
│   │   └── connections.model.js   # Connection request schema
│   ├── routes/
│   │   ├── posts.router.js        # Post routes
│   │   └── user.router.js         # User/auth routes
│   ├── uploads/                   # Uploaded images and PDFs
│   ├── server.js                  # Express app entry point
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── Components/Navbar/     # Top navigation bar
    │   ├── layout/
    │   │   ├── UserLayout/        # Wraps all pages with Navbar
    │   │   └── DashboardLayout/   # 3-column LinkedIn-style layout
    │   ├── pages/
    │   │   ├── index.jsx          # Landing page
    │   │   ├── login/             # Sign in / Sign up
    │   │   ├── dashboard/         # Main feed
    │   │   ├── profile/           # Edit your profile
    │   │   ├── discover/          # Browse all users
    │   │   ├── my_connections/    # Manage connections
    │   │   └── view_profile/      # View other user profiles
    │   └── config/
    │       ├── index.jsx          # Axios base URL config
    │       └── redux/             # Store, actions, reducers
    └── package.json
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the repo
```bash
git clone https://github.com/RajuAnsary/ProConnectLinkedinClone.git
cd ProConnectLinkedinClone/ProConnectLinkedinClone-main
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create `backend/.env`:
```env
PORT=9090
MONGO_URI=your_mongodb_connection_string
```

Start backend:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd frontend
npm install
```

Create `frontend/.env.local`:
```env
NEXT_PUBLIC_BASE_URL=http://localhost:9090
```

Start frontend:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## API Endpoints

### Auth & Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register new user |
| POST | `/login` | Login and get token |
| GET | `/get_user_and_profile` | Get logged-in user profile |
| POST | `/update_profile_data` | Update bio, work history |
| POST | `/update_profile_picture` | Upload profile picture |
| GET | `/user/get_all_users` | Get all user profiles |
| GET | `/user/get_profile_based_on_username` | Get profile by username |
| GET | `/user/download_resume` | Generate and download PDF resume |

### Connections
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/user/send_connection_request` | Send connection request |
| GET | `/user/getConnectionRequests` | Get sent requests |
| GET | `/user/user_connection_request` | Get received requests |
| POST | `/user/accept_connection_request` | Accept or reject request |

### Posts
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts` | Get all posts |
| POST | `/post` | Create a post (with optional media) |
| DELETE | `/delete_post` | Delete your post |
| POST | `/increment_post_like` | Like a post |
| POST | `/comment` | Add a comment |
| GET | `/get_comments` | Get comments for a post |

---

## Deployment

### Backend (Render)
1. New Web Service → connect GitHub repo
2. Root directory: `ProConnectLinkedinClone-main/backend`
3. Build command: `npm install`
4. Start command: `npm run prod`
5. Add env var: `MONGO_URI`

### Frontend (Vercel)
1. New Project → import GitHub repo
2. Root directory: `ProConnectLinkedinClone-main/frontend`
3. Add env var: `NEXT_PUBLIC_BASE_URL` = your Render backend URL

---

## Author

**Raju Ansary**
- GitHub: [@RajuAnsary](https://github.com/RajuAnsary)

---

## License

MIT
