export class GoogleSearch {
  constructor($http) {
    'ngInject';

    this.$http = $http;
    this.url = 'https://www.googleapis.com/customsearch/v1/';
    this.key = 'AIzaSyDXzqnoMWBgDYa1AUezB0QrF16wlgFzCqk';
    this.cx = '013541796331457822807:_hy2nolunkk';

  }

  getImages(query) {
    return this.$http.get(this.url, {
      params: {
        key: this.key,
        cx: this.cx,
        searchType: 'image',
        q: query
      }
    })
      .then((response) => {
        return response.data.items;
      });
  }

  getFaces(query) {
    return this.$http.get(this.url, {
      params: {
        key: this.key,
        cx: this.cx,
        searchType: 'image',
        imgType: 'face',
        q: query
      }
    })
      .then((response) => {
        return response.data.items;
      });
  }
}
