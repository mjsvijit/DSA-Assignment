function getstr(str){ 
// const string = "a";
// const result = string.charCodeAt(0);
// console.log(`The ASCII value is: ${result}`);
//var chars = String.fromCharCode(97,66,67);
   let arr=[];
   let N=str.length;
   let mark=[];
   for(let i=0; i<N; i++){

    const string = str[i];
    const result = string.charCodeAt(0);
     arr.push(result)
     mark.push(-1);
   }

   for(let i=0; i<N; i++){
    //    console.log(arr);
       let val=arr[i];
       if(arr[i]%2==0 && i != N-1){

           let find=arr[i]%7;
           
           if(mark[i+1]==-1){ 
           
            arr[i+1]=arr[i+1]+find;
            mark[i+1]=0;
           
            let get= String.fromCharCode(arr[i+1]);
           
            if(get>=0 || get<=127){
                
            }else{
               
                    arr[i+1]=83;
                
            }
           }
       }else if( arr[i] % 2 === 1){

        let find=arr[i]%5;

        if(mark[i-1]== -1 ){ 
        
        arr[i-1]=arr[i-1]-find;
        
        let get= String.fromCharCode(arr[i-1]);
        const string = get;
        const result = string.charCodeAt(0);
       
        if(result>=0|| result<=127 ){
           
        }else{
            arr[i-1]=83;
        }


         mark[i-1]=0;
        }
       }
   }
 
  let string="";
   for(let i=0; i<N; i++){
    let get= String.fromCharCode(arr[i]);
    string+=get;
   }

return  string;
}
console.log(getstr("sHQen}"))
