'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// styles
import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

type Props = {
	reverse?: boolean;
	displaySponsors: Array<{ src: string; alt: string }>;
};

export const CarouselNonStop = (props: Props) => {
	const { reverse, displaySponsors } = props;
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				speed={10000}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
					reverseDirection: reverse,
				}}
				pagination={{
					clickable: false,
				}}
				slidesPerView={2}
				breakpoints={{
					640: {
						slidesPerView: 3,
					},
					1024: {
						slidesPerView: 5,
					},
				}}
				loop={true}
				navigation={true}
				modules={[Autoplay]}
				className='CarouselNonStop'
			>
				{displaySponsors?.map((item) => (
					<SwiperSlide key={item.alt} className='opacity-50'>
						<Image
							src={item.src}
							alt={item.alt}
							width={100}
							height={100}
							className='w-20 h-20'
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
