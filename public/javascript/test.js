console.log("I am here");
let stringWord = "Innovative Technical Solutions, LLC (ITS) is a Native American owned business that was established in Paducah, Kentucky in April 2000. ITS is a certified and Small Disadvantaged Business by the U.S. Small Business Administration.";

document.getElementById('wordToTypeField').innerHTML = stringWord;
let givenWord = stringWord.split('');
let typedWord = document.getElementById('typingField').innerHTML;
let wordLength = typedWord.split('').length;
let lettersInGivenString = typedWord.split('');
let errorCount = 0;

 const calcGrossWPM = () => {
     return (lettersInGivenString/5)/1;
 }

 const calcNetWPM = () => {
     for(counter = 0; counter < givenWord.length; counter++){
         if(lettersInGivenString[counter] === givenWord[counter]){
             errorCount++
         }
     return ((lettersInGivenString/5)-errorCount)/1
 }

}

const beginTest = () => {
    let info = document.getElementById("displayInformation"); 
    info.innerHTML = "Starting";
    let dateObject = new Date();
    dateObject.getTime();
    setTimeout(1000)
    info.innerHTML = "Time up!";
}

document.getElementById("btn").addEventListener("click", beginTest())