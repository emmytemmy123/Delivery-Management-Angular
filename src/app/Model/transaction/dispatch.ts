
export interface Dispatch{

    sender: String; 
    dispatchName: String; 
    receiverAddress: String; 
    receiverName: String; 
    totalAmount: number; 
    dispatchDate: Date;
    deliveryNo: string;


}



export interface  ApiResponse{
    dispatchName: any;
    message:string,
    code:string,
    data:any
}