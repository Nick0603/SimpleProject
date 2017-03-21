$('.number').hide(0); //隱藏number
$('#btn2').hide(0);  //隱藏btn2
function GetRandom(Min,Max){
  return Math.floor(Math.random()* (Max-Min+1) )+Min;
}

function initiazie(){
	$('.number').hide(0);
	numbers_all = []
	for(var i=1;i<=49;i++){
	  numbers_all.push(i)
	}
	winning_numbers = [];
	for(var i=1;i<=7;i++){
		var temp = GetRandom(0,numbers_all.length-1);
		winning_numbers.push(numbers_all[temp]);
		numbers_all.splice(temp,1);
	}
}
var sort_SToB = function(NumA,Numb){
	return NumA - Numb;
}

function display(n){
	$('#number' + n).fadeIn(500,function(){
		if(n<7){
			display(n+1);
		}else{
			numbers_sort();
			for(var i=1;i<=7;i++){
            $('#number' + i).text(winning_numbers[i-1]);
   			}
   			$('#btn1').attr("disable",true);
			$('#btn2').attr('disable',false);
   			$('#btn1').slideUp(500,function(){
   				$('#btn2').slideDown(500);
   			});
		}
	});
}
function numbers_sort(){
	sort_winning_numbers = winning_numbers;
	var temp = sort_winning_numbers.pop();
	sort_winning_numbers.sort(sort_SToB);
	sort_winning_numbers.push(temp);
}

var numbers_all = []
var winning_numbers = [];
var sort_winning_numbers = [];
initiazie();

$('#btn1').click(function(){
    for(var i=1;i<=7;i++){
            $('#number' + i).text(winning_numbers[i-1]);
    }
    display(1);
});

$('#btn2').click(function(){
	initiazie();
	$('#btn2').attr("disable",true);
	$('#btn1').attr('disable',false);
	$('#btn2').slideUp(500,function(){
		$('#btn1').slideDown(500);
	});
});

