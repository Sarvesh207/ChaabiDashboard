import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parse, parseISO, subDays } from "date-fns";
import "./Chart1.css";

const data2 = [
  {
    day: "M",
    value: 0,
  },
  {
    day: "T",
    value: 8,
  },
  {
    day: "W",
    value: 6,
  },
  {
    day: "T",
    value: 6,
  },
  {
    day: "F",
    value: 10,
  },
  {
    day: "S",
    value: 7,
  },
  {
    day: "S",
    value: 0,
  },
];

export default function Chart() {
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart data={data2}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
              <stop offset="50%" stopColor="rgba(1, 142, 66, 1)" />
              <stop offset="100%" stopColor="rgba(249, 249, 249, 1)" />
            </linearGradient>
          </defs>

          <Area
            dataKey="value"
            stroke="green"
            fill="url(#color)"
          />

          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickFormatter={(str, index) => {
              const day = data2[index % data2.length].day;
              return day;
            }}
          />

          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
