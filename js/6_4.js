// объявляем функцию с двумя аргументами
function showNumbers(from,to){
    let current = from;
// объявляем переменную и присваиваем ей сетинтервал
    let timerSequence = setInterval(function (){
        // выводим в консоль текущее значение
        console.log(current)
        // добавляем условие окончания цикла с интервалом
        if(current===to){
            clearInterval(timerSequence)
        }
        // увеличиваем текущее значение на 1
        current++
    },1000)
}
showNumbers(5,15)