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
    // Set the response status code to 400 in case of an error
    event.res.statusCode = 400;
    const errorMessage = (error as Error).message || 'Failed to fetch data from Unsplash';

    return { error: errorMessage };
  }


});