import type {Metadata}
from "next";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import SideBar from "@/Components/SideBar/SideBar";
import ContextWrapper from "./Utils/Context/Contexts";
import QuickCart from "@/Components/QuickCart/QuickCart";
import PerksSection from "@/Components/PerksSection/PerksSection";
import {client} from "@/functions/sanityClient";

export const metadata : Metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};

export async function fetchCategories(revalidate?: number) {
    const categories = await client.fetch(`*[_type == "category"] {
      title,
      subcategories
    }`, {}, {
        cache: "force-cache",
        next: {
            revalidate
        }
    });
    return categories;
}

export async function fetchAnnouncements(revalidate?: number) {
    const announcements = await client.fetch(`*[_type == "announcement"] {
      message
    }`, {}, {
        cache: "force-cache",
        next: {
            revalidate
        }
    });
    return announcements;
}

export default async function RootLayout({children} : {
    children: React.ReactNode
}) {
    const categories = await fetchCategories(1000);
    const announcements = await fetchAnnouncements(1000);
    return (
        <html lang="en">
            <body>
                <ContextWrapper SanityCategories={categories}>
                    <Navbar SanityAnnouncements={announcements}/>
                    <SideBar/>
                    <QuickCart/> {children}
                    <PerksSection/>
                    <Footer/>
                </ContextWrapper>
            </body>
        </html>
    );
}
