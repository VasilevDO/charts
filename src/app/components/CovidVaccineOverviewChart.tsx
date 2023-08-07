'use client';

import {
	Chart,
	Interval,
	Axis,
	Coordinate,
} from 'bizcharts';
import {trpc} from '@/lib/trpc';
import ChartCard from './ChartCard';

export default function CovidVaccineOverviewChart() {
	const {data, isLoading} = trpc.getVaccineOverview.useQuery({latestOnly: true});

	const {date, ...rest} = data ?? {};

	const chartData = Object.entries(rest).map(([key, value]) => ({
		type: key,
		value,
	}));

	return (
		<ChartCard title={`Vaccinated People Overview.${date ? ' Latest update: ' + date : ''}`} isLoading={isLoading}>
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
