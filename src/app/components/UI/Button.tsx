import Link from 'next/link';
import React from 'react';

type Props = {
	href: string;
	children: React.ReactNode;
	primary?: boolean;
	callToAction?: boolean;
};

export const Button = (props: Props) => {
	const { href, children, primary, callToAction } = props;
	return (
		<Link
			href={href}
			className={`md:w-fit px-5 py-2 flex justify-between items-center gap-3 text-center hover:scale-105  ${
				primary
					? 'text-light  bg-primary hover:bg-primary-dark'
					: ' text-secondary border-2 border-secondary hover:border-secondary-dark'
			} `}
		>
			{children}
			{callToAction && (
				<div className=' animate-pulse w-4 h-4 flex justify-center items-center border-2 border-light rounded-full'>
					<div className='  w-2 h-2 bg-light rounded-full'></div>
				</div>
			)}
		</Link>
	);
};
