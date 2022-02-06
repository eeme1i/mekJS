import { normalizeConfig } from "next/dist/server/config-shared";

const IsDevelopment = false;
async function CallTranslation(){
  
  // configure text to suitable for json
  var args = "none";    // <= needs real input 


  var latexText = document.getElementById("inputBox").value;
  latexText = "" ? " " : latexText;
  latexText = latexText.replace("-back-", "-#back#-");
  latexText = latexText.replace("\\", "-back-");
  latexText = latexText.replace("-down-", "-#down#-");
  latexText = latexText.replace("_", "-down-");
  // call api 



  console.log("send new request")
  //try{
    // https://mekwebfunction.azurewebsites.net/api/TranslateLatex
    await fetch('https://mekwebfunction.azurewebsites.net/api/TranslateLatex', {  
      method: 'POST',
      body: JSON.stringify({
        Latex : "\\frac{34}{3ss4}mmnn",
        Args : {
          MathMode : false,
          PhysicsMode1 : true
        }
      }),
      headers: {
        'Content-Type': 'application/json',
        'x-functions-key': process.env.NEXT_PUBLIC_API_KEY    // <= this needs to be hidden
      },
    })      
    .then((response) => response.json())
    .then((json) => console.log(json));
    //ParseJSON(json));
    
  }
  /*catch(e){
    console.error(e);
  }
}*/
export default CallTranslation


// to-do list:
//      put json character changes to their own function
//      arguments don't work right in api side
//      settings menu in UI 


// this function returns values to specific text boxes and logs errors
function ParseJSON(json){
  try{
    if (IsDevelopment){
      console.log("data from translation api: ");
      console.log(json);
  }
  // return value from translation
  if (json.translation != undefined){
    var translation = json.translation;
    translation = translation.replace("-back-", "\\");
    translation = translation.replace("-#back#-", "-back-");
    translation = translation.replace("-down-", "_");
    translation = translation.replace("-#down#-", "-down-");
    document.getElementById("outputBox").value = json.successfull ? translation : "No latex was given";
  }
  // log possible error codes
  if (json.fails != "none"){
    var fails = json.fails;
    fails = fails.replace("-back-", "\\");
    fails = fails.replace("-#back#-", "-back-");
    fails = fails.replace("-down-", "_");
    fails = fails.replace("-#down#-", "-down-");
    console.log(fails);
  }
}
  // if errors with handling with files (shouldn't ever happen)
  catch(e){
    console.log("error in dealing with api return values \nServer might be offline :(\n"
                + "error path is: " + e);
  }
}




