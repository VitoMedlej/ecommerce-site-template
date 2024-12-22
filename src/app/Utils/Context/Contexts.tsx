"use client";

import {Auth0Provider} from "@auth0/auth0-react";
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState
} from "react";


type Category = {
    id: string;
    name: string;
};

export const SidebarContext = createContext < {
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch < SetStateAction < boolean >>;
} > ({
    sidebarOpen: false,
    setSidebarOpen: () => {}
});

export const CartContext = createContext < {
    isCartOpen: boolean;
    setIsCartOpen: Dispatch < SetStateAction < boolean >>;
} > ({
    isCartOpen: false,
    setIsCartOpen: () => {}
});

export const CategoriesContext = createContext < {
    categories: Category[];
    setCategories: Dispatch < SetStateAction < Category[] >>;
} > ({
    categories: [],
    setCategories: () => {}
});

export const DialogContext = createContext < {
    isDialogOpen: boolean;
    setIsDialogOpen: Dispatch < SetStateAction < boolean >>;
} > ({
    isDialogOpen: false,
    setIsDialogOpen: () => {}
});

export const FilterModalContext = createContext < {
    isFilterModalOpen: boolean;
    setFilterModalOpen: Dispatch < SetStateAction < boolean >>;
} > ({
    isFilterModalOpen: false,
    setFilterModalOpen: () => {}
});

const ContextWrapper = ({children, SanityCategories} : {
    children: ReactNode;
    SanityCategories: Category[];
}) => {
    const [sidebarOpen,
        setSidebarOpen] = useState < boolean > (false);
    const [isCartOpen,
        setIsCartOpen] = useState < boolean > (false);
    const [isFilterModalOpen,
        setFilterModalOpen] = useState < boolean > (false);
    const [categories,
        setCategories] = useState < Category[] > (SanityCategories || []);
    const [isDialogOpen,
        setIsDialogOpen] = useState < boolean > (false);

    return (
        <Auth0Provider
            domain={`${process.env.AUTH0_ISSUER_BASE_URL}`}
            clientId={`${process.env.AUTH0_CLIENT_ID}`}
            authorizationParams={{
            redirect_uri: 'http://localhost:3000'
        }}>

            <SidebarContext.Provider
                value={{
                sidebarOpen,
                setSidebarOpen
            }}>
                <CategoriesContext.Provider
                    value={{
                    categories,
                    setCategories
                }}>
                    <CartContext.Provider
                        value={{
                        isCartOpen,
                        setIsCartOpen
                    }}>
                        <DialogContext.Provider
                            value={{
                            isDialogOpen,
                            setIsDialogOpen
                        }}>
                            <FilterModalContext.Provider
                                value={{
                                isFilterModalOpen,
                                setFilterModalOpen
                            }}>
                              
                            {children}
                            </FilterModalContext.Provider>
                        </DialogContext.Provider>
                    </CartContext.Provider>
                </CategoriesContext.Provider>
            </SidebarContext.Provider>
        </Auth0Provider>
    );
};

export default ContextWrapper;

export const useSidebarContext = () => useContext(SidebarContext);
export const useCartContext = () => useContext(CartContext);
export const useCategoriesContext = () => useContext(CategoriesContext);
export const useDialogContext = () => useContext(DialogContext);
export const useFilterModalContext = () => useContext(FilterModalContext);