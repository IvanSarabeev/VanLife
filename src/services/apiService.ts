const URL = "/api/vans";

export const fetchVansData = async (sortBy?: string, sortOrder?: string) => {
  try {
    // const response = await fetch(URL);
    const response = await fetch(
      `${URL}?sortBy=${sortBy}&sortOrder=${sortOrder}`
    );

    if (!response.ok) {
      throw new Error(
        `Status: ${response.status}, statusText: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Unexpected Error:${error}`);
  }
};

export const fetchVanIdData = async (id: string) => {
  try {
    const response = await fetch(`${URL}/${id}`);

    if (!response.ok) {
      throw new Error(
        `Status: ${response.status}, statusText:${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Unexpected Error:${error}`);
  }
};

export const loginUser = async (credential: {
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `status:${response.status}, statusText:${response.statusText}`
      );
    }

    return data;
  } catch (error) {
    throw new Error(`Unexpected error ${error}`);
  }
};
