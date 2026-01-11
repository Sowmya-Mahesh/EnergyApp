import type { EnergyRecord } from "../data/energyData";
import { useTranslation } from 'react-i18next';

type Props = {
  data: EnergyRecord[];
  //onSort: (field: "location" | "usageKwh" | "recordedAt" | "status") => void;
  //sortField: string;
  //sortDirection: "asc" | "desc";
  loading: boolean;
  error: string;

};

const EnergyTable = ({ data, formatDate }: Props) => {
  const { t } = useTranslation();
  /*  const renderSortArrow = (field: string) => {
     if (sortField !== field) return "↕";
     return sortDirection === "asc" ? "↑" : "↓";
   };
  */

  return (
    <>
      <table className="energy-table">
        <thead>
          {/*  <tr>
          <th onClick={() => onSort("location")}>{t('table.location')} {renderSortArrow("location")}</th>
          <th onClick={() => onSort("usageKwh")}>{t('table.usage')} {renderSortArrow("usageKwh")}</th>
          <th onClick={() => onSort("recordedAt")}>{t('table.recordedDate')}{renderSortArrow("recordedDate")}</th>
          <th onClick={() => onSort("status")}>{t('table.status')} {renderSortArrow("status")}</th>
        </tr> */}
          <tr>
            <th>{t('table.location')} </th>
            <th>{t('table.usage')}</th>
            <th>{t('table.recordedDate')}</th>
            <th>{t('table.status')} </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (

            <tr key={row.id}>
              <td>{row.location}</td>
              <td>{row.usageKwh}</td>
              <td>{formatDate(row.recordedAt)}</td>
              <td className={row.status}>{t(`status.${row.status}`)}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </>
  );
};

export default EnergyTable;
