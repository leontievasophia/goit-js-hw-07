const inputElem=document.querySelector("#name-input");
const nameOutput=document.querySelector("#name-output");

inputElem.addEventListener("input", ()=>{
    const txt=inputElem.value.trim();
    if(txt===""){
        nameOutput.textContent="Anonymous";
    }
    else{
        nameOutput.textContent=txt;
    }


});