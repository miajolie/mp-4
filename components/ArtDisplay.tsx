"use client";
import {PersonStats} from "@/types/artist"

import ArtPreview from "./ArtPreview";



interface ArtDisplayProps {
    inputArt: PersonStats[]; 
  }
  
  export default function ArtDisplay({ inputArt }: ArtDisplayProps) {

    return (
      <div>
        {inputArt.map((record) => (
          <ArtPreview key={record.id} artist = {record}/>
        ))}
      </div>
    );
  }