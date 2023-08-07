type CovidBaseResponse<T> = {
	length: number;
	maxPageLimit: number;
	totalRecords: number;
	data: T[];
};

type VaccineOverview = {
	first?: number;
	second?: number;
	third?: number;
	date?: string;
};

type NewCasesOverview = {
	areaName: string;
	newCases: number;
	date: string;
};

export type VaccineOverviewResponse = CovidBaseResponse<VaccineOverview>;
export type NewCasesResponse = CovidBaseResponse<NewCasesOverview>;
