// 길이로 짝홀 구분
// 짝수면 2/len 번째 -1. +1 인덱스 값
// 홀수면 2/len 번재 값
function solution(s) {
    const len = s.length
    const half = Math.floor(len / 2)
    
    //홀수
    if(len % 2 === 1){
        return s[half]
    } 
    //짝수
    else{
        return s.slice(half - 1, half + 1)
    }
}