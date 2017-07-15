import LikeChartAdapter from './like-chart.adapter';

export default class LikeChart {
  constructor(instagramData) {
    const lineChartAdapter = new LikeChartAdapter(instagramData);

    this.chart = {
      data: lineChartAdapter.getData(),
      type: 'LineChart',
      displayed: false,
      options: {
        title: 'Likes per item',
        colors: ['#FF00FF'],
        defaultColors: ['#FF00FF'],
        isStacked: true,
        fill: 20,
        displayExactValues: true,
        vAxis: {
          title: 'Likes',
        },
        hAxis: {
          title: 'Date',
        }
      },
      view: [0, 1],
    };
  }

  getChart() {
    return this.chart;
  }
}
