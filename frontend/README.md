# User Dashboard (React + Vite)

Frontend UI for the User Management backend (Express + MongoDB).

## Folder Structure

```
user-dashboard/
├── index.html              # Vite entry HTML
├── vite.config.js          # Dev proxy: /api → localhost:3000
├── package.json
└── src/
    ├── main.jsx            # App bootstrap
    ├── App.jsx             # Routes
    ├── index.css           # Global styles
    ├── api/
    │   └── userApi.js      # All API calls (axios) — edit BASE URL here if needed
    ├── components/
    │   └── Sidebar.jsx     # Navigation sidebar
    └── pages/
        ├── UsersPage.jsx   # GET /api/users   — table of all users
        ├── AddUserPage.jsx # POST /api/add-user — register new user
        └── VerifyUserPage.jsx # POST /api/verify-user — verify with code
```

## Setup

1. Make sure your backend is running on **port 3000**
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start dev server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173

## API Proxy

The `vite.config.js` proxies all `/api` requests to `http://localhost:3000`.
This avoids CORS issues. No changes needed as long as your backend runs on port 3000.

If your backend runs on a different port, update `vite.config.js`:
```js
target: 'http://localhost:YOUR_PORT'
```

## Pages

| Page | Route | API Used |
|------|-------|----------|
| All Users | `/` | `GET /api/users` |
| Add User | `/add-user` | `POST /api/add-user` |
| Verify User | `/verify-user` | `POST /api/verify-user` |
