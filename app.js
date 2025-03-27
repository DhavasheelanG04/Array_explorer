
let inputarr=document.getElementById("user_input").value;


function reverse_fun(){
    document.getElementById("reverse");
    const arr1=inputarr.split(",");
    let rev="";
    for(let i=arr1.length-1;i>=0;i--){
        rev+=arr[i];
    }
    document.getElementById("output")."reversed values: "+console.log(rev);
}