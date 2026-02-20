/**
문제) 서로 다른 두 개의 수의 합 (오름차순)

풀이) 완전 탐색
*/
function solution(numbers) {
    const res = new Set()
    for(let i = 0; i < numbers.length; i++){
        const n = numbers[i]
        for(let j = i + 1; j < numbers.length; j++){
            const m = numbers[j]
            res.add(n + m)   
        }
    }
    return [...res].sort((a, b)=> a - b)
}