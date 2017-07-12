export default class GalleryController {
  constructor(loginService, gallery) {
    this.pictures = [];
    this.page = 0;
    this.isLastPage = false;
    this.galleryService = gallery;

    loginService.authenticate()
      .then(() => this.updatePhotos());
  }

  next() {
    let page = this.page;
    page++;

    this.updatePhotos(page)
      .then(() => this.page++);
  }

  prev() {
    if (this.page > 0) {
      let page = this.page;
      page--;
      this.updatePhotos(page)
        .then(() => this.page--);
    }
  }

  updatePhotos(page) {
    return this.getPhotos(page)
      .then((media) => {
        if (media.data.pagination.next_max_id == null && media.data.pagination.cursor == null) {
          this.isLastPage = true;
        } else {
          this.isLastPage = false;
        }

        this.pictures = media.data.data;
      });
  }

  getPhotos(page) {
    return this.galleryService.getAll({ page });
  }
}

GalleryController.$inject = ['loginService', 'galleryService'];
