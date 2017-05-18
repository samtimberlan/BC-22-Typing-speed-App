let stringWord = "Innovative Technical Solutions, LLC (ITS) is a Native American owned business that was established in Paducah, Kentucky in April 2000. ITS is a certified and Small Disadvantaged Business by the U.S. Small Business Administration.";
let neededWord = document.getElementById('wordToTypeField');
neededWord.innerHTML = stringWord;
let typedWord = document.getElementById('inputType').value;
let errorCount = 0;



 const calcGrossWPM = (wordsTyped) => {
     return Math.round((wordsTyped/5)/1);  // Divides by one or any time specified by the timer
 }

 const calcNetWPM = (originalWords, typedWords) => {
   let orignalLettersArray = originalWords.split('');
   let neededLettersArray = originalWords.split('');
     for(counter = 0; counter < typedWords.length; counter++){
         if(typedWords[counter] !== originalWords[counter]){
             errorCount++
         }
 }
 const result = ((neededLettersArray/5)-errorCount)/1

   return JSON.parse(`{ "result" : ${result}, "errors": ${errorCount}}`);
}


const beginTest = () => {
   // Deter copy and paste
   /* neededWord.addEventListener('copy cut paste', e => e.preventDefault());*/
   window.onload();
    //timer;
}



const endTest = ()=>{
  let displayInformation = document.getElementById("displayInformation");
  if(typedWord === ""){
    displayInformation.innerHTML = "Hey it seems you did not type anything.";
  }
  else{
    let calcWpm = calcGrossWPM(typedWord);
    let calNWpm = calcNetWPM(stringWord, typedWord);
     if(calcNetWPM().result> 0){
      let netResult = calcNetWPM().result;
    }else{
      let netResult = 0;
    }

    let typeSpeedInformation = "";
    displayInformation.innerHTML = calcGrossWPM;
  }
}


let timer = setInterval(()=>{
  let timeInSecs = 60;
  let timerDisplay = document.getElementById("displayInformation");
  if(timeInSecs !== 0){
    timeInSecs --;
    if(timeInSecs >= 10){
      timerDisplay.innerHTML = timeInSecs + "s remaining";
      timerDisplay.style.color= "green";
    }
    else if(num < 10){
      timerDisplay.innerHTML = timeInSecs + 's '+"<p>Come on, You can do it!</p>;";
      timerDisplay.style.color= "red";
    }
    else if(timeInSecs <= 0){
      clearInterval(timer);
      endTest();
    }
  }
},1000);
  

  document.getElementById("startTest").addEventListener('click', beginTest.bind());
document.getElementById("stopTest").addEventListener('click', endTest.bind());