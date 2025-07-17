import { NextRequest, NextResponse } from 'next/server';


export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    console.log("============================================");
    console.log("MIDDLEWARE HAS STARTED!: " + url.pathname);
    console.log("COOKIES: " + request.cookies);
    console.log("============================================");

    if(url.pathname === '/never') {
        url.pathname = '/redirected-never';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

// This tells Next.js to apply the middleware on all routes.
export const config = {
    matcher: ['/never']
};
