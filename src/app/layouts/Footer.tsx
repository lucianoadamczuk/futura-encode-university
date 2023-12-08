import React from 'react';
import { TextBox } from '../components/common/TextBox';
import { LayoutGrid, LayoutOut } from '.';

export const Footer = () => {
	const list = [
		'About us',
		'Our mission',
		'Frequent Questions',
		'Contact',
		'Privacy policy',
		'Services',
		'Join out team',
		'Terms of service',
	];

	return (
		<footer className=' mt-20'>
			<div className=' flex justify-center  bg-gradient-to-b from-light from-50% to-dark to-50%'>
				<div className=' py-3 w-3/4 bg-dark-soft rounded-xl'>
					<h6 className=' text-center text-gray-soft animate-pulse'>
						Be part of the future. Be part of us.
					</h6>
				</div>
			</div>

			<section className=' bg-dark'>
				<LayoutGrid threeColumns={true}>
					<TextBox
						darkMode={true}
						title='Futura Encode'
						text={[
							'Join us and uncover the path to your academic and professional goals!',
						]}
					/>

					{/* text */}
					<article className=' w-full grid sm:grid-cols-2 col-span-2 gap-10'>
						<div>
							{list.slice(0, 4).map((item) => (
								<p className=' text-gray hover:text-gray-soft'> {item} </p>
							))}
						</div>
						<div>
							{list.slice(4, 8).map((item) => (
								<p className=' text-gray hover:text-gray-soft'> {item} </p>
							))}
						</div>
					</article>
				</LayoutGrid>

				<div className=' container flex items-center justify-center'>
					<small className=' w-full  border-t-2 py-3 text-center text-gray'>
						Futura Encode University: all Rights reserved ©
					</small>
				</div>
			</section>
		</footer>
	);
};
