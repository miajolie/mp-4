import { PersonStats} from "@/types/artist";
import React from "react";

export default function ArtPreview({artist, }: {artist: PersonStats}){
    return(
        <div className="art-preview" style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>

            <h2>{artist && artist.displayname.length > 0 ? artist.displayname : "Unknown Artist"}</h2>
            <p>Gender: {artist.gender}</p>
            <p>Display Date: {artist.displaydate || "Unknown"}</p>
            <p>Object Count: {artist.objectcount}</p>
        

    </div>
    )
}