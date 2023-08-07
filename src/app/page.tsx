import CovidVaccineOverviewChart from './components/CovidVaccineOverviewChart';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1>Hello nextjs</h1>
			<CovidVaccineOverviewChart/>
		</main>
	);
}
