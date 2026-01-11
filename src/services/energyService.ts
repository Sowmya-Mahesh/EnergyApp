import axios from 'axios';
import type { UsageTrendDto, UsageByLocation, StatusDistribution } from "../data/energyData";


const API_URL = import.meta.env.VITE_API_URL;
/* 
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
}); */
const getAll = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/energy`
    );
    return data;
  } catch (error) {
    throw error; // component will handle error
  }
};
/* const getUsageTrend  = async (year:number) => {
  try {
    const { data } = await axios.get(`${API_URL}/dashboard/usage-trend?year=${year ?? 2025}`);
    return data; // returns array of EnergyRecordDto
  } catch (error) {
    throw error; // component will handle error
  }
}; */
const getUsageTrend = async (year: number = 2025): Promise<UsageTrendDto[]> => {
  const { data } = await axios.get(
    `${API_URL}/energy/dashboard/usage-trend`,
    { params: { year } }
  );
  return data;
};
const getUsageByLocation = async (year: number, month: number): Promise<UsageByLocation[]> => {
  const { data } = await axios.get(
    `${API_URL}/energy/dashboard/usage-by-location?year=${year}&month=${month}`
  );
  return data;
};

const getStatusDistribution = async (year: number, month: number): Promise<StatusDistribution[]> => {
  const { data } = await axios.get(
    `${API_URL}/energy/dashboard/status-distribution`,
    { params: { year, month } },

  );
  return data;
};
const getCurrentYearEnergyData = async (): Promise<StatusDistribution[]> => {
  const { data } = await axios.get(
    `${API_URL}/energy/dashboard/get-current-year-energy-data`
  );
  return data;
};
export const EnergyService = {
  getAll,
  getUsageTrend,
  getUsageByLocation,
  getStatusDistribution,
  getCurrentYearEnergyData
};
