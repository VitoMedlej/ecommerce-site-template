"use client";

import {Auth0Provider} from "@auth0/auth0-react";
import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";



// Define types for the contexts
type Category = {
    id: string;
    name: string;
  };
  
  export const SidebarContext = createContext<{
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  }>({
    sidebarOpen: false,
    setSidebarOpen: () => {},
  });
  
  export const CartContext = createContext<{
    isCartOpen: boolean;
    setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  }>({
    isCartOpen: false,
    setIsCartOpen: () => {},
  });
  
  export const CategoriesContext = createContext<{
    categories: Category[];
    setCategories: Dispatch<SetStateAction<Category[]>>;
  }>({
    categories: [],
    setCategories: () => {},
  });
  
  export const DialogContext = createContext<{
    isDialogOpen: boolean;
    setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  }>({
    isDialogOpen: false,
    setIsDialogOpen: () => {},
  });
  
  const ContextWrapper = ({
    children,
    SanityCategories,
  }: {
    children: ReactNode;
    SanityCategories: Category[];
  }) => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
    const [categories, setCategories] = useState<Category[]>(SanityCategories || []);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    
    return (
        <Auth0Provider
            domain="https://dev-5-mm94s5.us.auth0.com"
            clientId="jFUqF9XypNPMTUtKnIxxVd4sCRMthVyg"
            authorizationParams={{
            redirect_uri: 'http://localhost:3000'
            // redirect_uri: window?.location.origin
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

                            {children}
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