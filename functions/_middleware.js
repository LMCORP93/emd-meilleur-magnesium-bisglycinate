export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'emd-meilleur-magnesium-bisglycinate.pages.dev') {
    url.hostname = 'meilleur-magnesium-bisglycinate.fr';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
