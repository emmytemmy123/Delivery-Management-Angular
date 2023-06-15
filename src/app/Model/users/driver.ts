

export interface Driver {

    uuid?:string;
    name:string;
    email:string;
    phone:number;
    address:string;
    photo:string;
    gender:string;
    country:string;
    city:string;
    nin:number;
    username:string;
    password:string;
    dateCreated?:string;
    lastModified?:string;
}


export interface ApiResponse{
    message:string,
    code:string,
    data:any
}

