export function isEmpty(d, m, y){
    if (d <= 0 || m <= 0 || y <= 0){
        return true
    } else {
        return false
    }
}

function isLeapYear(y){
    if (y % 4 == 0 || y % 400 == 0){
        return true
    } else if (y % 100 == 0){
        return false
    }
}

export function dayValid(d, m, y){
    const month31 = [1, 3, 5, 7, 8, 10, 12];
    const month30 = [4, 6, 9, 11];
    let maxDay;

    if (month30.includes(m)){
        maxDay = 30
    } else if (month31.includes(m)){
        maxDay = 31
    } else if (m === 2){
        maxDay = isLeapYear(y) ? 29 : 28; 
    } else {
        return false
    }

    return d > 0 && d <= maxDay;
}

export function monthValid(m){
    if (m > 12 || m <= 0){
        return false
    } else {
        return true
    }
}

export function yearValid(y, cy){
    if(y > cy){
        return false
    } else {
        return true
    }
}