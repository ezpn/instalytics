import moment from 'moment';

export default class LineChartAdapter {
  constructor(instagramData) {
    this.dateFormat = 'DD.MM.YYYY h:mm';

    this.data = {
      cols: this.getColumns(),
      rows: this.getRows(instagramData),
    };
  }

  getData() {
    return this.data;
  }

  getColumns() {
    return [{
        id: 'date',
        label: 'Date',
        type: 'string',
      }, {
        id: 'likes',
        label: 'Likes',
        type: 'number',
    }];
  }

  getRows(instagramData) {
    console.log('id', instagramData);
    return instagramData.map((entity) => {
      return {
        c: [{
            v: this.getDate(entity.created_time),
          }, {
            v: entity.likes.count,
        }],
      };
    });
  }

  getDate(epoch) {
    return moment(epoch * 1000).format(this.dateFormat);
  }
}
