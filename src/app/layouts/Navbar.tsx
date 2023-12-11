import Link from 'next/link';
import React from 'react';

type Props = {};

export const Navbar = (props: Props) => {
	return (
		<nav className=' w-full fixed top-0 py-5 bg-dark z-50'>
			<div className='container flex items-center justify-between'>
				<Link href='/' className=' text-primary'>
					<h5>Futura Encode</h5>
				</Link>
				<Link
					href='/careers'
					className=' text-light opacity-60 hover:opacity-100 '
				>
					Careers
				</Link>
			</div>
		</nav>
	);
};
