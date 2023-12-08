import Image from 'next/image';
import React from 'react';

type Props = {
	src: string;
	text: string;
};

export const CardTextSmall = (props: Props) => {
	const { src, text } = props;
	return (
		<div className=' flex items-center divide-x-2 divide-dark-soft divide-opacity-60 '>
			<div className=' w-fit p-1 rounded-md '>
				<Image
					src={src}
					width={50}
					height={50}
					alt='A symbolic image'
					className='w-16 h-16 opacity-40'
				/>
			</div>
			<small className=' ps-3'> {text} </small>
		</div>
	);
};
