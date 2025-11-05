import pb from "../../pocketbase/pb";

export const onRequest = async (context, next) => {
  const cookie = context.cookies.get("pb_auth")?.value;
  
  if (cookie) {
    pb.authStore.loadFromCookie(cookie); // Charge les infos d'auth depuis le cookie
    if (pb.authStore.isValid) {
      // Si le token est valide, ajoute les données utilisateur dans Astro.locals
      context.locals.user = pb.authStore.record;
    }
  }

  // === Routes API ===
  if (context.url.pathname.startsWith('/api/')) {
    // Exemptions : login, signup, logout
    const publicAPIs = ['/api/login', '/api/signup', '/api/logout'];
    if (!context.locals.user && !publicAPIs.includes(context.url.pathname)) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // ✅ Important : on return le next()
    return await next();
  }

  // === Routes classiques ===
  if (!context.locals.user) {
    const publicPages = ['/', '/login', '/signup'];
    if (!publicPages.includes(context.url.pathname)) {
      return Response.redirect(new URL('/login', context.url), 303);
    }
  }

  // ✅ Et surtout : toujours retourner next()
  return await next();
};
