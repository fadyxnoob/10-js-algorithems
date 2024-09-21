// Way One
function reverse (str) {
    let reversed = ''

    for (let char of str){
        reversed = char + reversed
    }
    return reversed

}
console.log(reverse('Byteblitz'))


// Way Two
function reverse1 (str) {
    let reversed = ''

    for (let i = 0; i < str.length; i++){
        reversed = str[i]+ reversed
    }
    return reversed

}
console.log(reverse1('YasirMehboob'))

