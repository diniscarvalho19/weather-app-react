export async function getRequest(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      throw new Error('Error fetching data:', error);
    }
  }
  