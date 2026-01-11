import { BarChart, Bar, XAxis, YAxis, Tooltip,Cell, ResponsiveContainer } from "recharts";

import { useTranslation } from 'react-i18next';
import type { JSX } from "react";
type Props = {
  data: { location: string; usage: number }[];
};

const UsageByLocationChart = ({ data }: Props) => {
    
  const { t } = useTranslation();
  const colors = ["#7f8dd2ff", "#6f5fdcff", "#5611b6ff"]; // amber, green, blue
  const cells: JSX.Element[] = [];
for (let i = 0; i < data.length; i++) {
  cells.push(<Cell key={`cell-${i}`} fill={colors[i % colors.length]} />);
}
  return (
     <div className="chart">
      <h3 style={{margin: "1rem"}}>{t('charts.usageByLocation')}</h3>

    <ResponsiveContainer height="90%" >
      <BarChart data={data}>
        <XAxis dataKey="location" />
        <YAxis />
        <Tooltip />
      <Bar dataKey="usage">
      {cells}
    </Bar>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default UsageByLocationChart;
