"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, LineChart, Line } from "recharts";

interface SalesChartProps {
  data: number[];
  chartType: "bar" | "line" | "pie";
}

const SalesChart: React.FC<SalesChartProps> = ({ data, chartType }) => {
  const chartData = data.map((value, index) => ({ month: `M${index + 1}`, value }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A", "#3366AA"];

  switch (chartType) {
    case "bar":
      return (
        <BarChart width={500} height={300} data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      );
    case "line":
      return (
        <LineChart width={500} height={300} data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      );
    case "pie":
      return (
        <PieChart width={400} height={400}>
          <Pie data={chartData} dataKey="value" nameKey="month" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      );
    default:
      return null;
  }
};

export default SalesChart;
