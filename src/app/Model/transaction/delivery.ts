
export interface Delivery{

    totalDeliveryAmount: number;
    totalAmountDue: number; 
    deliveryStatus: String; 
    deliveryDate: Date;
    serialNo: number; 
    paymentMode: String; 
    totalQuantity: number; 
    totalWeight: number; 
    postedBy: String; 
    deliverBy: String; 
    dispatchTo: String; 
    paymentStatus: string;
    deliveryNo: string;


}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}