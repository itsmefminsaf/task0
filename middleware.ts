import { NextRequest } from "next/server";
import Auth0 from "./lib/auth0";

const middleware = async (req: NextRequest) => {
  return Auth0.middleware(req);
};

export default middleware;

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
