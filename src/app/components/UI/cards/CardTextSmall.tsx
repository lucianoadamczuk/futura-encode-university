import Image from 'next/image';
import React from 'react';

type Props = {
	src: string;
	alt: string;
	text: string;
};

export const CardTextSmall = (props: Props) => {
	const { src, alt, text } = props;
	return (
		<div className=' flex items-center gap-5 '>
			<div className=' w-16 h-16   '>
				<Image
					src={src}
					width={20}
					height={20}
					alt={alt}
					className='w-full h-full bg-cover opacity-40'
				/>
			</div>
			<small> {text} </small>
		</div>
	);
};
