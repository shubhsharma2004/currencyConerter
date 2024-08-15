const Base_url="https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json";
const dropdowns=document.querySelector(".dropdown select");
 const fromCurr=document.querySelector(".from select");
 const toCurr=document.querySelector(".to select ");
 const msg=document.querySelector(".msg");

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
      
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from" && currCoder==="USD")
            newOption.selected="selected";
         elseif(select.name==="to" && currCode==="INR")
         newOption.selected="selected";
        select.append(newOption);
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target)
    });
}
  const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=document.parentElement.querySelector("img");
    img.src=newSrc;
  }
   const updateExchangeRate =async()=>{
    let amount=doucument.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal===""|| amtVal<1){
        amtVal=1;
        amount.value="1";
    }
  //  console.log(fromCurr.value,toCurr.value);
    const URL=`${Base_url}/${fromCurr.toLowerCase()}/${toCurr.toUpperCase()}.json`;
    let response= await fetch(URL);
    let date=await response.json();
    let rate=date[toCurr.value.lowerCase()];
   

    let finalAmount=amount*rate;
    msg.innerText=`${amtValue}/${fromCurr.value} =${finalAmount}/${toCurr.value}`;
  }

    window.addEventListener("load",()=>{
        updateExchangeRate();
     });
     btn.addEventListener("click",(evt)=>{
        evt.preventDefault(); 
        updateExchangeRate();
         });
