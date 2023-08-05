import Highcharts, { map } from "highcharts";

const engagementMessageOverTimeChartOptions = (messageCountList, channels) => {
  const channelIds = new Map();
  channels.map((channel) => channelIds.set(channel.id, channel.label));

  const messagesCount = new Map();
  messageCountList.map((message) => {
    let val = messagesCount.get(message.channelId) || [];
    messagesCount.set(message.channelId, [
      {
        x: new Date(message.timeBucket).getTime(),
        y: parseInt(message.count),
      },
      ...val,
    ]);
  });

  const series = [];
  messagesCount.forEach((value, key) => {
    if (value.length > 1) {
      let channelName = channelIds.get(key);
      series.push({ name: channelName, data: value });
    }
  });

  const options = {
    title: {
      text: "Engagement Messages Over Time",
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "Message Count",
      },
    },
    tooltip: {
      formatter: function () {
        return `${this.series.name}<br/>
        ${this.y} messages on ${Highcharts.dateFormat("%e %b", this.x)}`;
      },
    },
    series,
  };

  return options;
};

const engagementHelper = {
  engagementMessageOverTimeChartOptions,
};

export default engagementHelper;
