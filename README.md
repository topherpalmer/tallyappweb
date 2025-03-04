# School Sports Admin Panel

A React.js admin backend for managing schools, teams, and sports data using AWS Amplify and AppSync.

## Local Development Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Copy the environment variables template:
```bash
cp .env.example .env
```

4. Update the `.env` file with your AWS Amplify configuration values from your Amplify environment.

5. If you haven't already, install and configure the Amplify CLI:
```bash
npm install -g @aws-amplify/cli
amplify configure
```

6. Initialize Amplify in the project (if pulling existing environment):
```bash
amplify pull --appId YOUR_APP_ID --envName YOUR_ENV_NAME
```

7. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

## Project Structure

- `client/src/` - React frontend code
  - `components/` - Reusable React components
  - `pages/` - Page components and routes
  - `lib/` - Utility functions and configuration
- `server/` - Express backend code
- `shared/` - Shared types and schemas
- `migrations/` - Database migrations

## Features

- School management
- Team management
- Sports organization
- League administration
- User authentication via AWS Cognito
- Data persistence with AWS AppSync

## AWS Configuration

The application uses several AWS services through Amplify:

- **Authentication**: AWS Cognito for user management
- **API**: AppSync for GraphQL API
- **Storage**: DynamoDB for data persistence

Make sure your Amplify environment is properly configured with the necessary services.