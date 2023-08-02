
export interface Payment{
    paymentUuid: any;
    uuid: any;

    paidBy: string; 
    amountPaid: number; 
    paymentMode: string; 
    status: string; 
    paidTo: string; 
    paymentDate: Date;
    deliveryNi: string;


}



export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}