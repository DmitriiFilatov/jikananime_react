import axios from "axios";

const mainUrl = "https://api.jikan.moe/v4";

export const searchItems = async (category, title) => {
  const results = await axios.get(
    `${mainUrl}/${category}?q=${title}&sfw&min_score=6`
  );
  return results.data.data;
};

export const fetchTopItems = async (category) => {
  const { data } = await axios.get(`${mainUrl}/top/${category}`);

  return data.data;
};
