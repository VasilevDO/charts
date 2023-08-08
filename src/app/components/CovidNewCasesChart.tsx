'use client';

import {trpc} from '@/lib/trpc';
import {
	Chart,
	Geom,
	Axis,
	Slider,
} from 'bizcharts';
import ChartCard from './ChartCard';

const chartName = 'newCases';

const CovidNewCasesChart = () => {
	const {data: chartData, isLoading: isChartDataLoading} = trpc.getNewCases.useQuery();
	const {data: chart, isLoading: isChartLoading} = trpc.getChart.useQuery(chartName);

	const context = trpc.useContext();

	const chartMutation = trpc.updateChart.useMutation({async onSuccess(val) {
		if (val) {
			await context.getChart.refetch();
		}
	}});

	const handleLikeClick = () => {
		chartMutation.mutate({name: chartName, isFavorite: !chart?.isFavorite});
	};

	return (
		<ChartCard title='Covid New Cases' isLoading={isChartDataLoading || isChartLoading} handleLikeClick={handleLikeClick} isFavorite={Boolean(chart?.isFavorite)}>
			<Chart height={420} data={
				chartData?.data.filter(u => u.newCases).sort((a, b) => a.date > b.date ? 1 : -1)
			} autoFit>
				<Axis name='date'/>
				<Axis
					name='newCases'
					title={{autoRotate: true, position: 'center', text: 'New Cases'}}
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
