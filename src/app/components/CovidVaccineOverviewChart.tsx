'use client';

import {
	Chart,
	Interval,
	Axis,
	Coordinate,
} from 'bizcharts';
import {Card, Spin} from 'antd';
import {trpc} from '@/lib/trpc';

import classes from './CovidVaccineOverviewChart.module.css';

export default function CovidVaccineOverviewChart() {
	const {data, isLoading} = trpc.getTest.useQuery('2022-09-04');

	const chartData = [
		{
			type: 'First', value: 1000,
		},
		{
			type: 'Second', value: 900,
		},
		{
			type: 'Third', value: 600,
		},
	];

	return (
		<Card title={`Vaccinated People Overview.${data ? ' Latest update: ' + data : ''}`} className={classes.card} bodyStyle={{width: '500px', height: '500px'}}>
			{isLoading
				? <Spin size='large'/>
				: <Chart data={chartData} autoFit height={400}>
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
			}
		</Card>
	);
}