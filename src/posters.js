// The old sample used Netflix CDN images over HTTP. These local placeholders avoid
// broken mixed-content requests and do not imply rights to film artwork.
const colors = ['#b73552', '#315d89', '#71519b', '#267365', '#a05b32', '#53627d'];
export function posterFor(item) {
  const index = Math.abs(Number(item.id || 0)) % colors.length;
  const title = String(item.title || 'Movie').replace(/[&<>"']/g, '');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="340" viewBox="0 0 240 340"><rect width="240" height="340" fill="${colors[index]}"/><rect x="16" y="16" width="208" height="308" rx="8" fill="none" stroke="#ffffff88" stroke-width="2"/><text x="120" y="156" fill="white" font-size="18" font-family="Arial,sans-serif" text-anchor="middle">MOVIE LIST</text><text x="120" y="191" fill="white" font-size="14" font-family="Arial,sans-serif" text-anchor="middle">DEMO POSTER</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
