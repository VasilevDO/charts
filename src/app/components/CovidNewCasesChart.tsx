'use client';

import {trpc} from '@/lib/trpc';
import {
	Chart,
	Geom,
	Axis,
	Slider,
} from 'bizcharts';
import ChartCard from './ChartCard';

const CovidNewCasesChart = () => {
	const {data, isLoading} = trpc.getNewCases.useQuery();

	const vaildatedData = data?.data.filter((u: any) => u.newCases).sort((a: any, b: any) => a.date > b.date ? 1 : -1);

	return (
		<ChartCard title='Covid New Cases' isLoading={isLoading}>
			<Chart height={400} data={vaildatedData} autoFit>
				<Axis name='date'/>
				<Axis
					name='newCases'
					title={{autoRotate: true, offset: 70, position: 'center', text: 'New Cases'}}
				/>
				<Geom
					type='line'
					position='date*newCases'
					size={2}
					color={'areaName'}
					shape={'smooth'}
				/>
				<Slider/>
			</Chart>
		</ChartCard>
	);
};

export default CovidNewCasesChart;
