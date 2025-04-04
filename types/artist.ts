export type Artiste = PersonStats[];

export interface PersonStats {


    id: string;
    gender: string;
    objectcount: number;
    displaydate: string;
    datedend: number | null;
    url: string;
    displayname : string

};