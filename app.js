 let button =document.querySelectorAll(".btn")
let input=document.querySelector("input");



let string="";
Array.from(button).forEach((button)=>{
button.addEventListener("click",(e)=>{
      if(e.target.innerHTML == "="){
           string=eval(string)                            //   performing The All Opration 
           input.value=string;

      }
         else if(e.target.innerHTML == "AC"){
                string=" ";
             input.value=string;        //   to Get Value Input tag 

      }
      else if(e.target.innerHTML == "DEL"){
         string=" ";
      input.value=string;        //   to Get Value Input tag 

}
         else{
            console.log(e.target)
            string=string+e.target.innerHTML;                 // Adding Inner Html In Input TAg 
            input.value=string;
      }
 })
 })

 


  