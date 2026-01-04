import type { EnergyRecord } from "../data/energyData";

type Props = {
  data: EnergyRecord[];
};

const EnergyTable = ({ data }: Props) => {
  return (
    <table className="energy-table">
      <thead>
        <tr>
          <th>Location</th>
          <th>Usage (kWh)</th>
          <th>Month</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.location}</td>
            <td>{row.usageKwh}</td>
            <td></td>
            <td className={row.status}>{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EnergyTable;
