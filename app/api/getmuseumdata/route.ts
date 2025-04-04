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
    
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Unknown Error' }, { status: 500 });
  }
}