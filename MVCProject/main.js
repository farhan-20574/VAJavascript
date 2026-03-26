/**
 * Main Application Entry Point
 * Initializes the MVC application
 */

import User from './models/User.js';
import UserView from './views/UserView.js';
import UserController from './controllers/UserController.js';
import APIService from './services/api.js';
import Logger from './utils/logger.js';
import config from './config/config.js';

// Initialize logger
const logger = new Logger('[UserApp]');

logger.log('Application started', config.app);

// Initialize MVC components
const userView = new UserView();
const apiService = new APIService(config.api.baseURL);
const userController = new UserController(User, userView, apiService);

logger.log('MVC components initialized');

// Optional: Load users from API
// userController.loadUsers().catch(error => {
//   logger.error('Failed to load users:', error);
// });

// Example: Add a sample user on page load
document.addEventListener('DOMContentLoaded', () => {
  logger.log('DOM Content Loaded');
  console.log('MVC Application is ready!');
  console.log('Try adding users using the form above.');
});
