export default class Validator {
  static ValidateUsername(username) {
    return !/[^\w-]/.test(username)
           && !/^[\d-_]|[\d-_]$/.test(username)
           && !/\d{4}/.test(username);
  }
}
