const textElement = ['Freelancer','Web Developer','Graphic Desainer','Networking'];
let count = 0;
let textIndex = 0;
let  currentTxt = '';
let words = '';

(function ngetik(){

    //console.log(textElement[2]);
    if(count == textElement.length){
        count = 0;
    }
    currentTxt = textElement[count];

    words = currentTxt.slice(0, ++textIndex);
    document.querySelector('.efek-ngetik').textContent = words;
    if(words.length == currentTxt.length){
        count++;
        textIndex = 0;
    }
    setTimeout(ngetik, 500);
})();