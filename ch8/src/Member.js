var Member = function(firstName, lastName) {
  if (firstName === undefined || lastName === undefined) {
    throw new Error('firstNameかlastNameが足りません.');
  }
  this.firstName = firstName;
  this.lastName = lastName;
};

Member.prototype.getName = function() {
  return this.lastName + ' ' + this.firstName;
};

Member.prototype.toString = function() {
  return this.lastName + ' ' + this.firstName;
}
