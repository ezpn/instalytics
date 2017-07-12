export default class GalleryController {
  constructor(loginService, gallery) {
    this.pictures = [];
    this.page = 0;
    this.galleryService = gallery;

    loginService.authenticate()
      .then(() => this.updatePhotos());
  }

  next() {
    this.page++;

    this.updatePhotos();
  }

  prev() {
    if (this.page > 0) {
      this.page--;

      this.updatePhotos();
    }
  }

  updatePhotos() {
    this.getPhotos()
      .then((media) => {
        this.pictures = media.data.data;
      });
  }

  getPhotos() {
    return this.galleryService.getAll({ page: this.page });
  }
}

GalleryController.$inject = ['loginService', 'galleryService'];
