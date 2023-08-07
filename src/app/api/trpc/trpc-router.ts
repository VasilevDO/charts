import {initTRPC} from '@trpc/server';
import {z} from 'zod';

const t = initTRPC.create();

export const appRouter = t.router({
	getTest: t.procedure.input(z.string()).query(req => {
		const {input} = req;

		return input;
	}),
});

export type AppRouter = typeof appRouter;
