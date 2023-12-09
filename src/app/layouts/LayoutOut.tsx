'use client';
import React, { ReactNode } from 'react';

type Props = {
	invertX?: boolean;
	invertY?: boolean;
	children: ReactNode;
};

export const LayoutOut = (props: Props) => {
	const { invertX, invertY, children } = props;

	return (
		<section
			className={`py-5 minh bg-gradient-to-t from-60%  to-40% grid grid-cols-3 
			${invertY ? 'from-dark to-light' : 'from-light to-dark'} `}
		>
			<div className={`${invertX && 'order-2'}`}></div>
			<div
				className={` mx-5 md:mx-0 py-10 px-5 col-span-3 md:col-span-2 rounded-3xl  bg-secondary ${
					invertX
						? ' ps-container md:rounded-s-none'
						: ' pe-container md:rounded-e-none'
				}`}
			>
				{children}
			</div>
		</section>
	);
};
