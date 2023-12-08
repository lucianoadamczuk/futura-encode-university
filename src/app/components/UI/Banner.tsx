import React from 'react';

type Props = {
	video: string;
	title: string;
	text: string;
};

export const Banner = (props: Props) => {
	const { video, title, text } = props;
	return (
		<div className=' my-5 relative h-80'>
			<video
				src={video}
				muted
				autoPlay
				loop
				className=' w-full h-full object-cover absolute inset-0'
			></video>
			<section className=' flex flex-col items-center justify-center absolute inset-0 bg-dark bg-opacity-80'>
				<div className=' container'>
					<h4 className=' text-center text-secondary'> {title} </h4>
					<p className=' text-center text-gray-soft'> {text} </p>
				</div>
			</section>
		</div>
	);
};
