const dec=document.getElementById("dec")
const inc=document.getElementById("inc")
const val=document.getElementById("val")
const clr=document.getElementById("clr")
const xyz=document.querySelectorAll("input")
dec.addEventListener("click",()=>{
    val.textContent=parseInt(val.textContent) - 1
})
inc.addEventListener("click",()=>{
    val.textContent=parseInt(val.textContent) + 1
})
clr.addEventListener("click", ()=>{
    val.textContent=0;
})
function rangeIncrement(){
    if(xyz[0].value===""){
        return alert("Please enter any value to increment")
    }
    else{
        val.textContent=parseInt(val.textContent)+ parseInt(xyz[0].value)
        xyz[0].value=""
    }
}
function rangeDecrement(){
    if(xyz[1].value===""){
        return alert("Please enter any value to decrement")
    }
    else{
        val.textContent=parseInt(val.textContent)- parseInt(xyz[1].value)
        xyz[1].value=""
    }
}

