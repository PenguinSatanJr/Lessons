import HttpError from "./http-error";

export type RequestParams = {
    url: string;
    method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
};

const request = async ({ url, method }: RequestParams) => {
    const response = await fetch(url, {
        method,
    });

    if (!response.ok) {
        const { statusText, status } = response;

        throw new HttpError(status, statusText);
    }
    if (response.status === 204) {
        return null;
    }
    return response.json();
};

export default request;
