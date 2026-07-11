// Canonical-host middleware: queensbingo.com -> www.queensbingo.com (301).
// The _redirects host rules cover most paths, but Pages does not apply them
// to the bare root on a custom domain, so this middleware guarantees the
// apex root (and anything else that slips through) redirects too.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'queensbingo.com') {
    url.hostname = 'www.queensbingo.com';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
