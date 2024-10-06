import axios from "axios";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const accessKey = config.private.unsplashAccessKey;
  const baseURL = config.private.unsplashBaseURL

  const { search, page, perPage } = getQuery(event);

  if (!search) {
    return { error: 'Search term is required' };
  }

  try {
    const response = await axios.get(`${baseURL}/search/photos`, {
      params: {
        query: search,
        client_id: accessKey,
        page: page,
        per_page: perPage
      },
    });

    // Return the data received from the API
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Unsplash:', error);
    return { error: 'Failed to fetch data from Unsplash' };
  }


});