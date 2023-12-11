'use client';
import { TextHeaderBox } from '@/app/components/common/TextHeaderBox';
import Image from 'next/image';
import { LayoutGrid } from '..';

type Props = {
	firstDirection: string;
	firstText: string;
	secondDirection: string;
	secondText: string;
	title: string;
	subtitle: string;
	text: string;
	image: string;
};

export const HeaderMain = (props: Props) => {
	const {
		firstDirection,
		firstText,
		secondDirection,
		secondText,
		title,
		subtitle,
		text,
		image,
	} = props;
	return (
		<header className=' w-full h-full lg:py-24 2xl:py-56 relative bg-dark-soft'>
			<div
				className=' h-72 lg:hidden bg-primary'
				style={{
					clipPath:
						'polygon(50% 0%, 100% 0, 100% 35%, 100% 70%, 100% 100%, 65% 89%, 0 100%, 0% 70%, 0% 35%, 0 0)',
				}}
			>
				<Image
					width={600}
					height={600}
					src={image}
					alt='A representative image'
					className=' w-full h-full object-cover opacity-30'
				/>
			</div>

			<LayoutGrid>
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

			{/* image */}
			<div
				className=' hidden lg:flex w-8/12 h-full absolute top-0 right-0 bg-primary-dark'
				style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0% 100%)' }}
			>
				<Image
					width={1000}
					height={1000}
					src={image}
					alt='A representative image'
					className=' w-full h-full object-cover opacity-30'
				/>
			</div>
		</header>
	);
};
