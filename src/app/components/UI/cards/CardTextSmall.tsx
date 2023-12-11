import Image from 'next/image';
import React from 'react';

type Props = {
	src: string;
	text: string;
};

export const CardTextSmall = (props: Props) => {
	const { src, text } = props;
	return (
		<div className=' flex items-center gap-5 '>
			<div className=' w-16 h-16   '>
				<Image
					src={src}
					width={20}
					height={20}
					alt='A representative image about the text'
					className='w-full h-full bg-cover opacity-40'
				/>
			</div>
			<small> {text} </small>
		</div>
	);
};
