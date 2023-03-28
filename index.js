let myButton = document.getElementById('toDoButton');
let inputField = document.getElementById('inputField');
let toDoContainer1 = document.getElementById('toDoContainer');

myButton.addEventListener('click',function(){
    var buttonList = document.createElement('button'); 
    var paragrpah = document.createElement('p');
    var parent = document.createElement('div');

    if(inputField.value !== ""){
        toDoContainer1.appendChild(parent);
        parent.classList.add('list');
        parent.appendChild(paragrpah);
        parent.appendChild(buttonList);
        buttonList.innerHTML = "-";
        buttonList.classList.add('buttonList');
        paragrpah.innerHTML = inputField.value;
        paragrpah.classList.add('paragraph');
        inputField.value = ""
    }

   buttonList.addEventListener('click',function(){
    toDoContainer1.removeChild(parent)
   })
});
