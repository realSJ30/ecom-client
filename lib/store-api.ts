const ENV_NAME = "NEXT_PUBLIC_API_URL";

const getEnvValue = () => process.env[ENV_NAME]?.trim();

export const getStoreApiBaseUrl = () => {
  const value = getEnvValue();

  if (!value) {
    throw new Error(
      `Missing ${ENV_NAME}. Set it to the public ecom-admin API base URL, for example https://your-admin-domain.com/api/<storeId>.`
    );
  }

  try {
    const url = new URL(value);
    return url.toString().replace(/\/$/, "");
  } catch {
    throw new Error(
      `Invalid ${ENV_NAME} value "${value}". Expected an absolute URL like https://your-admin-domain.com/api/<storeId>.`
    );
  }
};

export const buildStoreApiUrl = (path: string) => {
  const normalizedPath = path.replace(/^\/+/, "");
  return new URL(normalizedPath, `${getStoreApiBaseUrl()}/`).toString();
};

const getBodyPreview = (body: string) =>
  body.replace(/\s+/g, " ").trim().slice(0, 160) || "<empty>";

export async function fetchStoreApiJson<T>(
  path: string,
  init?: RequestInit
): Promise<T> {
  const url = buildStoreApiUrl(path);
  const response = await fetch(url, {
    cache: "no-store",
    ...init,
  });

  const body = await response.text();
  const contentType = response.headers.get("content-type") ?? "";
  const preview = getBodyPreview(body);

  if (!response.ok) {
    throw new Error(
      `Store API request failed for ${url}: ${response.status} ${response.statusText}. Response preview: ${preview}`
    );
  }

  if (!contentType.toLowerCase().includes("application/json")) {
    throw new Error(
      `Store API returned non-JSON content for ${url} (content-type: ${contentType || "unknown"}). Response preview: ${preview}`
    );
  }

  try {
    return JSON.parse(body) as T;
  } catch {
    throw new Error(
      `Store API returned invalid JSON for ${url}. Response preview: ${preview}`
    );
  }
}
