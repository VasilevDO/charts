import {Avatar, Button, Card, Col, Divider, Row, Spin} from 'antd';
import {type PropsWithChildren} from 'react';

import classes from './ChartCard.module.css';

type ChartCardProps = {
	title: string;
	isLoading: boolean;
} & PropsWithChildren;

export default function ChartCard({title, isLoading, children}: ChartCardProps) {
	return (
		<Card title={title} className={classes.card} bodyStyle={{width: '500px', height: '500px', padding: '0'}}>
			<div className={classes.cardContent}>
				{isLoading
					? <Spin size='large'/>
					: children
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
