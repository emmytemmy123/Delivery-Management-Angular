export interface Product {

      productName:string;
      quantity:number;
      model: string;
      colour: String;
      weight: number;
      photo: String;
      receiverAddress: String;
      receiverName:string;
      status:string;
      amount:number;
      description: String;

}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}

