// n % x = 1 ===
function solution(n) {
    let i = 1;
    let rs = 0;
    
    while(true){
        if(n % i === 1){
            rs = i
            break;
        }
        i++
    }
    
    return rs;
}