function toReadable (number) {
    let askFrom10to20, askHandreeds, ask;
    number = number.toString().split('');
    number[number.length-1];
    if ( number[number.length-2] == '1' && number.length>1){
        askFrom10to20 =from10to20(number);
    }
    if (number.length == 3){
        askHadreeds = hundreds(number);
    }
    ask = joinAsks(askFrom10to20, askHandreeds);
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
    return my_ask;
}

function joinAsks(ask1, ask2){
    let ask = [];
    typeof(ask1=='undefined') ? doNothing(): ask.push(ask1);
    console.log(ask + " ask");
    console.log(ask1=='undefined'+" ask1");
    typeof(ask2=='undefined') ? doNothing(): ask+=ask2;
    return ask;
}

function doNothing(){}

console.log(toReadable(12));
console.log(toReadable(213));
console.log(toReadable(19));