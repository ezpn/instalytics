import LikeChart from './like-chart';
import TagChart from './tag-chart';

export default class ChartService {
  getLikeChart(data) {
    const likeChart = new LikeChart(data);

    return likeChart.getChart();
  }

  getTagChart(data) {
    const tagChart = new TagChart(data);

    return tagChart.getChart();
  }
}
