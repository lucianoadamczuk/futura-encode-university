import React from 'react';
import { ButtonsBox } from './ButtonsBox';

type Props = {
	title: string | undefined;
	subtitle: string | undefined;
	text: string | undefined;
};

export const TextHeaderBox = (props: Props) => {
	const { title, subtitle, text } = props;
	return (
		<div className=' z-10'>
			<article>
				<div>
					<h1 className=' text-light'> {title} </h1>
					<h6 className=' mt-3 text-sm text-gray animate-pulse tracking-[5px]'>
						{subtitle}
					</h6>
					<p className=' text-gray'> {text} </p>
				</div>
			</article>

			<article className=' mt-16'>
				<ButtonsBox
					firstDirection='/'
					firstText='Start now'
					secondDirection='/'
					seconText='Careers'
				/>
			</article>
		</div>
	);
};
