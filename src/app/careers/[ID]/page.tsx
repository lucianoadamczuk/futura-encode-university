'use client';
import { Button } from '@/app/components/UI';
import { List } from '@/app/components/common/List';
import { TextBox } from '@/app/components/common/TextBox';
import { Loader } from '@/app/components/others';
import { ContextModal } from '@/app/contexts/ContextModal';
import { LayoutGrid } from '@/app/layouts';
import { IcareersProps, getCareers } from '@/app/services/getCareers';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { lazy, useContext, useEffect, useState } from 'react';
type Props = {};

const Header = lazy(() => import('../../layouts/headers/Header'));

export default function Page({}: Props) {
	const { dataCareers } = getCareers();
	const params = useParams();
	const [data, setData] = useState<IcareersProps | undefined>();

	useEffect(() => {
		function foundData() {
			if (dataCareers) {
				setData(dataCareers.find((career) => career.ID === params.ID));
			}
		}

		console.log(data);
		foundData();
	}, [dataCareers, params.ID]);

	const { setIsModalOpen } = useContext(ContextModal);

	if (data) {
		return (
			<>
				<Header
					image={data?.src}
					color={data?.color}
					title={data?.career}
					subtitle={data?.phrase}
					text='Embark on an educational journey that will ignite your passion and guide you towards mastering this field. Discover the place where excellence meets innovation. Expand your skills beyond what you had ever dreamed.'
					firstDirection='#start'
					firstText='Start now'
				/>

				<main>
					<LayoutGrid ID='start'>
						<TextBox title='Description' text={data?.description} />

						{/* program structure */}
						<List title='Program structure' items={data?.structure} />
					</LayoutGrid>

					<LayoutGrid darkMode={true}>
						<section className='space-y-10'>
							{/* objetives */}
							<List
								darkMode={true}
								title='Main objetives'
								items={data?.objetives}
							/>

							<List
								darkMode={true}
								title='For this career you will need'
								items={data?.requiredResources}
							/>
						</section>

						<Image
							src='/assets/careers/objetives.svg'
							alt='A target shooting'
							width={400}
							height={400}
							className='w-72'
						/>
					</LayoutGrid>

					<div className=' mt-10 flex flex-col items-center gap-2'>
						<p className=' text-3xl'> ${data?.price}</p>

						<Button primary={true} href='/'>
							Hire
						</Button>
					</div>
				</main>
			</>
		);
	} else {
		return <Loader />;
	}
}
