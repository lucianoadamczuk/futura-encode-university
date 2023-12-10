'use client';
import React, { ReactNode, useState } from 'react';

type Props = {
	title: string;
	children: ReactNode;
};

export const Accordion = (props: Props) => {
	const { title, children } = props;
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className=' w-full cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
			<h5> {title} </h5>
			<div
				className={` transition-opacity duration-200 overflow-hidden ${
					isOpen ? 'opacity-100 h-fit' : 'opacity-0 h-0'
				} `}
			>
				{children}
			</div>
		</div>
	);
};
