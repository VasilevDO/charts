'use client';

import {
	Chart,
	Interval,
	Axis,
	Coordinate,
} from 'bizcharts';
import {trpc} from '@/lib/trpc';
import ChartCard from './ChartCard';

const chartName = 'vaccine';

export default function CovidVaccineOverviewChart() {
	const {data, isLoading: isChartDataLoading} = trpc.getVaccineOverview.useQuery({latestOnly: true});
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

	const {date, ...rest} = data ?? {};

	const chartData = Object.entries(rest).map(([key, value]) => ({
		type: `${key} dose`,
		value,
	}));

	return (
		<ChartCard title={`Vaccinated People Overview${date ? ' by ' + date : ''}`} isLoading={isChartDataLoading || isChartLoading} handleLikeClick={handleLikeClick} isFavorite={Boolean(chart?.isFavorite)}>
			<Chart data={chartData} autoFit height={420} >
				<Coordinate
					type='polar'
					startAngle={Math.PI}
					endAngle={Math.PI * (3 / 2)}
				/>
				<Axis name='value' label={{offset: -5}} grid={{
					line: {
						type: 'circle',
					},
					closed: false,
				}} />
				<Interval
					position='type*value'
					adjust='stack'
					color={['type', 'rgb(252,143,72)-rgb(255,215,135)']}
					element-highlight
					style={{
						lineWidth: 1,
						stroke: '#fff',
					}}
					label={['value', {
						offset: -15,
						style: {
							textAlign: 'center',
							fill: '#000',
						},
					}]}
				/>
			</Chart>
		</ChartCard>
	);
}
