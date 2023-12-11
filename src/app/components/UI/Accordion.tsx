'use client';
import React, { ReactNode, Suspense, useState } from 'react';
import { IconArrow } from '../../../../public/icons';

type Props = {
	title: string;
	children: ReactNode;
};

export const Accordion = (props: Props) => {
	const { title, children } = props;
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className=' w-full cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
			<div className=' flex items-center gap-5'>
				<h5> {title} </h5>
				<IconArrow
					className={` duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'} `}
				/>
			</div>
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
