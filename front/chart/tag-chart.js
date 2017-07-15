import TagChartAdapter from './tag-chart.adapter';

export default class TagChart {
  constructor(instagramData) {
    const tagChartAdapter = new TagChartAdapter(instagramData);

    this.chart = {
      data: tagChartAdapter.getData(),
      type: 'PieChart',
      options: {
        title: 'Popular tags',
      },
    };
  }

  getChart() {
    return this.chart;
  }
}
