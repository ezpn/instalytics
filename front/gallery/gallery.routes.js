routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('gallery', {
      url: '/gallery',
      template: require('./gallery.html'),
      controller: 'GalleryController',
      controllerAs: 'gallery',
    });
}
