// 평균 sum / len
// for of
function solution(arr) {
    let sum = 0;
    
    for(const n of arr){
      sum += n  
    }
    // const sum = arr.reduce((acc, cur)=> acc + cur, 0)

    return sum / arr.length;
}