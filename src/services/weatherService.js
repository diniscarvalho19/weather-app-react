export async function getRequest(url, maxRetries = 3, retryDelay = 1000) {
  let retries = 0;
  while (retries < maxRetries) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      retries++;
      if (retries < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      } else {
        throw new Error("Max retries reached. Unable to fetch data.");
      }
    }
  }
}
