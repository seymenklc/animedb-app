export function disableAutoplay(url: string | undefined) {
   if (!url) return url;

   const parsedUrl = new URL(url);
   parsedUrl.searchParams.set('autoplay', '0');

   return parsedUrl.toString();
}

export function loadState(key: string) {
   try {
      const serializedState = localStorage.getItem(key);
      if (!serializedState) return undefined;
      return JSON.parse(serializedState);
   } catch (e) {
      return undefined;
   }
}

export async function saveState(state: any, key: string) {
   try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
   } catch (e) {
      // Ignore
   }
}
