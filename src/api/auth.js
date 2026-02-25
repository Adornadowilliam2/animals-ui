import { url } from "./configuration";

export const createPet = async (body) => {
    const response = await fetch(`${url}/pets`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    return await response.json();
};


export const getPets = async () => {
  const response = await fetch(`${url}/pets`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return await response.json(); 
};