import './globals.css';
import type {Metadata} from 'next';
import {Inter as interGoogle} from 'next/font/google';
import TrpcProvider from '@/lib/trpcProvider';
import StyledComponentsRegistry from '@/lib/antdRegistry';

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
					<StyledComponentsRegistry>
						{children}
					</StyledComponentsRegistry>
				</TrpcProvider>
			</body>
		</html>
	);
}
