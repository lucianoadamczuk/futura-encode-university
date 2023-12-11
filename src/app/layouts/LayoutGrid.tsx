import React, { ReactNode } from 'react';

type Props = {
	ID?: string;
	darkMode?: boolean;
	threeColumns?: boolean;
	children: ReactNode;
};

export const LayoutGrid = (props: Props) => {
	const { ID, darkMode, threeColumns, children } = props;
	return (
		<section className={` py-10  ${darkMode && 'bg-dark'}`} id={ID}>
			<div
				className={`container grid place-items-center gap-10 md:grid-cols-2  ${
					threeColumns && 'md:grid-cols-3'
				} `}
			>
				{children}
			</div>
		</section>
	);
};
