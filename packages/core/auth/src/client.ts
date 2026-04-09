// ============================================================
// @breeyard/auth/client — browser-side better-auth client
// ============================================================

import { createAuthClient } from 'better-auth/svelte';

export const authClient = createAuthClient({
  baseURL: typeof window !== 'undefined' ? window.location.origin : '',
});

export const { signIn, signOut, signUp, useSession } = authClient;
