// Cloudflare Pages Function: proxies WHOOP OAuth token exchange
export async function onRequestPost(context) {
  const body = await context.request.text();
  const resp = await fetch('https://api.prod.whoop.com/oauth/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  return new Response(await resp.text(), {
    status: resp.status,
    headers: { 'Content-Type': 'application/json' },
  });
}
