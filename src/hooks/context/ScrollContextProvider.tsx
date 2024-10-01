import { createContext, ReactNode } from 'react';

type ScrollContextComponentProps = {
	scrollPosition: number;
	children: ReactNode;
};

const ScrollContext = createContext<number>(0);

const ScrollContextProvider = ({ scrollPosition, children }: ScrollContextComponentProps) => {
	return <ScrollContext.Provider value={scrollPosition}>{children}</ScrollContext.Provider>;
};

export { ScrollContextProvider, ScrollContext };
