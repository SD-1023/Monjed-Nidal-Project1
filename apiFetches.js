export const topicsFetch = async () => {
  try {
    const response = await fetch("https://tap-web-1.herokuapp.com/topics/list");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching topics data:", error);
  }
};

export const searchFetch = async (searchTerm) => {
  try {
    const response = await fetch(
      `https://tap-web-1.herokuapp.com/topics/list?phrase=${searchTerm}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching searched topics:", error);
  }
};

export const fetchTopicDetails = async (id) => {
  try {
    const response = await fetch(
      `https://tap-web-1.herokuapp.com/topics/details/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching details:", error);
  }
};
