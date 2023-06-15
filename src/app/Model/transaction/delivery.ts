
export interface Delivery{

    deliveryNo: String; 
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

}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}