function textValue(id){
    const text = document.getElementById(id).innerText
    const number = parseFloat(text)
    return number
}

function inputValue(id){
const value = document.getElementById(id).value
return value
}
textValue("available-money");

function showButton(id){
    document.getElementById("history-container").classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
} 

function resetInput(id){
  const reset=  document.getElementById(id).value = '';
  return reset
}
        

