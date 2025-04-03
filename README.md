# CodeContest Hub

## Overview

CodeContest Hub is a centralized platform that aggregates competitive programming contests from various platforms, allowing users to:

- View all programming contests in one place
- Filter contests by platform
- Browse past and upcoming contests
- Register their emails for future contest updates

## Features

- **Platform Filter:** Easily filter contests based on coding platforms such as Codeforces, LeetCode, AtCoder, etc.
- **Upcoming & Past Contests:** View a list of upcoming contests along with past contest details.
- **Email Registration:** Users can subscribe with their email to receive notifications about upcoming contests.
- **Real-time Updates:** Fetch the latest contests dynamically from multiple sources.

## Tech Stack

- **Frontend:** Next.js, TypeScript
- **Backend:** Drizzle ORM, Nodemailer
- **Database:** Neon DB Postgres
- **Deployment:** Vercel

## Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/codecontest-hub.git
   cd codecontest-hub
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables in a `.env` file:

   ```ini
   SMTP_USER=<your-email>
   SMTP_PASS=<your-app-password>
   DATABASE_URL=<your-database-url>
   API_KEY=<your-api-key>
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

5. Access the application at `http://localhost:3000`.

## Usage

1. Navigate to the homepage to view upcoming and past contests.
2. Use the filter option to view contests from specific platforms.
3. Register your email to receive future contest notifications.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`feature-branch-name`).
3. Make your changes and commit them.
4. Push to your fork and submit a Pull Request.

## License

This project is licensed under the **MIT License**.
