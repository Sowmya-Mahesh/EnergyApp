import {
    Area,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EnergyService  } from '../services/energyService';
import { short_months as enMonths } from "../i18n/locales/en.json";
import { short_months as isMonths } from "../i18n/locales/is.json";
import type { UsageTrendDto } from "../data/energyData";

const UsageTrendChart = () => {
  const { i18n, t } = useTranslation();
  const [data, setData] = useState<any[]>([]);

 
useEffect(() => {
  EnergyService.getUsageTrend(2026).then((res: UsageTrendDto[]) => {
    const monthNames = i18n.language === "is" ? isMonths : enMonths;

    const formatted = res.map((r) => ({
      month: monthNames[r.month - 1], // safe & predictable
      usage: r.usage,
    }));

    setData(formatted);
  });
}, [i18n.language]);

  return (
    <div  className="chart" >
      <h3>{t('charts.usageTrend')}</h3>

<ResponsiveContainer>
  <AreaChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Area
      type="monotone"
      dataKey="usage"
      stroke="#f6234dff"
      fill="rgba(224, 121, 133, 0.2)"
      dot={{ fill: "#ec707eff", r: 5 }}
      activeDot={{ r: 8 }}
    />
  </AreaChart>
</ResponsiveContainer>
    </div>
  );
};

export default UsageTrendChart;
