import Link from 'next/link';
import React from 'react';

type Props = {
	href: string;
	children: React.ReactNode;
};

export const Button = (props: Props) => {
	const { href, children } = props;
	return (
		<Link
			href={href}
			className=' md:w-fit text-center px-5 py-2 bg-primary text-light'
		>
			{children}
		</Link>
	);
};
