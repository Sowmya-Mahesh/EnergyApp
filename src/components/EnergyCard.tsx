import type { EnergyRecord } from "../data/energyData";

type Props = {
  record: EnergyRecord;
};

const EnergyCard = ({ record }: Props) => {
  return (
    <div className="energy-card">
      <h3>{record.location}</h3>
      <p><strong>Usage:</strong> {record.usageKwh} kWh</p>
      <p><strong>Month:</strong> {record.recordedAt}</p>
      <span className={`badge ${record.status}`}>
        {record.status.toUpperCase()}
      </span>
    </div>
  );
};

export default EnergyCard;
