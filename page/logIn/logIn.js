

function validate(   inputElement)
{
    inputElement.forEach(function(rule){
        var fieldElement=document.querySelector(rule.selector); // form sẽ nhập 
        var errorForm=fieldElement.parentElement;           // lấy cha     
        // phần chữ dưới form thông báo error message
        var errorMessage=fieldElement.parentElement.querySelector('.form-message'); 
        fieldElement.onblur=function(){
          if(rule.test(fieldElement.value))
          {
           
             errorForm.classList.add('invalid');
             errorMessage.innerText='Please enter this field';
             
          }
          else {
             errorForm.classList.remove('invalid');
             errorMessage.innerText='';
          }
        }
        fieldElement.oninput=function()
        {
         errorForm.classList.remove('invalid');
         errorMessage.innerText='';
 
        }
     })
}
function ValidatePassword (option)
{
    var fieldPassword =document.querySelector(option.password);
    var errorMessagePassword=fieldPassword.parentElement.querySelector('.form-message')

    fieldPassword.onblur=function() {
       if(isPassword(fieldPassword.value))
       {
           errorMessagePassword.innerText='Enter password longer 10 characters';
           fieldPassword.parentElement.classList.add('invalid');
       }
       else {
        errorMessagePassword.innerText='';
        fieldPassword.parentElement.classList.remove('invalid');
       }
    }
    fieldPassword.oninput=function() {
        errorMessagePassword.innerText='';
        fieldPassword.parentElement.classList.remove('invalid');
    }

    var fieldComfirm =document.querySelector(option.passwordComfirm);
    console.log(fieldComfirm)
    var errorMessageComfirm=fieldComfirm.parentElement.querySelector('.form-message')

    fieldComfirm.onblur=function(){
        if(isPasswordComfirm(fieldPassword.value,fieldComfirm.value)==0)
        {
            errorMessageComfirm.innerText="Confirmation password is not correct";
            fieldComfirm.parentElement.classList.add('invalid');
        }
        else 
        {
            errorMessageComfirm.innerText="";
            fieldComfirm.parentElement.classList.remove('invalid');
        }
    }
    fieldComfirm.oninput=function()
    {
        errorMessageComfirm.innerText="";
        fieldComfirm.parentElement.classList.remove('invalid');
    }
}
function Validator(option)
{
    var inputElement = option.rules;
    validate(inputElement);
}

// dinh nghia rules
Validator.isRequired=function(selector)
{
    return{
        selector : selector,
        test : function(value)
        {
            return  value.trim() ? undefined:"vui lòng nhập trường này";
        }
       };
}
Validator.isEmail=function(selector)
{
    return{
     selector : selector,
     test : function(value)
     {
         var regex =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
         return  regex.test(value)?undefined:'input this must email valid ';
     }
    };
}
function isPassword (value)
{  
    if(value.length<10)
        return ' password too short';
    return undefined;
}
function isPasswordComfirm(value,valueConfirm)
{     
    if(!value)
        return 0;
    if(value===valueConfirm)
        return 1;
    return 0;
}