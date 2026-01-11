import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { useTranslation } from "react-i18next";
import type { JSX } from "react";

const StatusChart = ({ data }: { data: any[] }) => {
  const { t } = useTranslation();
  const COLORS = ["#4f95eaff", "#8d89d7ff", "#605687ff", "#0088FE"]; // add as many colors as slices

  const formatted = data.map(d => ({
    name: t(`status.${d.status}`),
    value: d.count
  }));

  const cells: JSX.Element[] = [];
  for (let i = 0; i < formatted.length; i++) {
    cells.push(<Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />);
  }
  return (
    <div className="chart">
      <h3>{t('charts.statusDistribution')}</h3>
      <ResponsiveContainer width={400} height={250}>
        <PieChart width={400} height={400}>
          <Pie
            data={formatted}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {cells}
            {/*  {formatted.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))} */}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatusChart;
