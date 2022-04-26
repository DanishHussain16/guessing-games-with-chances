let min=1,
    max=10,
    guessesLeft=3,
    winningNum=3;

 var   maxNum=document.getElementById('max-num'),
    minNum=document.getElementById('min-num'),
    inputValue=document.getElementById('input-field'),
    submitBtn=document.getElementById('submit-btn'),
    validation=document.getElementById('valid');


    maxNum.textContent=max;
    minNum.textContent=min;

    submitBtn.addEventListener('click',function(e){
       let guess=parseInt(inputValue.value);
     
     if(isNaN(guess)||guess>max||guess<min){
            validation.textContent=guess+' is invalid input !';
            validation.style.color='brown';
            inputValue.value='';
          
        
   }     
     else{
        if(guess===winningNum){
         validation.textContent=guess+' is Correct !';
         validation.style.color='green';
         inputValue.disabled=true;
         inputValue.style.borderColor='green';
        }
        else{
              guessesLeft=guessesLeft - 1;
              if(guessesLeft===0){
               validation.textContent=guess+'Game Over!';
               validation.style.color='red';
               inputValue.disabled=true;
               inputValue.style.borderColor='red';
              }
              else{
         validation.textContent=guess+' is Inorrect guess again ! guesses left'+guessesLeft;
         validation.style.color='red';
         inputValue.style.borderColor='red';
         inputValue.value='';
              }
        }
        
     
     }
     
     
    });