// Without a defined matcher, this one line applies next-auth

import { redirect } from "next/dist/server/api-utils";

// to the entire project
export { default } from "next-auth/middleware";

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
// export const config = { matcher: [""] };

// a matcher for all routes starting with /admin
export const config = {
  matcher: ["/admin"],
};
