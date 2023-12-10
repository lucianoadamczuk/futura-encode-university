import React from 'react';
import { v4 as uuidv4 } from 'uuid';
type Props = {
	darkMode?: boolean;
	title: string;
	items: string[] | undefined;
};

export const List = (props: Props) => {
	const { darkMode, title, items } = props;
	return (
		<article className=' space-y-5'>
			<h4 className={darkMode ? 'text-secondary' : ''}> {title} </h4>

			<ul className=' text-gray list-inside list-disc space-y-2'>
				{items?.map((item) => (
					<li key={uuidv4()}>{item}</li>
				))}
			</ul>
		</article>
	);
};
