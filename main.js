function change()
{
    var header = document.getElementById('title');
    header.classList.toggle('colorText');
   
}
function input()
{
    var inputChange=document.getElementById('fname');
    if(inputChange.value    =='')
        inputChange.classList.add('borderColor');
    else 
        inputChange.classList.remove('borderColor');
}