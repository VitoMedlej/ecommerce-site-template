import { fetchCategories, fetchAboutPage, fetchSlides, fetchCardSection } from "@/Utils/functions/sanityFetcher";
import { NextRequest, NextResponse } from "next/server";

// Map type to their corresponding fetch function
const fetchFunctions: Record<string, (revalidate?: number) => Promise<unknown>> = {
  categories: fetchCategories,
  about: fetchAboutPage,
  slides: fetchSlides,
  cardSection: fetchCardSection,
};

// Default revalidation time (in seconds)
const DEFAULT_REVALIDATE = 60;

export async function GET(req: NextRequest, { params }: { params: { type: string } }) {
  const { type } = params;

  if (!type || !fetchFunctions[type]) {
    return NextResponse.json(
      { error: "Invalid type. Supported types: categories, about, slides, cardSection." },
      { status: 400 }
    );
  }

  const revalidate = req.nextUrl.searchParams.get("revalidate")
    ? parseInt(req.nextUrl.searchParams.get("revalidate") || "0", 10)
    : DEFAULT_REVALIDATE;

  try {
    const data = await fetchFunctions[type](revalidate);

    if (!data) {
      return NextResponse.json(
        { error: `No data found for type: ${type}` },
        { status: 404 }
      );
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error(`Error fetching data for type: ${type}`, error);
    return NextResponse.json(
      { error: `Failed to fetch data for type: ${type}` },
      { status: 500 }
    );
  }
}
