"use client";

import { useState } from "react";
import SalesChart from "@/app/components/molecules/SalesChart";
import { salesData } from "@/data/salesData";

export default function Dashboard() {
  const [year, setYear] = useState<2022 | 2023 | 2024>(2024);
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Sales Dashboard</h1>

      <div className="flex gap-4 mb-6">
        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value) as 2022 | 2023 | 2024)}
          className="border rounded p-2"
        >
          <option value={2024}>2024</option>
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
        </select>

        <button onClick={() => setChartType("bar")} className="border px-3 py-2 rounded">
          Bar
        </button>
        <button onClick={() => setChartType("line")} className="border px-3 py-2 rounded">
          Line
        </button>
        <button onClick={() => setChartType("pie")} className="border px-3 py-2 rounded">
          Pie
        </button>
      </div>

      <SalesChart data={salesData[year]} chartType={chartType} />
    </div>
  );
}
