import React, { ReactNode } from 'react';

type Props = {
	darkMode?: boolean;
	threeColumns?: boolean;
	children: ReactNode;
};

export const LayoutGrid = (props: Props) => {
	const { darkMode, threeColumns, children } = props;
	return (
		<section className={` py-10  ${darkMode && 'bg-dark'}`}>
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
