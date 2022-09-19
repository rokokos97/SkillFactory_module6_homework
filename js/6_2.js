checkPrimeNumber(+prompt("введите число от 0 до 1000"));
function checkPrimeNumber(userNumber){
    if(userNumber<0 || userNumber>1000 || isNaN(userNumber)){
        alert("Данные не совпадают с условием, повторите ввод данных")
    }else {
    let divisorsArr=[];
    for( let i=1; i<=userNumber; i++){
        if(userNumber%i===0){
            divisorsArr.push(i)
        }
    }
        console.log(divisorsArr);
        if(divisorsArr.length===2){
            alert(`число ${userNumber} - является простым`)
        }else{alert(`число ${userNumber} -не является простым`)}
    }
}

