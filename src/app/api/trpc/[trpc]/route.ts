import {
	type FetchCreateContextFnOptions,
	fetchRequestHandler,
} from '@trpc/server/adapters/fetch';
import {appRouter} from '../trpc-router';

const handler = async (request: Request) => fetchRequestHandler({
	endpoint: '/api/trpc',
	req: request,
	router: appRouter,
	createContext(
		opts: FetchCreateContextFnOptions,
	): Record<string, unknown> | Promise<Record<string, unknown>> {
		return {};
	},
});

export {handler as GET, handler as POST};

