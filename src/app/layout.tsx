import type { Metadata } from 'next';
import { Open_Sans, Poppins } from 'next/font/google';
import './globals.css';
import { Footer } from './layouts';
import { Navbar } from './layouts/Navbar';

export const fontBase = Open_Sans({
	subsets: ['latin', 'cyrillic'],
	weight: ['300', '400', '600'],
	style: ['normal', 'italic'],
	variable: '--fontBase',
});

export const fontTitle = Poppins({
	subsets: ['latin'],
	weight: ['400', '800'],
	style: ['normal'],
	variable: '--fontTitle',
});

export const metadata: Metadata = {
	title: 'Futura Encode',
	description:
		'Empower your future in technological frontiers. Explore innovative courses and programs in programming, software development, artificial intelligence, and more. Become a leader of tomorrow with our high-quality education and immerse yourself in the world of technology at Futura Encode University.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${fontTitle.variable} ${fontBase.variable}`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
