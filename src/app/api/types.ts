export type VaccineOverview = {
	first?: number;
	second?: number;
	third?: number;
	date?: string;
};

export type VaccineOverviewResponse = {
	length: number;
	maxPageLimit: number;
	totalRecords: number;
	data: VaccineOverview[];
};
