"use server";

export async function fetchArtistData(name: string) {
  const apiKey = process.env.MUSEUM_API_KEY;

  const apiUrl = `https://api.harvardartmuseums.org/person?apikey=${apiKey}&q=displayname:${name}`;
  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch artist, status: ${res.status}`);
  }
  return res.json();
}