export type EnergyRecord = {
  id: number;
  location: string;
  usageKwh: number;
  recordedAt: string;
  status: "Normal" | "High"| "Critical";
};
export interface UsageTrendDto {
  month: number; // 1–12
  usage: number;
}
export type UsageByLocation = {
  location: string;
  usage: number;
};

export type StatusDistribution = {
  status: string; // enum value 0,1,2
  count: number;
};