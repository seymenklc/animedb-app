
export function disableAutoplay(url: string) {
   const parsedUrl = new URL(url);
   parsedUrl.searchParams.set('autoplay', '0');

   return parsedUrl.toString();
}