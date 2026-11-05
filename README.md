# Event Feedback Form

A lightweight, no-build event feedback tool built with vanilla JS and Firebase. Attendees submit anonymous star-rated feedback; organizers get a password-protected admin dashboard to view responses, log event issues, and post internal notes.

## Features

- Anonymous attendee feedback form (star rating + text)
- Admin dashboard with email/password login
- Real-time Firestore backend
- Strict Firestore security rules (schema validation, role separation)
- XSS protection on all rendered user content
- No build step — runs directly in the browser via Firebase CDN

## Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Create a Firebase project

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a project
2. Enable **Firestore Database** (start in production mode)
3. Enable **Authentication** → turn on **Email/Password** and **Anonymous** providers
4. Register a **Web App** and copy the config values

### 3. Configure Firebase

```bash
cp firebase-config.example.js firebase-config.js
```

Open `firebase-config.js` and replace the placeholder values with your project's config from Firebase Console → Project Settings → Your Apps.

### 4. Deploy Firestore rules

Install the Firebase CLI if you haven't:

```bash
npm install -g firebase-tools
firebase login
firebase init firestore   # point it at this directory
firebase deploy --only firestore:rules
```

### 5. Create an admin account

In Firebase Console → Authentication → Users → Add User, create an email/password account. That's your admin login for `/admin.html`.

### 6. Open the app

Since there's no build step, just open `index.html` in a browser — or serve with any static file server:

```bash
npx serve .
# or
python -m http.server
```

## Project structure

```
├── index.html              # Public attendee feedback form
├── admin.html              # Password-protected organizer dashboard
├── app.js                  # Feedback form logic
├── admin.js                # Admin dashboard logic
├── firebase-config.js      # Your Firebase credentials (gitignored)
├── firebase-config.example.js  # Copy this to firebase-config.js
├── firestore.rules         # Firestore security rules
└── styles.css              # Shared styles
```

## Security model

Firebase web API keys are **not secret** — they identify your project but don't grant access on their own. What actually controls access are:

- **Firestore rules** (`firestore.rules`) — attendees can only create feedback with a validated schema; all admin collections require email/password auth
- **Firebase Auth** — anonymous auth for attendees, email/password for admins
- **No admin credentials in source** — the admin email/password lives only in Firebase Auth, never in code

Deploy your Firestore rules before going live.

## License

MIT
