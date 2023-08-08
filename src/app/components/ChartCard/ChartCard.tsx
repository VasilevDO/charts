import {Avatar, Button, Card, Col, Divider, Row, Spin} from 'antd';
import clsx from 'clsx';
import {type PropsWithChildren} from 'react';
import Comment from '../../../assets/comment.svg';
import Heart from '../../../assets/heartTwoTone.svg';

import classes from './ChartCard.module.css';

type ChartCardProps = {
	title: string;
	isLoading: boolean;
	isFavorite: boolean;
	handleLikeClick: () => void;
} & PropsWithChildren;

export default function ChartCard({title, isLoading, children, isFavorite, handleLikeClick}: ChartCardProps) {
	return (
		<Card title={title} className={classes.card} bodyStyle={{width: '100%', height: '500px', padding: '0'}}>
			<div className={classes.cardContent}>
				{isLoading
					? <Spin size='large'/>
					: children
				}
			</div>
			<Divider className={classes.divider}/>
			<Row className={classes.cardFooter} justify='space-between' align='middle'>
				<Col><Avatar icon={<h1>AA</h1>}/></Col>
				<Col><Button type='text'><Comment/></Button></Col>
			</Row>
			<Heart className={clsx(classes.likeIcon, isFavorite && classes.favorite)} onClick={handleLikeClick}/>
		</Card>
	);
}
