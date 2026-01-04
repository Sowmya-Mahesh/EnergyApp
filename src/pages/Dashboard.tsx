import UsageTrendChart from "../components/UsageTrendChart";
import UsageByLocationChart from "../components/UsageByLocationChart";
import KpiCard from "../components/KpiCard";
import StatusChart from "../components/StatusChart";
import { useEffect, useState, useMemo } from 'react';
import { EnergyService  } from '../services/energyService';
//import type { UsageByLocation,StatusDistribution } from "../data/energyData";

import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<any[]>([]);
  const [statusData, setStatusData] = useState<any[]>([]);
  const [kpiData, setKpiData] = useState<any[]>([]);

 
useEffect(() => {
  const year = 2026;
  const month = 12;

  Promise.all([
    EnergyService.getUsageByLocation(year, month),
    EnergyService.getStatusDistribution(year, month),
    EnergyService.getCurrentYearEnergyData(),
  ])
    .then(([usageRes, statusRes,kpiRes]) => {
      setData(usageRes);
      setStatusData(statusRes);
      setKpiData(kpiRes);
    })
    .catch(err => {
      console.error(err);
    });
}, []);

const kpis = useMemo(() => {
  if (!kpiData.length) {
    return {
      total: 0,
      average: 0,
      max: 0,
      count: 0,
    };
  }
  const values = kpiData.map(d => d.usageKwh);
  const total = values.reduce((sum, v) => sum + v, 0);
  const max = Math.max(...values);
  const average = total / values.length;

  return {
    total,
    average,
    max,
    count: values.length,
  };
}, [kpiData]);

     return (
    <>
   <div className="kpi-bar-row">
  <div className="kpi-section kpi-grid">
  <KpiCard label={t('kpiCards.totalUsage')} value={kpis.total.toFixed(2)} />
  <KpiCard label={t('kpiCards.averageUsage')}  value={kpis.average.toFixed(2)} />
  <KpiCard label={t('kpiCards.highestUsage')}  value={kpis.max.toFixed(2)} />
  <KpiCard label={t('kpiCards.totalRecords')}  value={kpis.count} />
</div>
<div className="bar-section">
   <UsageByLocationChart data={data} />
   
  </div>
</div> 
<div className="dashboard-grid">
 
      <div className="grid-3 chart-card">
     <StatusChart  data={statusData} />
      </div>
        <div className="grid-2 chart-card">
      <UsageTrendChart />
      </div>
    </div>
    </>
  );


};

export default Dashboard;
