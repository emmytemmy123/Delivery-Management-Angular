
export interface Vehicle {

    brand: String;
    model: String ;
    colour: String;
    plateNo: String; 
    driver: String;


}

export interface  ApiResponse{
  message:string,
  code:string,
  data:any
}
