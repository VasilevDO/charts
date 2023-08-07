import {initTRPC} from '@trpc/server';
import axios from 'axios';
import {z} from 'zod';
import {COVID_NEW_CASES_URL, COVID_VACCINE_OVERVIEW_LATEST_URL, COVID_VACCINE_OVERVIEW_URL} from '../consts';
import {type NewCasesResponse, type VaccineOverviewResponse} from '../types';

const t = initTRPC.create();

export const appRouter = t.router({
	getVaccineOverview: t.procedure.input(z.object({latestOnly: z.boolean().optional()})).query(async req => {
		const {input: {latestOnly}} = req;

		const response = await axios.get<VaccineOverviewResponse>(latestOnly ? COVID_VACCINE_OVERVIEW_LATEST_URL : COVID_VACCINE_OVERVIEW_URL);

		return response.data.data[0];
	}),
	getNewCases: t.procedure.query(async () => {
		const response = await axios.get<NewCasesResponse>(COVID_NEW_CASES_URL);

		return response.data;
	}),
});

export type AppRouter = typeof appRouter;
