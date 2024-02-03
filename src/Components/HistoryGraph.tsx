import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import type { TierRange } from "src/@types/tier";
import { convertNumTier } from "src/utils/tier";

export type HistoryGraphProps = {
  data: { x: Date; y: TierRange; id: number }[];
};

export const HistoryGraph = ({ data }: HistoryGraphProps) => {
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
      min: Math.min(...data.map((item) => item.y)),
      max: Math.max(...data.map((item) => item.y)),
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
    <div className="chart-container chart-container-style">
      <Chart options={options} series={series} type="line" />
    </div>
  );
};
