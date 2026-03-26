/**
 * User Controller
 * Handles user interactions and coordinates between Model and View
 * Controllers contain the business logic and event handlers
 */

class UserController {
  constructor(userModel, userView, userService) {
    this.userModel = userModel;
    this.userView = userView;
    this.userService = userService;
    this.users = [];

    this.initEventListeners();
  }

  // Initialize event listeners
  initEventListeners() {
    // Listen for form submission
    document.getElementById('user-form')?.addEventListener('submit', (e) => this.handleAddUser(e));

    // Listen for edit and delete buttons
    document.getElementById('user-list')?.addEventListener('click', (e) => {
      if (e.target.classList.contains('edit-btn')) {
        this.handleEdit(e.target.dataset.id);
      }
      if (e.target.classList.contains('delete-btn')) {
        this.handleDelete(e.target.dataset.id);
      }
    });
  }

  // Handle adding a new user
  handleAddUser(e) {
    e.preventDefault();
    const formData = this.userView.getFormData();

    if (!formData.name || !formData.email) {
      this.userView.showError('Please fill in all fields');
      return;
    }

    const newUser = new this.userModel(
      Date.now(),
      formData.name,
      formData.email
    );

    if (!newUser.isValid()) {
      this.userView.showError('Invalid user data');
      return;
    }

    this.users.push(newUser);
    this.userView.renderUsers(this.users);
    this.userView.clearForm();
    this.userView.showSuccess('User added successfully!');
  }

  // Handle editing a user
  handleEdit(userId) {
    const user = this.users.find(u => u.id == userId);
    if (user) {
      const newName = prompt('Enter new name:', user.name);
      if (newName) {
        user.updateName(newName);
        this.userView.renderUsers(this.users);
        this.userView.showSuccess('User updated!');
      }
    }
  }

  // Handle deleting a user
  handleDelete(userId) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.users = this.users.filter(u => u.id != userId);
      this.userView.renderUsers(this.users);
      this.userView.showSuccess('User deleted!');
    }
  }

  // Load users from service
  async loadUsers() {
    try {
      const users = await this.userService.fetchUsers();
      this.users = users;
      this.userView.renderUsers(this.users);
    } catch (error) {
      this.userView.showError('Failed to load users');
    }
  }
}

export default UserController;
