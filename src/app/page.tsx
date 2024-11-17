
import Image from "next/image";
import styles from "./page.module.css";
import { Grid2 } from "@mui/material";
import Hero from "@/Components/Hero/Hero";
import ProductSection from "@/Components/ProductSection/ProductSection";
import CategorySection from "@/Components/CategorySection/CategorySection";

export default function Home() {
  return (
    <>
          <Hero />
          <ProductSection/>
          <CategorySection/>
    </>
  );
}
