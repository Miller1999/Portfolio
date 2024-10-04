"use client";
import { createContext, ReactNode, useState } from "react";

interface MenuContextType {
	isMenuOpen: boolean;
	toggleMenu: () => void;
}
interface MenuProviderProps {
	children: ReactNode; //
}
// Crear el contexto
export const MenuContext = createContext<MenuContextType | undefined>(
	undefined
);

// Crear el proveedor del contexto
export const MenuProvider = ({ children }: MenuProviderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Función para alternar entre abierto y cerrado
	const toggleMenu = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	return (
		<MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
			{children}
		</MenuContext.Provider>
	);
};
