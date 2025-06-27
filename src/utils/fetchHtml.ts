export async function fetchHtml(url: string): Promise<string> {
    const res = await fetch(url);
    return await res.text();
}