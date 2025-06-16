function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;

  this.changePassword = function(newPassword) {
    this.password = newPassword;
  };

  this.getDetails = function() {
    return `Username: ${this.username}, Email: ${this.email}`;
  };
}
