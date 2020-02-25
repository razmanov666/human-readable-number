function toReadable (number) {
    let askFrom10to20, askHandreds, askTens ,ask, askSimple;
    number = number.toString().split('');
    number[number.length-1];
    if ( number[number.length-2] == '1' && number.length>1){
        askFrom10to20 =from10to20(number);
        
    }
    else if(number.length>1) {
        askSimple = simple(number);
        askTens = Tens(number);
        }
    else askSimple = simple(number);
    if (number.length == 3){
        askHandreds = hundreds(number);
    }
    if (number.length == 1 && number[0]==0){
        return 'zero';
    }
    ask = joinAsks(askFrom10to20, askHandreds, askTens, askSimple);
    //console.log(askHandreds+" main");
    return ask;
}

function from10to20(number){
    switch (number[number.length-1]){
        case '0':
            my_ask='ten';
            break;
        case '1':
            my_ask='eleven';
            break; 
        case '2':
            my_ask='twelve';
            break;
        case '3':
            my_ask='thirteen';
            break;
        case '4':
            my_ask='fourteen';
            break;
        case '5':
            my_ask='fifteen';
            break;
        case '6':
            my_ask='sixteen';
            break; 
        case '7':
            my_ask='seventeen';
            break;
        case '8':
            my_ask='eighteen';
            break;
        case '9':
            my_ask='nineteen';
            break;
    }
    return my_ask;
}

function hundreds(number){
    switch (number[0]){
        case '1':
            my_ask='one hundred';
            break; 
        case '2':
            my_ask='two hundred';
            break;
        case '3':
            my_ask='three hundred';
            break;
        case '4':
            my_ask='four hundred';
            break;
        case '5':
            my_ask='five hundred';
            break;
        case '6':
            my_ask='six hundred';
            break; 
        case '7':
            my_ask='seven hundred';
            break;
        case '8':
            my_ask='eight hundred';
            break;
        case '9':
            my_ask='nine hundred';
            break; 
    }
    //console.log(my_ask+" console");
    return my_ask;
}

function Tens(number){
    switch (number[number.length-2]){
        case '0':
            my_ask='';
            break;
        case '2':
            my_ask='twenty';
            break;
        case '3':
            my_ask='thirty';
            break;
        case '4':
            my_ask='forty';
            break;
        case '5':
            my_ask='fifty';
            break;
        case '6':
            my_ask='sixty';
            break; 
        case '7':
            my_ask='seventy';
            break;
        case '8':
            my_ask='eighty';
            break;
        case '9':
            my_ask='ninety';
            break;
    }
    //console.log(my_ask);
    return my_ask;
}

function simple(number){
    switch (number[number.length-1]){
        case '0':
            my_ask='';
            break;
        case '1':
            my_ask='one';
            break; 
        case '2':
            my_ask='two';
            break;
        case '3':
            my_ask='three';
            break;
        case '4':
            my_ask='four';
            break;
        case '5':
            my_ask='five';
            break;
        case '6':
            my_ask='six';
            break; 
        case '7':
            my_ask='seven';
            break;
        case '8':
            my_ask='eight';
            break;
        case '9':
            my_ask='nine';
            break;
    }
    return my_ask; 
}

function joinAsks(ask1, ask2, ask3, ask4){
    let my_ask ='';
    typeof(ask2)=='undefined' ? doNothing(): my_ask=my_ask + ' ' +ask2;
    typeof(ask1)=='undefined' ? doNothing(): my_ask=my_ask + ' ' +ask1;
    typeof(ask3)=='undefined' || ask3 == '' ? doNothing(): my_ask = my_ask + ' ' +ask3;
    typeof(ask4)=='undefined' || ask4 == '' ? doNothing(): my_ask=my_ask + ' ' +ask4;
    return my_ask.slice(1);
}
/*
console.log(toReadable (980));
console.log(toReadable (965));
console.log(toReadable (774));
console.log(toReadable (200));
console.log(toReadable (5));
*/
function doNothing(){}
