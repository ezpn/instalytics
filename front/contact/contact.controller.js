export default class ContactController {
  constructor() {
    this.message = {};
    this.msg = {};
  }

  reset() {
    this.msg = {};
  }

  submit(msg) {
    this.message = angular.copy(msg);
    console.log('Submitted form', this.message);
  }
}
