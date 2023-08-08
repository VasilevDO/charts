'use client';

import {Button, Col, Row} from 'antd';
import Download from '../../../assets/download.svg';
import Filter from '../../../assets/filter.svg';
import Note from '../../../assets/note.svg';

import classes from './HomePageHeader.module.css';

export default function HomePageHeader() {
	return (
		<Row className={classes.homePageHeader} justify='space-between' align='middle' gutter={[16, 16]}>
			<Col style={{fontSize: '1.5rem'}}><h1>Page Title</h1></Col>
			<Col>
				<Row gutter={[16, 8]}>
					<Col><Button>Export to PDF <Download/></Button></Col>
					<Col><Button>Notes <Note/></Button></Col>
					<Col><Button>Filter <Filter/></Button></Col>
				</Row>
			</Col>
		</Row>
	);
}
