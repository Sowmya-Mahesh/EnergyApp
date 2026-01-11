import type { ChangeEvent } from "react";
//import type { EnergyRecord } from "../data/energyData";
import { useTranslation } from 'react-i18next';

type Props = {
  month: number;
  year: number;
  status: string;
  location: string;
  onMonthChange: (value: number) => void;
  onYearChange: (value: number) => void;
  onStatusChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  locations: string[];
};

const FilterBar = ({ month, year, status, location, locations, onMonthChange, onYearChange, onStatusChange, onLocationChange }: Props) => {

  const { t } = useTranslation();

  //const statuses: EnergyRecord['status'][] = ["Normal", "High", "Critical"];
  /* const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]; */
  const months = t('months', { returnObjects: true }) as string[];
  return (
    <div className="filter-bar">
      <select value={month} onChange={(e: ChangeEvent<HTMLSelectElement>) => onMonthChange(Number(e.target.value))}>
        <option value="">{t('filters.selectMonth')}</option>
        {months.map((m, i) => (
          <option key={i + 1} value={i + 1}>{m}</option>
        ))}
      </select>
      <select value={year} onChange={(e: ChangeEvent<HTMLSelectElement>) => onYearChange(Number(e.target.value))}>
        <option value="">{t('filters.selectYear')}</option>
        {Array.from({ length: 10 }, (_, i) => {
          const y = new Date().getFullYear() - i;
          return <option key={y} value={y}>{y}</option>;
        })}
      </select>

      <select value={status} onChange={(e: ChangeEvent<HTMLSelectElement>) => onStatusChange(e.target.value)}>
        <option value="">{t('filters.selectStatus')}</option>
        <option key={t('status.Normal')} value="Normal">
          {t('status.Normal')}
        </option>
        <option key={t('status.High')} value="High">
          {t('status.High')}
        </option>
        <option key={t('status.Critical')} value="Critical">
          {t('status.Critical')}
        </option>
      </select>

      <select value={location} onChange={(e: ChangeEvent<HTMLSelectElement>) => onLocationChange(e.target.value)}>
        <option value="">{t('filters.selectLocation')}</option>
        {locations.map(loc => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
