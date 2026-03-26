/**
 * User View
 * Handles rendering and UI updates
 * Views are responsible for displaying data to the user
 */

class UserView {
  constructor() {
    this.userContainer = document.getElementById('user-container');
    this.userForm = document.getElementById('user-form');
    this.userList = document.getElementById('user-list');
  }

  // Display a single user
  renderUser(user) {
    const userDiv = document.createElement('div');
    userDiv.className = 'user-card';
    userDiv.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>ID: ${user.id}</p>
      <button class="edit-btn" data-id="${user.id}">Edit</button>
      <button class="delete-btn" data-id="${user.id}">Delete</button>
    `;
    return userDiv;
  }

  // Display list of users
  renderUsers(users) {
    this.userList.innerHTML = '';
    users.forEach(user => {
      const userElement = this.renderUser(user);
      this.userList.appendChild(userElement);
    });
  }

  // Show user form
  showForm() {
    this.userForm.style.display = 'block';
  }

  // Hide user form
  hideForm() {
    this.userForm.style.display = 'none';
  }

  // Clear form inputs
  clearForm() {
    this.userForm.reset();
  }

  // Get form data
  getFormData() {
    return {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value
    };
  }

  // Show error message
  showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    this.userContainer.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 3000);
  }

  // Show success message
  showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    this.userContainer.appendChild(successDiv);
    setTimeout(() => successDiv.remove(), 3000);
  }
}

export default UserView;
