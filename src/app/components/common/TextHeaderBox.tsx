import React from 'react';
import { ButtonsBox } from './ButtonsBox';

type Props = {
	firstDirection: string;
	firstText: string;
	secondDirection?: string;
	secondText?: string;
	title: string | undefined;
	subtitle: string | undefined;
	text: string | undefined;
};

export const TextHeaderBox = (props: Props) => {
	const {
		firstDirection,
		firstText,
		secondDirection,
		secondText,
		title,
		subtitle,
		text,
	} = props;
	return (
		<div className=' z-10'>
			<article>
				<div>
					<h6 className=' mt-3 text-sm text-gray animate-pulse tracking-[5px]'>
						{subtitle}
					</h6>
					<h1 className=' text-light'> {title} </h1>

					<p className=' text-gray'> {text} </p>
				</div>
			</article>

			<article className=' mt-16'>
				<ButtonsBox
					firstDirection={firstDirection}
					firstText={firstText}
					secondDirection={secondDirection}
					secondText={secondText}
				/>
			</article>
		</div>
	);
};
