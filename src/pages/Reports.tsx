import { useEffect, useState, useMemo } from "react";
import { type EnergyRecord } from "../data/energyData";
import EnergyTable from "../components/EnergyTable";
import EnergyCard from "../components/EnergyCard";
//import FilterBar from "../components/FilterBar";
import { useTranslation } from 'react-i18next';

import { EnergyService } from '../services/energyService';
/* type SortField = "location" | "usageKwh" | "recordedAt" | "status" | "";
type SortDirection = "asc" | "desc"; */

const Reports: React.FC = () => {
  const { t } = useTranslation();
  
/*   const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");


  const [sortField, setSortField] = useState<SortField>("");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc"); */
  const [records, setRecords] = useState<EnergyRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

 
const totalPages = Math.ceil(records.length / pageSize);

const paginatedRecords = useMemo(() => {
  const startIndex = (page - 1) * pageSize;
  return records.slice(startIndex, startIndex + pageSize);
}, [records, page]);

  useEffect(() => {
    const fetchRecords = async () => {
      setLoading(true);
      try {
        const data = await EnergyService.getAll();
        
        setRecords(data);
        }catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Error fetching data");
        }
      }finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, []);
  // Filter data
  /*  const filteredData: EnergyRecord[] = useMemo(() => {
     let data = records.filter((item) => {
    const recordDate = new Date(item.recordedAt);
    const recordMonth = recordDate.getMonth() + 1; // getMonth() returns 0-11, so +1
  
    const recordYear = recordDate.getFullYear();
      return (
        (month === 0 || recordMonth  === month)
        && (year === 0 ||  recordYear  === year) &&
        (status === "" || item.status === status) &&
        (location === "" || item.location === location)
      );
    }); 
  
    if (sortField) {
      data = [...paginatedRecords].sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];
        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
        }
        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortDirection === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }
        return 0;
      });
    }

    return data;
  }, [records, month, year, status, location, sortField, sortDirection]);
  */
  // Summary metrics
 /*  const totalUsage = filteredData.reduce((acc, item) => acc + item.usageKwh, 0);
  const highCount = filteredData.filter((item) => item.status === "High").length;
 */
  const isMobile = window.innerWidth < 768;
/* 
  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  }; */ 
   const handlePage = (page: number) => {
    setPage(page);
  };
  const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};
  return (
    <div>
      <h2>{t('nav.reports')}</h2>

      {/* Summary */}
     {/*  <div className="summary-metrics">
        <span>{t('dashboard.totalLocations')}: {filteredData.length}</span>
        <span>{t('dashboard.totalUsage')}: {totalUsage} kWh</span>
        <span>{t('dashboard.highUsage')}: {highCount}</span>
      </div> */}

      {/* Filters */}
   {/*    <FilterBar
       month={month}
        year={year}
        status={status}
        location={location}
        onMonthChange={setMonth}
        onYearChange={setYear}
        onStatusChange={setStatus}
        onLocationChange={setLocation}
        locations={[...new Set(records.map(e => e.location))]} // unique locations
      />
 */}
      {/* Table or Cards */}
      {isMobile ? (
        paginatedRecords.map((item) => <EnergyCard key={item.id} record={item} />)
      ) : (
       <div className="table-wrapper">
         <EnergyTable data={paginatedRecords} loading={loading} totalPages={totalPages} page={page} handlePage={handlePage} error={error} formatDate={formatDate} />
         
         </div>
      )} 
    </div>
  );
};



export default Reports;
