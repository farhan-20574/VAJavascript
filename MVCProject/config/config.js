/**
 * Application Configuration
 * Centralized configuration for the application
 */

const config = {
  // Environment
  environment: process.env.NODE_ENV || 'development',

  // API Configuration
  api: {
    baseURL: process.env.API_URL || 'https://api.example.com',
    timeout: 5000
  },

  // Application Settings
  app: {
    name: 'MVC Learning App',
    version: '1.0.0',
    debug: true
  },

  // Feature Flags
  features: {
    userManagement: true,
    analytics: false,
    darkMode: true
  },

  // API Endpoints
  endpoints: {
    users: '/users',
    posts: '/posts',
    comments: '/comments'
  },

  // Database configuration (if applicable)
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    name: process.env.DB_NAME || 'mvc_app'
  }
};

export default config;
