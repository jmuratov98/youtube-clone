import { createContext, useContext, ReactNode } from 'react';

const StoreContext = createContext(undefined);

interface StoreProviderProps {
    children: ReactNode,
    stores: any
}

const StoreProvider = ({ children, stores }: StoreProviderProps) => {
    return <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
}

const useStore = () => useContext(StoreContext);

export { StoreProvider, useStore };