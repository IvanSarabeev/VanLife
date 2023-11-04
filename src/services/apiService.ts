const URL = "/api/vans";

export const fetchVansData = async () => {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(
        `Status: ${response.status}, statusText: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchVanIdData = async (id: string) => {
  try {
    const response = await fetch(`${URL}/${id}`);

    if (!response.ok) {
      throw new Error(
        `Status: ${response.status}, StatusText:${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
