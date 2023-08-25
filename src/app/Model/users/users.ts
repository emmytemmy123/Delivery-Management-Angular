

export class Users {

    userCategory!: string;
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
    driverLicense!: string;
   
}


export class ApiResponse{
    message!: string;
    code!: string;
    data:any;
    status!: string;
}

