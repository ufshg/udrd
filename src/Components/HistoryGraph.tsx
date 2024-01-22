import { convertNumTier } from "src/utils/tier";
import { TierRange } from "../@types/tier";
import { getRandomInt } from "src/utils/number";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const getExample = (): { x: Date; y: TierRange; id: number }[] => {
  // TODO: Replace This with AJAX Logic
  const exampleData = [];
  let curr_date = new Date();
  let curr_tier: TierRange = 10;
  for (let idx = 0; idx < 20; idx++) {
    curr_date = new Date(curr_date.getTime() + getRandomInt(2, 45) * 60000);
    curr_tier += (-1) ** getRandomInt(0, 2);
    if (curr_tier < 0) {
      curr_tier = 0;
    }
    if (curr_tier > 29) {
      curr_tier = 29;
    }
    exampleData.push({
      x: curr_date,
      y: curr_tier as TierRange,
      id: getRandomInt(1, 32000),
    });
  }
  return exampleData;
};

const data = getExample();

export const HistoryGraph = () => {
  const series = [
    {
      name: "푼 문제",
      data: data,
    },
  ];

  const options: ApexOptions = {
    chart: {
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
      events: {
        markerClick: (_event, _chartContext, config) => {
          console.log(data[config.dataPointIndex].id);
        },
      },
    },
    stroke: {
      curve: "straight",
      colors: ["#000"],
    },
    title: {
      text: "문제 티어",
      align: "left",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      title: {
        text: "Tier",
        rotate: 0,
      },
      forceNiceScale: true,
      labels: {
        formatter: convertNumTier,
      },
    },
    annotations: {
      yaxis: [
        "#ad5600",
        "#435f7a",
        "#ec9a00",
        "#27e2a4",
        "#00b4fc",
        "#ff0062",
      ].map((color, idx) => ({
        label: {
          text: "",
        },
        y: idx * 5,
        y2: (idx + 1) * 5,
        fillColor: color,
      })),
      points: data.map((item) => ({
        x: item.x.getTime(),
        y: item.y,
        label: {
          text: `${convertNumTier(item.y)} ${item.id}`,
        },
      })),
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="line" />
    </div>
  );
};
