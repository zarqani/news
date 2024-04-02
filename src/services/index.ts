import { getQueryParams } from "@/libs/utils";

export async function serviceRequest({
  url,
  body,
  params,
  headers,
  method,
}: {
  url: string;
  params?: { [key: string]: any };
  body?: { [key: string]: any };
  headers?: any;
  method?: string;
}) {
  try {
    const requestOptions = {
      method,
      ...(body && { body: JSON.stringify(body) }),
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };
    const fetchUrl = `${
      url?.includes("https") ? url : `${process.env.NEXT_PUBLIC_API}${url}`
    }${params ? `?${getQueryParams(params)}` : ""}`;

    const response = await fetch(fetchUrl, requestOptions).then((response) =>
      response.json()
    );

    return response;
  } catch (error) {
    console.info("Error:", error);
  }

  return;
}

export const get = async (
  url: string,
  params?: { [key: string]: any },
  headers?: any
) => await serviceRequest({ url, method: "GET", params, headers });

export const post = async (
  url: string,
  body?: { [key: string]: any },
  headers?: any
) => await serviceRequest({ url, method: "POST", body, headers });

export const put = async (
  url: string,
  body?: { [key: string]: any },
  headers?: any
) => await serviceRequest({ url, method: "PUT", body, headers });

export const deleteApi = async (url: string, headers?: any) =>
  await serviceRequest({ url, method: "DELETE", headers });

export const api = {
  post,
  get,
  put,
  delete: deleteApi,
};
