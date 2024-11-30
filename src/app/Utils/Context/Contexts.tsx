"use client";

import {Auth0Provider} from "@auth0/auth0-react";
import {createContext, useContext, useEffect, useState} from "react";
export const SidebarContext = createContext < any > ({});
export const CartContext = createContext < any > ({});
export const CategoriesContext = createContext < any > ([]);
export const DialogContext = createContext < any > ({});

const ContextWrapper = ({children, SanityCategories} : {
    children: React.ReactNode,
    SanityCategories: any
}) => {
    const [sidebarOpen,
        setSidebarOpen] = useState(false);
    const [isCartOpen,
        setIsCartOpen] = useState(false);
    const [categories,
        setCategories] = useState < any[] > (SanityCategories || []);
    const [isDialogOpen,
        setIsDialogOpen] = useState(false);

    return (
        <Auth0Provider
            domain="https://dev-5-mm94s5.us.auth0.com"
            clientId="jFUqF9XypNPMTUtKnIxxVd4sCRMthVyg"
            authorizationParams={{
            redirect_uri: 'localhost:3000/'
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