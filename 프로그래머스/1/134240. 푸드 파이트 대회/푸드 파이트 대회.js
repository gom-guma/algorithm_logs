/**
문제) [음식 개수,,,] => ""
1. 가운데 0
2. 양쪽으로 하나씩 큰 수 (남은건 버려)
3. 배열 문자열 출력

풀이) 알고리즘: 그리디?
1.
2.
3.
*/
function solution(food) {
    let res = ['0']
    food.shift(0)
    food.reverse().forEach((n, idx)=>{
       let cnt = Math.trunc(n / 2)
       while(cnt > 0){
           res.push(food.length - idx)
           res.unshift(food.length - idx)
           cnt--
       }
    })
    return res.join('')
}