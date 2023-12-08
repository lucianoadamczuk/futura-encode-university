'use client';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { CardQuote, CardQuoteProps } from '../cards/CardQuote';

type Props = {
	displayTestimonies: CardQuoteProps[];
};

export const CarouselMain = (props: Props) => {
	const { displayTestimonies } = props;
	return (
		<>
			<Swiper
				spaceBetween={30}
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Pagination]}
				className='mySwiper'
			>
				{displayTestimonies?.map((item) => (
					<SwiperSlide key={uuidv4()}>
						<CardQuote text={item.text} name={item.name} role={item.role} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
