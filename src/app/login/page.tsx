import { redirect } from 'next/navigation';

export default async function LoginPage() {
  // Redirect server-side to Auth0 login page
  if (typeof window === 'undefined') {
    // Replace with your Auth0 login URL
    const auth0LoginUrl = `https://dev-5-mm94s5.us.auth0.com/u/login?state=hKFo2SBCb1RDeFJ6YUFSNWRkV1VEYVZxZGZqcXRTVjlMNHZZc6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGpUYkV5anJLaW9nWk9BckdTdTh4aUtWOEY4UFoxQW1yo2NpZNkgakZVcUY5WHlwTlBNVFV0S25JeHhWZDRzQ1JNdGhWeWc`;
    redirect(auth0LoginUrl);
  }

  return null; // No need to render anything
}