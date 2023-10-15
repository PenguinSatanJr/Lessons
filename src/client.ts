import request from "./request";

export const get = async <T>(url: string): Promise<T> => {
  const data = await request({ method: "GET", url });

  console.log("data", data);

  return data as T;
};
