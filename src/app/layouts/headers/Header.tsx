'use client';
import { Suspense } from 'react';
import { LayoutGrid } from '..';
import { TextHeaderBox } from '../../components/common/TextHeaderBox';
import { SplitImage } from '../../components/others';

type Props = {
	firstDirection: string;
	firstText: string;
	secondDirection?: string;
	secondText?: string;
	image: string;
	color: string | undefined;
	title: string | undefined;
	subtitle: string | undefined;
	text: string | undefined;
};

export default function Header(props: Props) {
	const {
		firstDirection,
		firstText,
		secondDirection,
		secondText,
		image,
		color,
		title,
		subtitle,
		text,
	} = props;

	return (
		<Suspense fallback='loading'>
			<header className=' relative bg-cover' style={{}}>
				<section
					className=' mb-20 py-10 lg:py-20 2xl:py-52 relative bg-dark z-20 '
					style={{
						clipPath: 'polygon(0 0, 100% 0, 100% 93%, 0% 100%)',
					}}
				>
					{/* main content */}
					<LayoutGrid>
						{/* image */}
						<SplitImage
							image={image}
							alt={'ilustrative image about the career of ' + title}
						/>

						<TextHeaderBox
							title={title}
							subtitle={subtitle}
							text={text}
							firstDirection={firstDirection}
							firstText={firstText}
							secondDirection={secondDirection}
							secondText={secondText}
						/>
					</LayoutGrid>

					{/* image overlay */}
					<div
						className=' absolute inset-0  bg-cover bg-center blur-sm opacity-10 '
						style={{ backgroundImage: `url(${image})` }}
					></div>

					{/* overlay gradient */}
					<div
						className=' absolute inset-0  blur-sm opacity-20'
						style={{
							background: `linear-gradient(left right, black, ${color})`,
						}}
					></div>
				</section>

				{/* style shape */}
				<div
					className=' w-11/12 h-40 absolute -bottom-16 right-0 bg-bottom bg-cover opacity-60  '
					style={{
						clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0% 100%)',
						backgroundImage: `url(${image})`,
					}}
				></div>

				{/* style shape */}
				<div
					className='w-3/5 h-32 absolute -bottom-10 right-0  opacity-80 bg-dark '
					style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 40%)' }}
				></div>
			</header>
		</Suspense>
	);
}
