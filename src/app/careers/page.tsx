'use client';
import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { Accordion, CardTextSmall } from '../components/UI';
import CarouselCoverflow from '../components/UI/carousels/CarouselCoverflow';
import { TextBox } from '../components/common/TextBox';
import { content } from '../content/careers';
import { HeaderMain, LayoutGrid, LayoutOut } from '../layouts';
import { getCareers } from '../services/getCareers';
import { BulletsWithText } from '../templates';

function page() {
	const { dataCareers } = getCareers();
	const orientations: string[] = [];
	dataCareers?.forEach((element) => {
		if (!orientations.includes(element.orientation)) {
			orientations.push(element.orientation);
		}
	});

	return (
		<>
			<HeaderMain
				title={content.header.title}
				subtitle={content.header.subtitle}
				text={content.header.text}
				image={content.header.image}
				firstDirection='#start'
				firstText='Start now'
				secondDirection='/careers'
				secondText='Hire me'
			/>

			<main>
				{/* about careers */}
				<LayoutGrid ID='start' threeColumns={true}>
					<div className=' md:col-span-2'>
						{content?.aboutCareers?.points?.map((item) => (
							<BulletsWithText
								key={uuidv4()}
								title={item.title}
								text={item.text}
							/>
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
						{content?.whyChooseUs?.cards?.map((item) => (
							<CardTextSmall key={uuidv4()} src={item.image} text={item.text} />
						))}
					</div>
				</LayoutOut>

				{/* tendencies */}
				<LayoutGrid darkMode={true}>
					<h5 className=' text-center text-secondary'>
						Explore the market trends. <br /> Dicover the most in-demand careers
						<br /> on the patform
					</h5>

					<CarouselCoverflow
						displayCareers={dataCareers
							?.filter((career) => career.tendency === true)
							.slice(0, 6)}
					/>
				</LayoutGrid>

				{/* all the careers */}
				<LayoutGrid threeColumns={true}>
					<TextBox
						span={true}
						title={content.careers.title}
						subtitle={content.careers.subtitle}
						text={content.careers.text}
					/>
				</LayoutGrid>

				<LayoutGrid>
					{orientations?.map((orientation) => (
						<Accordion
							key={uuidv4()}
							title={orientation.charAt(0).toUpperCase() + orientation.slice(1)}
						>
							{/* a div with flex to separate every Link */}
							<div className=' w-full py-5 divide-y-2 divide-gray-soft rounded-md flex flex-col'>
								{dataCareers
									?.filter((item) => item.orientation === orientation)
									?.map((item) => (
										<Link
											key={uuidv4()}
											href={'/careers/' + item.ID}
											className='ps-2 py-3 hover:bg-gray hover:text-light'
										>
											{item.career}
										</Link>
									))}
							</div>
						</Accordion>
					))}
				</LayoutGrid>
			</main>
		</>
	);
}

export default page;
