// only vanilla js use

// vlu function 
function vlu(vlu){
    document.querySelector("#screen").value += vlu;
}
// equal function 
function equal(){
    let result = eval(document.querySelector("#screen").value);
    console.log(result);
     document.querySelector("#screen").value =result;

}
// clr function 
function clr(clr){
    document.querySelector("#screen").value = clr ;
}
