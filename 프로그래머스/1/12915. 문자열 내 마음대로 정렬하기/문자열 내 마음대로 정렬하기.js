/**
문제) 문자의 n번째 문자를 기준으로 오름차순 정렬
- 출력: 정렬된 문자열[]

*/

function solution(strings, n) {
    const sortedStrs = strings.sort((a, b) => {
        if(a[n] === b[n]){
            return a > b ? 1 : -1
        }
        return a[n] > b[n] ? 1 : -1
    })
    
    return sortedStrs;
}