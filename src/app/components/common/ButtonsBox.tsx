import React from 'react';
import { Button } from '../UI';

type Props = {
	firstDirection: string;
	firstText: string;
	secondDirection?: string;
	secondText?: string;
};

export const ButtonsBox = (props: Props) => {
	const { firstDirection, firstText, secondDirection, secondText } = props;
	return (
		<div className=' flex flex-col md:flex-row gap-5'>
			<Button href={firstDirection} primary={true} callToAction={true}>
				{firstText}
			</Button>
			{secondDirection && secondText && (
				<Button href={secondDirection}>{secondText}</Button>
			)}
		</div>
	);
};
