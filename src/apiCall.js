export const fetchSearchData = async (query) => {
  const url = `https://real-time-web-search.p.rapidapi.com/search?q=${query}&limit=15`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "54bab81812msh8843a43609ceaeap12368fjsnb6416b99c11d",
      "X-RapidAPI-Host": "real-time-web-search.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSearchImage = async (query) => {
  const url = `https://real-time-image-search.p.rapidapi.com/search?query=${query}&region=us&limit=15`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "54bab81812msh8843a43609ceaeap12368fjsnb6416b99c11d",
      "X-RapidAPI-Host": "real-time-image-search.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.data.slice(0, 14);
  } catch (error) {
    console.error(error);
  }
};

