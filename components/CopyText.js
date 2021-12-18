export default function copyText(){
    var textObj = document.getElementById("outputBox");
    
    textObj.select();
    textObj.setSelectionRange(0, 99999);     // for mobile devices

    navigator.clipboard.writeText(textObj.value);
}