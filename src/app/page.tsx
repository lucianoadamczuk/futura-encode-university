'use client';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import {
	Banner,
	Button,
	CardAuthority,
	CardTextSmall,
	CarouselMain,
	CarouselNonStop,
} from './components/UI';
import { TextBox } from './components/common/TextBox';
import { content } from './content/home';
import { LayoutGrid, LayoutOut } from './layouts';

export default function Home() {
	return (
		<>
			<main>
				{/* intro */}
				<LayoutGrid>
					<TextBox
						title={content.intro.title}
						subtitle={content.intro.subtitle}
						text={content.intro.text}
					/>
					<Image
						width={400}
						height={300}
						src={content.intro.image.src}
						alt={content.intro.image.alt}
						className=' h-96 w-full'
					/>
				</LayoutGrid>

				<LayoutOut invertX={true} invertY={true}>
					<div className=' grid grid-cols-1 md:grid-cols-2 gap-5'>
						{content.intro.cards.map((item) => (
							<CardTextSmall key={uuidv4()} src={item.src} text={item.text} />
						))}
					</div>
				</LayoutOut>

				{/* directors: first layout */}
				<LayoutGrid darkMode={true}>
					<TextBox
						span={true}
						darkMode={true}
						title={content.directors.title}
						subtitle={content.directors.subtitle}
						text={content.directors.text}
					/>
				</LayoutGrid>

				{/* directors: second layout */}
				<LayoutGrid darkMode={true} threeColumns={true}>
					<div className=' w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center  md:col-span-2'>
						<CardAuthority
							darkMode={true}
							image={content.directors.people[0].image}
							name={content.directors.people[0].name}
							role={content.directors.people[0].role}
						/>
						<CardAuthority
							darkMode={true}
							image={content.directors.people[1].image}
							name={content.directors.people[1].name}
							role={content.directors.people[1].role}
						/>
						<CardAuthority
							darkMode={true}
							image={content.directors.people[2].image}
							name={content.directors.people[2].name}
							role={content.directors.people[2].role}
						/>
					</div>
					<div className=' flex flex-col gap-5 items-center justify-center '>
						<h5 className=' text-gray-soft text-center'>
							{content.directors.finalText}
						</h5>
						<Button href='/'>About Them</Button>
					</div>
				</LayoutGrid>

				{/* testimonies */}
				<LayoutGrid>
					<TextBox
						title={content.testimonies.title}
						subtitle={content.testimonies.subtitle}
						text={content.testimonies.text}
					/>
					<CarouselMain displayTestimonies={content.testimonies.testimonies} />
				</LayoutGrid>

				{/* banner */}
				<Banner
					video={content.banner.src}
					title={content.banner.title}
					text={content.banner.text}
				/>

				{/* sponsorships */}
				<LayoutGrid>
					<TextBox
						title={content.sponsorship.title}
						subtitle={content.sponsorship.subtitle}
						text={content.sponsorship.text}
					/>

					<Image
						src={content.sponsorship.image.src}
						alt={content.sponsorship.image.alt}
						width={400}
						height={400}
						className='w-full h-72 object-cover rounded-md'
					/>
				</LayoutGrid>

				<CarouselNonStop displaySponsors={content.sponsorship.sponsors} />
				<CarouselNonStop
					reverse={true}
					displaySponsors={content.sponsorship.sponsors}
				/>
			</main>
		</>
	);
}
