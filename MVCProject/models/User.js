/**
 * User Model
 * Represents the data structure for a User
 * Models define the data and business logic
 */

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }

  // Methods to manage user data
  updateName(newName) {
    this.name = newName;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }

  getInfo() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt
    };
  }

  isValid() {
    return this.name && this.email && this.email.includes('@');
  }
}

export default User;
