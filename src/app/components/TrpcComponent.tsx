'use client';

import {trpc} from '@/lib/trpc';
import {Card, Spin} from 'antd';

export default function TrpcComponent() {
	const {data, isLoading} = trpc.getTest.useQuery('response');

	return (
		<Card style={{height: '100px', width: '200px'}}>
			<h2>{isLoading ? <Spin/> : data ?? 'Reuqest fallback'}</h2>
		</Card>
	);
}
