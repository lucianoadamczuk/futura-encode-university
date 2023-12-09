import React from 'react';
import { Button } from '../UI';

type Props = {
	firstDirection: string;
	firstText: string;
	secondDirection: string;
	seconText: string;
};

export const ButtonsBox = (props: Props) => {
	const { firstDirection, firstText, secondDirection, seconText } = props;
	return (
		<div className=' flex flex-col md:flex-row gap-5'>
			<Button href={firstDirection} primary={true} callToAction={true}>
				{' '}
				{firstText}{' '}
			</Button>
			<Button href={secondDirection}> {seconText} </Button>
		</div>
	);
};
