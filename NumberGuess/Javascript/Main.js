
function GetRandom(Min,Max){
  return Math.floor(Math.random()* (Max-Min+1) )+Min;
}

var answer = GetRandom(1,99);
var counter = 0;
function Guess(){
    var you_guess = parseInt(number_input.value, 10);
    var L_Num = parseInt(lowernum.innerText, 10);
    var U_Num = parseInt(uppernum.innerText, 10);
    if(isNaN(you_guess)){
        alert('請輸入數字!!!');
    }else{

        if((you_guess <= L_Num) || (you_guess >= U_Num)){
            alert('請輸入介於' + L_Num + '~' + U_Num + '的數字!!!');
        }else{
            counter++;
            count.innerText = counter;
            if(you_guess == answer){
                alert('猜對囉，你總共花了 '+ counter + ' 次!');
                $("#btn").attr("disabled", "disabled");
            }else if(you_guess < answer){
                L_Num = you_guess;
                lowernum.innerHTML = you_guess;
            }else{
                U_Num = you_guess;
                uppernum.innerHTML = you_guess;
            }
        }
    }
    if((U_Num - L_Num)==2){
        $('#uppernum').css("color","red");
        $('#lowernum').css("color","red");
    }else if((U_Num - L_Num)<10){
        $('#uppernum').css("color","orange");
        $('#lowernum').css("color","orange");
    }
    if(counter >= 5){
        $('#count').css("color","red");
    }else if(counter >=3){
        $('#count').css("color","orange");
    }
    number_input.value='';
}