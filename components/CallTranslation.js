import { data } from "autoprefixer";
const IsDevelopment = true;
async function CallTranslation(){
    /*
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            alert(xmlHttp.responseText);
            //inset text to textarea
            document.getElementById("output").value = xmlHttp.responseText;
        }
    xmlHttp.open("POST", "https://jsonplaceholder.typicode.com/posts", true); // true for asynchronous 
    xmlHttp.send(null);
    */
    
    
    // when api server is running change this to url 
    // chance also body elements to fit api
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => ParseJSON(json));

}

export default CallTranslation

function ParseJSON(json){
    if (IsDevelopment){
        console.log("here is some data from database:");
        console.log(json);
    }
    document.getElementById("output").value = "request info\n"
        + "-----------------" 
        + "\ntitle: " + json.title + "\nbody: " + json.body 
        + "\nuser id: " + json.userId;
}