/*
*****
*   *
*  *
* * 
*    


*/

let n=5;
for(i=1;i<=n;i++){
    let row=""
    for(j=1;j<=n;j++){
        if(i===1 || j===1 || i+j===n+1){
            row+="*"

        }else{
            row+=" "
        }
        
        
    }
    console.log(row)
}
