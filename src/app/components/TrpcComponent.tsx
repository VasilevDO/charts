'use client';

import {trpc} from '@/lib/trpc';

export default function TrpcComponent() {
	const {data, isLoading} = trpc.getTest.useQuery('response');

	return (
		<h2>{isLoading ? 'Loading' : data ?? 'Reuqest fallback'}</h2>
	);
}
