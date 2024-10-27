var enterBttn = document.getElementById('enterBttn');
var input = document.getElementById('numberInput');
var outputSec = document.getElementById('outputSection')

enterBttn.addEventListener('click', pyramid);

function pyramid(){
    var inputValue = input.value;
    var output = []; 

    if(inputValue == 0 || inputValue <= 0)
    {
        outputSec.style.color = 'darkcyan';
        outputSec.textContent = 'ENTER A NON ZERO NUMBER MATE ;)';
        setTimeout(() =>{
            location.reload();
        }, 1777);
    }
    else{
        for (var x = 1; x <= inputValue; x++) {
            var oddNum = 1;
            for (var y = 0; y < x; y++) {
                output.push(oddNum); 
                output.push(' '); 
                oddNum += 2;
            }
            output.push('\n'); 
        }
        console.log(output.join(''));
        outputSec.textContent = output.join('');
    }
};