'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { IcareersProps } from '@/app/services/getCareers';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { CardCareer } from '..';

type Props = {
	displayCareers: IcareersProps[] | undefined;
};

export default function CarouselCoverflow(props: Props) {
	const { displayCareers } = props;
	return (
		<>
			<Swiper
				effect={'coverflow'}
				loop={true}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={2}
				coverflowEffect={{
					rotate: 0,
					stretch: 100,
					depth: 100,
					modifier: 1,
					slideShadows: false,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className='mySwiper'
			>
				{displayCareers?.map((item) => (
					<SwiperSlide key={item.ID}>
						<CardCareer
							href={'/careers/' + item.ID}
							src={item.src}
							alt={item.career}
							title={item.career}
							price={item.price}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
