/**
문제) 주식가격 떨어지지 않는 기간 (대기)
- 출력: 떨어지지 않는 기간 배열

풀이) 스택
*/

function solution(prices){
    const stack = []
    const answer = new Array(prices).fill(0)
    
    for(let i = 0; i < prices.length; i++){
        let sec = 0
        for(let j = i + 1; j < prices.length; j++){
            sec++
            
            if(prices[j] < prices[i]) break
        }
        
        answer[i] = sec
    }
    
    return answer
}