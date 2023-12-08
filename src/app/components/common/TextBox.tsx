import React from 'react';
import { v4 as uuidv4 } from 'uuid';
type Props = {
	span?: boolean;
	darkMode?: boolean;
	title?: string;
	subtitle?: string;
	text?: string[];
};

export const TextBox = (props: Props) => {
	const { span, darkMode, title, subtitle, text } = props;
	return (
		<div className={`flex flex-col gap-5 ${span && 'col-span-2'} `}>
			<section>
				{/* titles */}
				<div className=' mb-5'>
					<h5
						className={!darkMode ? ' text-primary-dark' : 'text-secondary-dark'}
					>
						{subtitle}
					</h5>
					<h3 className={!darkMode ? ' text-primary' : 'text-secondary'}>
						{title}
					</h3>
				</div>

				{/* text */}
				{text?.map((item) => (
					<p key={uuidv4()} className={` my-2 ${darkMode && 'text-light'}`}>
						{item}
					</p>
				))}
			</section>
		</div>
	);
};
