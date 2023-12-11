'use client';
import React, { ReactNode, createContext, useState } from 'react';

interface ModalContextProps {
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContextModal = createContext<ModalContextProps>({
	isModalOpen: false,
	setIsModalOpen: () => {},
});

export const ProviderModal: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<ContextModal.Provider value={{ isModalOpen, setIsModalOpen }}>
			{children}
		</ContextModal.Provider>
	);
};
