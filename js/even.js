
document.getElementById("blog-btn").addEventListener('click' , function(){
    window.location.href="blog.html"
})


document.getElementById("Donate-btn").addEventListener('click',function(){
    const input = parseFloat(document.getElementById("input-field").value)
    const headMoney = parseFloat(textValue("head-money"))
    const availableMoney = textValue("available-money")
    const city = document.getElementById("noakhali").innerText
    
   if(
    isNaN(input)===true  || input <=0 ){
    return  alert("Please Provide a Amount of Money")
   }
   else{
   const money =  input + availableMoney;
  document.getElementById("available-money").innerText = money
  const update = headMoney - input
   document.getElementById("head-money").innerText = update
 

    const container= document.getElementById("history-container");
    const p = document.createElement('p')
    const h = document.createElement('p')

    h.innerText = `Date ${new Date()}
    `
    h.classList.add('text-base',"text-gray-400")
    p.innerText = `${input}Taka is ${city}
    `
   
    p.classList.add('bg-slate-100','container','mx-auto','text-2xl','font-bold','mt-12','text-black','p-8','rounded-md','border-2')
 container.appendChild(p) 
 p.appendChild(h)

}})

// donation
document.getElementById("donate").addEventListener("click" ,function(){
    const donateBtn = document.getElementById("donate").classList.remove("bg-slate-50","border");
    const donateTab = document.getElementById("donate").classList.add("bg-lime-400","border-0");
    const sectionHidden = document.getElementById("donation-section").classList.remove("hidden");
   const history = document.getElementById("donate").classList.add("bg-lime-400")
   const historyTab = document.getElementById("history-btn").classList.remove("bg-lime-400","border-0")
   const historyBtn = document.getElementById("history-btn").classList.add("bg-slate-50","border-2")
 document.getElementById("history-container").classList.add('hidden')
})

// history
document.getElementById("history-btn").addEventListener("click" ,function(){
   const historyBtn = document.getElementById("history-btn").classList.remove("bg-slate-50","border")
   const historyTab = document.getElementById("history-btn").classList.add("bg-lime-400","border-0");
   const sectionHidden = document.getElementById("donation-section").classList.add("hidden")
   const donate = document.getElementById("donate").classList.remove("bg-lime-400","border-0")
   const donateBtn = document.getElementById("donate").classList.add("bg-slate-50","border-2")
   showButton("history-container");
})


// section 2


document.getElementById("Donate-btn-2").addEventListener('click',function(){
    const input = parseFloat(document.getElementById("input-field-2").value)
    const headMoney = parseFloat(textValue("head-money"))
    const availableMoney = textValue("available-money-2")
    const city = document.getElementById("feni").innerText
    
   if(
    isNaN(input)===true  || input <=0 ){
    return  alert("Please Provide a Amount of Money")
   }
   else{
   const money =  input + availableMoney;
  document.getElementById("available-money-2").innerText = money
  const update = headMoney - input
   document.getElementById("head-money").innerText = update
   document.getElementById("Donate-btn").classList.add = showButton("my_modal_5");
  
   } 
   const h = document.createElement('p')
   h.innerText = `Date ${new Date()}
   `
   h.classList.add('text-base',"text-gray-400")
    const container= document.getElementById("history-container");
    const p = document.createElement('p')
    p.innerText = `${input}Taka is ${city}`
    p.classList.add('bg-slate-100','container','mx-auto','text-2xl','font-bold','mt-12','text-black','p-8','rounded-md','border-2')
 container.appendChild(p)
 p.appendChild(h)

})


// section 3

document.getElementById("Donate-btn-3").addEventListener('click',function(){
    const input = parseFloat(document.getElementById("input-field-3").value)
    const headMoney = parseFloat(textValue("head-money"))
    const availableMoney = textValue("available-money-3")
    const city = document.getElementById("aid").innerText
    
   if(
    isNaN(input)===true  || input <=0 ){
    return  alert("Please Provide a Amount of Money")
   }
   else{
   const money =  input + availableMoney;
  document.getElementById("available-money-3").innerText = money
  const update = headMoney - input
   document.getElementById("head-money").innerText = update

   document.getElementById("Donate-btn-3").classList.add = showButton("my_modal_5");
   } 
   const h = document.createElement('p')
   h.innerText = `Date ${new Date()}
   `
   h.classList.add('text-base',"text-gray-400")
    const container= document.getElementById("history-container");
    const p = document.createElement('p')
    p.innerText = `${input}Taka is Donate for ${city}`
    p.classList.add('bg-slate-100','container','mx-auto','text-2xl','font-bold','mt-12','text-black','p-8','rounded-md','border-2')
 container.appendChild(p)
 p.appendChild(h)

})
