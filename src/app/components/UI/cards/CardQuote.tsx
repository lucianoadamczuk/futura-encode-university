import React from 'react';

export type CardQuoteProps = {
	text: string;
	name: string;
	role: string;
};

export const CardQuote = (props: CardQuoteProps) => {
	const { text, name, role } = props;
	return (
		<div className='  shadow-md shadow-gray-soft p-4 rounded-lg'>
			<blockquote>
				<p>&ldquo;{text}&rdquo;</p>
			</blockquote>

			<figcaption className=' italic flex justify-end gap-1 opacity-60 text-gray'>
				<small>{name}</small>
				<p> | </p>
				<small>{role}</small>
			</figcaption>
		</div>
	);
};
