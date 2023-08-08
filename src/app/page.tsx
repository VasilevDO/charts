import {Row, Col} from 'antd';
import CovidNewCasesChart from './components/CovidNewCasesChart';
import CovidVaccineOverviewChart from './components/CovidVaccineOverviewChart';
import HomePageHeader from './components/HomePageHeader';

export default function Home() {
	return (
		<Row gutter={[24, 24]}>
			<Col span={24}>
				<HomePageHeader/>
			</Col>
			<Col span={24}>
				<Row gutter={[24, 24]} justify='center'>
					<Col style={{width: '100%', maxWidth: '500px'}}><CovidVaccineOverviewChart/></Col>
					<Col style={{width: '100%', maxWidth: '500px'}}><CovidNewCasesChart/></Col>
				</Row>
			</Col>
		</Row>
	);
}
