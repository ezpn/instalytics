export default class ContactController {
  constructor(ContactService) {
    this.contactService = ContactService;
    this.message = {};
    this.msg = {};
  }

  reset() {
    this.msg = {};
  }

  submit(msg) {
    this.message = angular.copy(msg);
    this.contactService.post(this.message);
  }
}

ContactController.$inject = ['contactService'];
