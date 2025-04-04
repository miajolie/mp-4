// "use client";

// import { useSearchParams } from "next/navigation";
// import {Suspense, useEffect, useState} from "react";
// import ArtDisplay from "@/components/ArtDisplay";
// import { Artiste } from "@/types/artist";


// export default function ArtistPre(){
//     const searchParams = useSearchParams();
//     const name = searchParams.get('name');

//     //changed any to Artists and null to []
//     const [data, setData]= useState<Artiste>([]);
//     const [error, setError]= useState<string | null>(null);

//     useEffect(()=>{
//         if (!name) return;

//         const fetchData = async () => {
//             try{

//                 const res = await fetch (`/api/getmuseumdata?name=${name}`);
//                 if (!res.ok){
//                     throw new Error ("Failed to fetch artist");
//                 }
//                 const json = await res.json();
//                 setData(json);
//             }catch (err){
//                 // // setError("Unknown Error");
//                 // throw new Error ("Unknown Error");
//                 console.error(err);
//                 setError("Unknown Error");
//             }
//         };
//         fetchData();
//     }, [name]);

//     if (error){
//         return <div> Error: {error}</div>
//     }

//     if(!data){
//         return <div>Finding your artist...</div>;
//     }
//     console.log(data)
//     return (
//         <Suspense fallback={<div>Loading art display...</div>}>
//             <ArtDisplay inputArt = {data}/>
//         </Suspense>
        
//     );
// }
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import ArtDisplay from "@/components/ArtDisplay";
import { Artiste } from "@/types/artist";


function ArtDisplayWrapper({ data }: { data: Artiste }) {
  return <ArtDisplay inputArt={data} />;
}

export default function ArtistPre() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");


  const [data, setData] = useState<Artiste | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!name) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/getmuseumdata?name=${name}`);
        if (!res.ok) {
          throw new Error("Failed to fetch artist");
        }
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setError("Unknown Error");
      }
    };

    fetchData();
  }, [name]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Finding your artist...</div>;
  }

  return (
    <Suspense fallback={<div>Loading art display...</div>}>
      <ArtDisplayWrapper data={data} />
    </Suspense>
  );
}

