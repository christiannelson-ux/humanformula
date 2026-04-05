// Cloudflare Pages Function: proxies WHOOP API GET requests
export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const path = url.pathname.replace(/^\/whoop-api\//, '');
  const target = `https://api.prod.whoop.com/developer/v1/${path}${url.search}`;
  const resp = await fetch(target, {
    method: 'GET',
    headers: {
      'Authorization': context.request.headers.get('Authorization') || '',
      'Content-Type': 'application/json',
    },
  });
  return new Response(await resp.text(), {
    status: resp.status,
    headers: { 'Content-Type': 'application/json' },
  });
}
