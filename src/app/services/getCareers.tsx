import { useEffect, useState } from 'react';
import { data } from '../APIs/APICareers';

export interface IcareersProps {
	ID: string;
	career: string;
	orientation: string;
	description: string;
	duration: number;
	price: number;
	tendency: boolean;
	phrase: string;
	structure: string[];
	objetives: string[];
	requiredResources: string[];
	color: string;
	src: string;
}

export const getCareers = () => {
	const [dataCareers, setDataCareers] = useState<IcareersProps[] | undefined>(
		[]
	);
	async function fetchData() {
		try {
			setTimeout(() => {
				setDataCareers(data);
			}, 0);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	return { dataCareers };
};
