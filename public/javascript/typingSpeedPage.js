let stringWord = "Innovative Technical Solutions, LLC (ITS) is a Native American owned business that was established in Paducah, Kentucky in April 2000. ITS is a certified and Small Disadvantaged Business by the U.S. Small Business Administration.";
let neededWord = document.getElementById('wordToTypeField');
neededWord.innerHTML = stringWord;
let errorCount = 0;
let timer;
let timeInSecs = 60;  // Variable to represent 1 minute


 const calcGrossWPM = (wordsTyped) => {
     return Math.round((wordsTyped.length/5)/1);  // Divides by one or any time specified by the timer
 }

 const calcNetWPM = (originalWords, typedWords) => {
   let orignalLettersArray = originalWords.split('');
   let neededLettersArray = originalWords.split('');
     for(counter = 0; counter < typedWords.length; counter++){
         if(typedWords[counter] !== originalWords[counter]){
             errorCount++;
         }
 }
 const result = ((neededLettersArray.length/5)-errorCount)/1;
if(result > 0){
return JSON.parse(`{ "result" : ${result}, "errors": ${errorCount}}`);
}
 return 0;  
}


 
const beginTest = () => {
  timer = 
   setInterval(()=>{
      let timerDisplay = document.getElementById("displayInformation");
      if(timeInSecs !== 0){
        timeInSecs --;
        if(timeInSecs >= 10){
          timerDisplay.innerHTML = timeInSecs + "s remaining";
          timerDisplay.style.color= "green";
        }
        else if(timeInSecs < 10){
          timerDisplay.innerHTML = timeInSecs + 's '+"<p>Come on, You can do it!</p>";
          timerDisplay.style.color= "red";
        }
        }else if(timeInSecs <= 0){
          clearInterval(timer);
          timerDisplay.innerHTML = timeInSecs + 's '+"<p><b>Time Up!<b></p>";
          endTest();
      }
},1000);      
}
 document.querySelector("#startTest").addEventListener('click', beginTest);
 document.querySelector("#inputType").addEventListener('focus', beginTest);


const endTest = ()=>{
  clearInterval(timer);
  let typedWord = document.getElementById('inputType').value;
  document.getElementById('inputType').disabled = true;
  let displayInformation = document.getElementById("displayInformation");
  if(typedWord === ""){
    displayInformation.innerHTML = "Hey it seems you did not type anything.";
  }
  else{
    console.log(typedWord);
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

 
document.querySelector("#stopTest").addEventListener('click', endTest);