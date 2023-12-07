import React, { ReactNode } from 'react';

type Props = {
	threeColumns?: boolean;
	children: ReactNode;
};

export const LayoutGrid = (props: Props) => {
	const { threeColumns, children } = props;
	return (
		<section className='py-20 '>
			<div
				className={`container grid md:grid-cols-2 
        ${threeColumns && 'md:grid-cols-3'} `}
			>
				{children}
			</div>
		</section>
	);
};
