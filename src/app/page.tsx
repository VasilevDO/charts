import {Row, Col, Button} from 'antd';
import CovidNewCasesChart from './components/CovidNewCasesChart';
import CovidVaccineOverviewChart from './components/CovidVaccineOverviewChart';

export default function Home() {
	return (
		<Row gutter={[24, 24]}>
			<Col span={24}>
				<Row justify='space-between' align='middle'>
					<Col style={{fontSize: '1.5rem'}}><h1>Page Title</h1></Col>
					<Col>
						<Row gutter={16}>
							<Col><Button>Export to PDF</Button></Col>
							<Col><Button>Notes</Button></Col>
							<Col><Button>Filter</Button></Col>
						</Row>
					</Col>
				</Row>
			</Col>
			<Col span={24}>
				<Row gutter={[24, 24]} justify='center'>
					<Col><CovidVaccineOverviewChart/></Col>
					<Col><CovidNewCasesChart/></Col>
				</Row>
			</Col>
		</Row>
	);
}
