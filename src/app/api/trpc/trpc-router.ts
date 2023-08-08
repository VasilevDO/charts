import clientPromise from '@/lib/mongodb';
import {initTRPC} from '@trpc/server';
import axios from 'axios';
import {z} from 'zod';
import {COVID_NEW_CASES_URL, COVID_VACCINE_OVERVIEW_LATEST_URL, COVID_VACCINE_OVERVIEW_URL, MONGODB_COLLECTION, MONGODB_NAME} from '../consts';
import {type ChartDocument, type NewCasesResponse, type VaccineOverviewResponse} from '../types';

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
	getChart: t.procedure.input(z.string()).query(async req => {
		const client = await clientPromise;

		const db = client.db(MONGODB_NAME);

		const chart = await db.collection<ChartDocument>(MONGODB_COLLECTION).findOne({name: req.input});

		return chart;
	}),
	updateChart: t.procedure.input(z.object({name: z.string(), isFavorite: z.boolean()})).mutation(async req => {
		const {input: {name, isFavorite}} = req;

		const client = await clientPromise;

		const db = client.db(MONGODB_NAME);

		const updateResponse = await db.collection<ChartDocument>(MONGODB_COLLECTION).updateOne({name}, {$set: {
			isFavorite,
		}});

		return Boolean(updateResponse.modifiedCount);
	}),
});

export type AppRouter = typeof appRouter;
