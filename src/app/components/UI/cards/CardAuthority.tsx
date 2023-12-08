import Image from 'next/image';
import React from 'react';

type Props = {
	darkMode?: boolean;
	image: string;
	name: string;
	role: string;
};

export const CardAuthority = (props: Props) => {
	const { darkMode, image, name, role } = props;
	return (
		<article className=' w-fit p-2 grid place-items-center gap-5'>
			{/* image */}
			<div className=' w-48 h-48 flex items-center bg-gray rounded-full overflow-hidden'>
				<Image
					src={image}
					alt={name + ', authority in the school'}
					width={400}
					height={400}
				/>
			</div>
			{/* text */}
			<div className=' grid place-items-center'>
				<h6 className={darkMode ? 'text-secondary-dark' : 'text-dark'}>
					{' '}
					{name}{' '}
				</h6>
				<small className=' text-gray italic'> {role} </small>
			</div>
		</article>
	);
};
