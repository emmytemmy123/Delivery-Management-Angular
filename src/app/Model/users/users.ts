

export class Users {


    uuid!: string;
    accountType!: string;
    name!: string;
    email!: string;
    phone!: number;
    address!: string;
    photo!: string;
    gender!: string;
    country!: string;
    city!: string;
    nin!: number;
    username!: string;
    password!: string;
   
}


export class ApiResponse{
    message!: string;
    code!: number;
    data:any;
}

