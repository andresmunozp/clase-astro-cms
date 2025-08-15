import { STRAPI_URL , getSecret } from "astro:env/server";
const STRAPI_TOKEN = getSecret('STRAPI_TOKEN')

const apiURL = `${STRAPI_URL}/api`;

interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
  }: Props): Promise<T> {

    if (endpoint.startsWith('/')) {
        endpoint = endpoint.slice(1);
    }

    const url = new URL(`${apiURL}/${endpoint}`);

    if (query) {
        Object.entries(query).forEach(([key, value]) => {
        url.searchParams.append(key, value);
        });
    }

    const res = await fetch(url.toString(), {
        headers: {
        'Authorization': `bearer ${STRAPI_TOKEN}`
        },
    });

    if(!res.ok) {
        throw new Error(`Error fetching data from Strapi: ${res.status} ${res.statusText}`);
    }

    let data = await res.json();

    if (wrappedByKey) {
        data = data[wrappedByKey];
    }

    if (wrappedByList) {
        data = data[0];
    }

    return data as T;
}