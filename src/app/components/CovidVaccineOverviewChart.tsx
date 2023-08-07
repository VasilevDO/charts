'use client';

import {
	Chart,
	Interval,
	Axis,
	Coordinate,
} from 'bizcharts';
import {Avatar, Button, Card, Col, Divider, Row, Spin} from 'antd';
import {trpc} from '@/lib/trpc';

import classes from './CovidVaccineOverviewChart.module.css';

export default function CovidVaccineOverviewChart() {
	const {data, isLoading} = trpc.getVaccineOverview.useQuery({latestOnly: true});

	const {date, ...rest} = data ?? {};

	const chartData = Object.entries(rest).map(([key, value]) => ({
		type: key,
		value,
	}));

	return (
		<Card title={`Vaccinated People Overview.${date ? ' Latest update: ' + date : ''}`} className={classes.card} bodyStyle={{width: '500px', height: '500px', padding: '0'}}>
			<div className={classes.cardContent}>
				{isLoading
					? <Spin size='large'/>
					: <Chart data={chartData} autoFit height={420} >
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
			</div>
			<Divider className={classes.divider}/>
			<Row className={classes.cardFooter} justify='space-between' align='middle'>
				<Col><Avatar icon={<h1>AA</h1>}/></Col>
				<Col><Button>button</Button></Col>
			</Row>
		</Card>
	);
}
