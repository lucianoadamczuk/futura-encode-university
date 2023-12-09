'use client';
import Image from 'next/image';
import { CardTextSmall, CarouselCoverflow } from '../components/UI';
import { TextBox } from '../components/common/TextBox';
import { content } from '../content/careers';
import { LayoutGrid, LayoutOut } from '../layouts';
import { getCareers } from '../services/getCareers';
import { BulletsWithText } from '../templates';

function page() {
	const { dataCareers } = getCareers();

	return (
		<main>
			{/* about careers */}
			<LayoutGrid threeColumns={true}>
				<div className=' md:col-span-2'>
					{content.aboutCareers.points.map((item) => (
						<BulletsWithText title={item.title} text={item.text} />
					))}
				</div>

				<Image
					src={content.aboutCareers.image.src}
					alt={content.aboutCareers.image.alt}
					width={300}
					height={800}
				/>
			</LayoutGrid>

			{/* why choose us */}
			<LayoutOut invertY={true}>
				<div className='grid lg:grid-cols-2 gap-y-10'>
					{content.whyChooseUs.cards.map((item) => (
						<CardTextSmall
							src={item.image.src}
							alt={item.image.alt}
							text={item.text}
						/>
					))}
				</div>
			</LayoutOut>

			{/* tendencies */}
			<LayoutGrid darkMode={true}>
				<TextBox darkMode={true} subtitle='Discover the tendencies' />
				<CarouselCoverflow
					displayCareers={dataCareers
						?.filter((career) => career.tendency === true)
						.slice(0, 6)}
				/>
			</LayoutGrid>

			{/* all the careers */}
		</main>
	);
}

export default page;
