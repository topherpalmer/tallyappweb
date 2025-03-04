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
npx webpack serve --config webpack.dev.js
```

The application will be available at `http://localhost:5000`.

## Project Structure

- `client/src/` - React frontend code
  - `components/` - Reusable React components
  - `pages/` - Page components and routes
  - `lib/` - Utility functions and configuration
- `shared/` - Shared types and schemas

## Build Configuration

The project uses Webpack for bundling with the following configuration files:
- `webpack.common.js` - Shared configuration
- `webpack.dev.js` - Development-specific settings
- `webpack.prod.js` - Production build settings

The configurations include:
- TypeScript and React support via Babel
- CSS processing with PostCSS and Tailwind
- Environment variable handling with dotenv-webpack
- Hot Module Replacement in development

## AWS Configuration

The application uses several AWS services through Amplify:

- **Authentication**: AWS Cognito for user management
- **API**: AppSync for GraphQL API
- **Storage**: DataStore for local data persistence and cloud synchronization

Make sure your Amplify environment is properly configured with the necessary services.