import React from 'react';

type Props = {
	span?: boolean;
	title: string;
	subtitle: string;
	text: string[];
};

export const TextBox = (props: Props) => {
	const { span, title, subtitle, text } = props;
	return (
		<article className={`flex flex-col gap-5 ${span && 'col-span-2'} `}>
			<div>
				<h5> {subtitle} </h5>
				<h3> {title} </h3>
				{text?.map((item) => (
					<p className=' my-1'> {item} </p>
				))}
			</div>
		</article>
	);
};
