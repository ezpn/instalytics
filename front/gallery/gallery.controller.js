import angular from 'angular';

export default class GalleryController {
  constructor(loginService, chartService, gallery) {
    this.pictures = [];
    this.page = 0;
    this.isLastPage = false;
    this.isLoading = true;
    this.loginService = loginService;
    this.galleryService = gallery;
    this.chartService = chartService;
    this.likeChart = {};
    this.tagChart = {};
    this.initializePictures();
    this.checkAuth();
  }

  checkAuth() {
    this.loginService.authenticate()
      .then(() => this.updatePhotos());
  }

  initializePictures() {
    const defaultPicAmount = 10;
    const picture = {
      images: {
        thumbnail: {
          url: null
        }
      }
    };

    while (this.pictures.length != defaultPicAmount) {
      this.pictures.push(angular.copy(picture));
    }
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
    this.isLoading = true;
    return this.getPhotos(page)
      .then((media) => {
        if (media.data.pagination.next_max_id == null && media.data.pagination.cursor == null) {
          this.isLastPage = true;
        } else {
          this.isLastPage = false;
        }

        this.pictures = media.data.data;
        this.isLoading = false;

        return media;
      })
      .then((media) => {
        this.likeChart = this.chartService.getLikeChart(media.data.data);
        this.tagChart = this.chartService.getTagChart(media.data.data);
      })
      .catch((err) => {
        console.log('error', err);
        if (err.status === 401) {
          this.loginService.redirectToLogin();
        }
      });
  }

  getPhotos(page) {
    return this.galleryService.getAll({ page });
  }
}

GalleryController.$inject = ['loginService', 'chartService', 'galleryService'];
