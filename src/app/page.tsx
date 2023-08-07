import {trpc} from '@/lib/trpc';
import TrpcComponent from './components/TrpcComponent';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1>Hello nextjs</h1>
			<TrpcComponent/>
		</main>
	);
}
