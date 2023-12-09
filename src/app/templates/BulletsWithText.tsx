import React from 'react';

type Props = {
	title: string;
	text: string;
};

export const BulletsWithText = (props: Props) => {
	const { title, text } = props;
	return (
		<section>
			<article className=' flex w-full items-center  gap-x-5 '>
				{/* bullet and title */}
				<div className='animate-pulse rounded-full border-2 border-primary  p-1 '>
					<div className=' h-2 w-2 rounded-full bg-primary'></div>
				</div>
				<h4> {title} </h4>
			</article>
			{/* text and border */}
			<article className='  '>
				<p className=' mx-2 border-l-4 border-x-gray-soft px-8 py-3 '>{text}</p>
			</article>
		</section>
	);
};
