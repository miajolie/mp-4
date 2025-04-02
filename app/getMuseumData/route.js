import {Response} from "@/.next/server";

export async function GET(){
    try{

      const res = await fetch (
        `https://api.harvardartmuseums.org/object?apikey=${process.env.MUSEUM_API_KEY}`
        );
        
        if (!res.ok) {
        throw new Error(`Harvard API request failed: ${res.statusText}`);
    }
    const data = await res.json();
    return Response.json(data);
    

  } catch (err) {
  return Response.json({ error: err.message }, { status: 500 });
  }
}