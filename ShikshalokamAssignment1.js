function getstr(str,x){
 
   let N=str.length;
   let store="";
   let count=-1;
   let arr=[];
   for(let i=0; i<N; i++){
       let val="";
       for(let j=i; j<N; j++){
           val+=str[j];
           let len=val.length;

           if(x === 1 && len === 1){
              return val;
           }else if(len === x && len > 1 && val[0] == val[len-1] ){
               return val;
           }else if(len >= x && len > 1 && val[0] == val[len-1]){
               if(count==-1){
                   store=val;
                   count=len;
               }else if(len<count){
                  store=val;
                  count=len;
               }
           }
       }
   }
   if(count===-1){ 
   return "not-found"
   }else{
       return store;
   }
}

console.log(getstr("abccdbacca",3));