import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
	href: string;
	src: string;
	alt: string;
	title: string;
	price: number;
};

export const CardCareer = (props: Props) => {
	const { href, src, alt, title, price } = props;
	return (
		<Link href={href}>
			<div className=' w-64 h-72 relative bg-gray-soft rounded-2xl'>
				<Image
					src={src}
					alt={alt}
					width={500}
					height={500}
					className=' w-full h-full absolute inset-0 object-cover rounded-xl'
				/>

				<section className=' h-full relative bg-gradient-to-t from-dark-soft rounded-xl'>
					<div className=' w-full p-5 grid grid-cols-3 items-center absolute bottom-0 text-light backdrop-blur-lg'>
						<b className=' col-span-2'> {title} </b>
						<small className='text-center '>${price} </small>
					</div>
				</section>
			</div>
		</Link>
	);
};
