
export function disableAutoplay(url: string | undefined) {
   if (!url) return url;
   const parsedUrl = new URL(url);
   parsedUrl.searchParams.set('autoplay', '0');

   return parsedUrl.toString();
}