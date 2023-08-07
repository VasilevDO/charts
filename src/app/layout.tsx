import './globals.css';
import type {Metadata} from 'next';
import {Inter as interGoogle} from 'next/font/google';
import {TrpcProvider} from '@/lib/trpcProvider';

const inter = interGoogle({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'Charts',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<TrpcProvider>
					{children}
				</TrpcProvider>
			</body>
		</html>
	);
}
