import React from 'react';
import { ButtonsBox } from '../components/common/ButtonsBox';
import { LayoutGrid } from '.';
import { v4 as uuidv4 } from 'uuid';
import { SplitImage } from '../components/others';

type Props = {
	image: string;
	title: string;
	subtitle: string;
	text: string[];
};

export const Header = (props: Props) => {
	const { image, title, subtitle, text } = props;
	return (
		<header className=' relative bg-cover' style={{}}>
			<section
				className=' mb-20 py-10 lg:py-20 2xl:py-52 relative bg-dark z-20 '
				style={{
					clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
				}}
			>
				{/* main content */}
				<LayoutGrid>
					{/* image */}
					<SplitImage
						image={image}
						alt={'ilustrative image about the career of ' + title}
					/>

					{/* text */}
					<article className=' relative  z-20'>
						<div className=' mb-14 '>
							<h4 className=' text-gray animate-pulse tracking-[5px]'>
								{subtitle}
							</h4>
							<h1 className=' text-light'> {title} </h1>
							<div className=' mt-2 text-gray'>
								{text.map((item) => (
									<p key={uuidv4()}> {item} </p>
								))}
							</div>
						</div>

						<ButtonsBox
							firstDirection='/'
							firstText='Start now'
							secondDirection='/'
							seconText='Careers'
						/>
					</article>
				</LayoutGrid>

				{/* image overlay */}
				<div
					className=' absolute inset-0  bg-cover bg-center blur-sm opacity-10 '
					style={{ backgroundImage: `url(${image})` }}
				></div>

				{/* overlay gradient */}
				<div className=' absolute  inset-0 bg-gradient-to-b md:bg-gradient-to-l from-dark to-secondary-dark  bg-cover bg-center blur-sm opacity-20'></div>
			</section>

			{/* style shape */}
			<div
				className=' w-11/12 h-40 absolute -bottom-16 right-0  bg-center bg-cover opacity-80 after:inset-0 after:absolute after:bg-secondary after:bg-opacity-40'
				style={{
					clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0% 100%)',
					backgroundImage: `url(${image})`,
				}}
			></div>

			{/* style shape */}
			<div
				className='w-3/5 h-32 absolute -bottom-10 right-0  opacity-95 bg-dark '
				style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 40%)' }}
			></div>
		</header>
	);
};
