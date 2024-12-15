import { NextRequest, NextResponse } from "next/server";


export async function middleware(req: NextRequest) {
    console.log('test works')
  return NextResponse.next();
}
