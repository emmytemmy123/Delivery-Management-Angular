export interface Document{
      file_type:String;
      file_name:String;
      file_size:String;
      description:String;
      record_id:String;
}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}