"use server"
export async function shortenUrl(url: string) {
  try {
    const formattedUrl = url.startsWith("http") ? url : `https://${url}`;
    const apiUrl = new URL("https://frequent-beverly-nafis-sadiq-9e253d94.koyeb.app/short");
    apiUrl.searchParams.append("url", formattedUrl);

    const response = await fetch(apiUrl.toString(), { method: "POST" });

    if (!response.ok) {
      throw new Error("Failed to shorten URL");
    }

    const resp = await response.json();
    return resp.data.short_url;
  } catch (error) {
    console.error("Error shortening URL:", error);
    throw new Error("Failed to shorten URL");
  }
}
