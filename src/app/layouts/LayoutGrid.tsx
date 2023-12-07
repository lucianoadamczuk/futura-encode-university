import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const LayoutGrid = (props: Props) => {
	return <section>{children}</section>;
};
