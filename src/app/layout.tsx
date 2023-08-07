import './globals.css';
import type {Metadata} from 'next';
import {Inter as interGoogle} from 'next/font/google';
import TrpcProvider from '@/lib/trpcProvider';
import StyledComponentsRegistry from '@/lib/antdRegistry';
import Header from './components/Header';

import classes from './layout.module.css';
import clsx from 'clsx';

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
			<body className={clsx(inter.className, classes.body)}>
				<TrpcProvider>
					<StyledComponentsRegistry>
						<Header/>
						<main className={classes.content}>
							{children}
						</main>
					</StyledComponentsRegistry>
				</TrpcProvider>
			</body>
		</html>
	);
}
