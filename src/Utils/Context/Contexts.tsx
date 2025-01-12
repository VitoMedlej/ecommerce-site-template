"use client";

import { TCartItem } from "@/Hooks/useCart";
import {Auth0Provider} from "@auth0/auth0-react";
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState
} from "react";
import { getLocalStorageItem } from "../Cart/localStorageUtils";


type Category = {
    title: string;
    subcategories ?: string[] 
};

export const SidebarContext = createContext < {
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch < SetStateAction < boolean >>;
} > ({
    sidebarOpen: false,
    setSidebarOpen: () => {}
});

export const QuickCartContext = createContext < {
    isCartOpen: boolean;
    setIsCartOpen: Dispatch < SetStateAction < boolean >>;
} > ({
    isCartOpen: false,
    setIsCartOpen: () => {}
});

export const CartContext = createContext < {
    cart: TCartItem[] | null | [];
    setCart: Dispatch<SetStateAction<TCartItem[] | null | []>>
} > ({
    cart: null,
    setCart: () => {}
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
    const [cart, setCart] = useState<TCartItem[] | null | []>(null);
        
    const [isCartOpen,
        setIsCartOpen] = useState < boolean > (false);
    const [isFilterModalOpen,
        setFilterModalOpen] = useState < boolean > (false);
    const [categories,
        setCategories] = useState < Category[] > (SanityCategories || []);
    const [isDialogOpen,
        setIsDialogOpen] = useState < boolean > (false);


        useEffect(() => {
          const LocalCart = getLocalStorageItem("cart"); 
            
          setCart(LocalCart);
          
        }, []);

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
                            cart,
                            setCart
                    }}>
                        <QuickCartContext.Provider 
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
                        </QuickCartContext.Provider>

                    </CartContext.Provider>
                </CategoriesContext.Provider>
            </SidebarContext.Provider>
        </Auth0Provider>
    );
};

export default ContextWrapper;

export const useSidebarContext = () => useContext(SidebarContext);
export const useCartContext = () => useContext(CartContext);
export const useQuickCartContext = () => useContext(QuickCartContext);
export const useCategoriesContext = () => useContext(CategoriesContext);
export const useDialogContext = () => useContext(DialogContext);
export const useFilterModalContext = () => useContext(FilterModalContext);