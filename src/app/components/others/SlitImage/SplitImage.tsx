import Image from 'next/image';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './SplitImage.css';

type Props = {
	image: string;
	alt: string;
};

export const SplitImage = (props: Props) => {
	const { image, alt } = props;
	const array = [
		['firstImage', 'object-left'],
		['secondImage', 'object-center'],
		['thirdImage', 'object-right'],
	];

	return (
		<div className=' SplitImage grid grid-cols-3 gap-2 '>
			{array.map((item) => (
				<div
					key={uuidv4()}
					className={` ${item[0]} rounded-lg bg-dark-soft z-10`}
				>
					<Image
						src={image}
						alt={alt}
						width={500}
						height={500}
						className={`${item[1]} h-96 object-cover rounded-md opacity-10 duration-300 backdrop-blur-xl hover:opacity-30   `}
					/>
				</div>
			))}
		</div>
	);
};
