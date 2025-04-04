"use client";


import {useState} from "react";
export default function Home(){

  
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 
    to-pink-300 p-4 flex items-center justify-center">
      <div className="w-full max-w-md space-y-4">
        
          <input
              name="person"
              value = {name}
              placeholder="Enter artist..."
              className="border-2 border-gray rounded-md bg-green-100 p-2"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <a href ={`/artistpre/?name=${name}`}> GO! </a>

        
      </div>
      
    
    </div>
  );

}