
type KPICardProps = {
  label: string;
  value: number | string;
};

const KpiCard = ({ label, value }: KPICardProps) => (
  <div className="kpi-card">
    <p className="kpi-label">{label}</p>
    <h2 className="kpi-value">{value}</h2>
  </div>
);

export default KpiCard;