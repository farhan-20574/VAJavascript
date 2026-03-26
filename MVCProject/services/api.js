/**
 * API Service
 * Handles external API calls and data fetching
 * Services are reusable components for API/data operations
 */

class APIService {
  constructor(baseURL = 'https://api.example.com') {
    this.baseURL = baseURL;
  }

  // Generic fetch method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Fetch all users
  async fetchUsers() {
    return this.request('/users');
  }

  // Fetch single user
  async fetchUser(id) {
    return this.request(`/users/${id}`);
  }

  // Create new user
  async createUser(userData) {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  }

  // Update user
  async updateUser(id, userData) {
    return this.request(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData)
    });
  }

  // Delete user
  async deleteUser(id) {
    return this.request(`/users/${id}`, {
      method: 'DELETE'
    });
  }
}

export default APIService;
