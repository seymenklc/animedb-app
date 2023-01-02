export function disableAutoplay(url: string | undefined) {
   if (!url) return url;

   const parsedUrl = new URL(url);
   parsedUrl.searchParams.set('autoplay', '0');

   return parsedUrl.toString();
}

export function capitalizeFirstLetter(string: string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}

export function loadState(key: string) {
   const serializedState = localStorage.getItem(key);

   if (!serializedState) return undefined;

   return JSON.parse(serializedState);
}

export async function saveState(state: any, key: string) {
   const serializedState = JSON.stringify(state);

   localStorage.setItem(key, serializedState);
}
