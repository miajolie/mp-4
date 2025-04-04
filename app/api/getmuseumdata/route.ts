import { NextResponse } from 'next/server';
import { fetchArtistData } from '@/lib/route'; 

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');

  
  if (!name) {
    return NextResponse.json({ error: 'No name provided' }, { status: 400 });
  }

  try {
    const data = await fetchArtistData(name); 


    return NextResponse.json(data.records);
    
  } catch {
      return NextResponse.json({ error: 'Unknown Error' }, { status: 400 });
  }
}