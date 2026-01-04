import { BarChart, Bar, XAxis, YAxis, Tooltip,Cell, ResponsiveContainer } from "recharts";

import { useTranslation } from 'react-i18next';
type Props = {
  data: { location: string; usage: number }[];
};

const UsageByLocationChart = ({ data }: Props) => {
    
  const { t } = useTranslation();
  const colors = ["#7f8dd2ff", "#6f5fdcff", "#5611b6ff"]; // amber, green, blue
  return (
     <div className="chart">
      <h3>{t('charts.usageByLocation')}</h3>

    <ResponsiveContainer  >
      <BarChart data={data}>
        <XAxis dataKey="location" />
        <YAxis />
        <Tooltip />
      <Bar dataKey="usage">
      {data.map((entry, index) => (
        <Cell key={index} fill={colors[index % colors.length]} />
      ))}
    </Bar>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default UsageByLocationChart;
