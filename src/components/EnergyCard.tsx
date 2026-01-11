import type { EnergyRecord } from "../data/energyData";

type Props = {
  record: EnergyRecord;
  formatDate: (date: string) => string;
};

const EnergyCard = ({ record, formatDate }: Props) => {
  return (
    <div className="energy-card">
      <h3>{record.location}</h3>
      <p><strong>Usage:</strong> {record.usageKwh} kWh</p>
      <p><strong>Month:</strong> {formatDate(record.recordedAt)}</p>
      <span className={`badge ${record.status}`}>
        {record.status.toUpperCase()}
      </span>
    </div>
  );
};

export default EnergyCard;
