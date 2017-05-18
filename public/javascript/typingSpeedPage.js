let stringWord = "Innovative Technical Solutions, LLC (ITS) is a Native American owned business that was established in Paducah, Kentucky in April 2000. ITS is a certified and Small Disadvantaged Business by the U.S. Small Business Administration.Our headquarters " + 
                "are in Paducah, Kentucky and we have" + 
                " satellite offices located in Tennessee, " + 
                "Ohio, and Illinois. ITS is a leading" + 
                " edge Information Technology firm that " + 
                "is comprised of professionals with a broad" + 
                " range of experience in software " + 
                "development, high-speed imaging/scanning (TIFF, PDF, Text, " + 
                "and OCR capabilities), document management, records management," + 
                " relevance management, information security, environmental " + 
                "management, fire services management, fire protection " + 
                "engineering, and protective force expertise.";

                
let neededWord = document.getElementById('wordToTypeField');
neededWord.innerHTML = stringWord;
let errorCount = 0;
let timer;
let timeInSecs = 60;  // Variable to represent 1 minute

/* Uncomment to access 
 const calcGrossWPM = (wordsTyped) => {
     return Math.round((wordsTyped.length/5)/1);  // Divides by one or any time specified by the timer
 }*/

  
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
    document.getElementById('wordToTypeField').value;
    let calcNetWPM = () => {
      let orignalLettersArray = stringWord.split('');
   let neededLettersArray = typedWord.split('');
     for(counter = 0; counter < neededLettersArray.length; counter++){
         if(neededLettersArray[counter] !== orignalLettersArray[counter]){
             errorCount++;
         }
    }
    const result = ((neededLettersArray.length/5)-errorCount)/1;
if(result > 0){
return JSON.parse(`{ "result" : ${result}, "errors": ${errorCount}}`);
}
 return 0;  
}
   
    let typeSpeedInformation = "";
    displayInformation.innerHTML =  "Your typing speed is: " + calcNetWPM().result + "WPM";
  }
}


 
document.querySelector("#stopTest").addEventListener('click', endTest);