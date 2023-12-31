'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {httpBatchLink, getFetch, loggerLink} from '@trpc/client';
import {type PropsWithChildren, useState} from 'react';
import {trpc} from './trpc';

export default function TrpcProvider({
	children,
}: PropsWithChildren) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {queries: {staleTime: 5000}},
			}),
	);

	const url = process.env.NEXT_PUBLIC_VERCEL_URL
		? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc/`
		: 'http://localhost:3000/api/trpc/';

	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url,
					async fetch(input, init?) {
						const fetch = getFetch();
						return fetch(input, {
							...init,
							credentials: 'include',
						});
					},
				}),
			],
		}),
	);
	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</trpc.Provider>
	);
}
