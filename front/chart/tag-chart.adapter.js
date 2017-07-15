import _ from 'lodash';

export default class TagChartAdapter {
  constructor(instagramData) {
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
        id: 'hashtag',
        label: 'Hashtag',
        type: 'string',
      }, {
        id: 'popularity',
        label: 'Popularity',
        type: 'number',
    }];
  }

  getRows(instagramData) {
    const tags = {};
    instagramData.forEach((entity) => {
      entity.tags.forEach((tag) => {
        if (tags[tag] == null) {
          tags[tag] = entity.likes.count;
        } else {
          tags[tag] = (tags[tag] + entity.likes.count) / 2;
        }
      });
    });

    const slicedTags = _(tags).toPairs()
      .sortBy(([key, value]) => value)
      .take(10)
      .fromPairs()
      .value();

    console.log('st1', slicedTags);

    return Object.keys(slicedTags).map((tag) => {
      return {
        c: [{
            v: tag,
          }, {
            v: tags[tag]
        }],
      };
    });
  }
}
