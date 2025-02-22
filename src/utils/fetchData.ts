export const fetchData = async (apiUrl: string) => {
  try {
    const response = await fetch(apiUrl);
    if (response.status === 500) {
      throw new Error("asldfjnafñglnasñljn");
    } else if (response.status === 404) {
      throw new Error("Not Found");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
};
