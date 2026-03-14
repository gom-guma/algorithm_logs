/**
문제)
- 괄호 문자열 s를 x번 왼쪽 회전
- 반환: 총 짝이 맞는 수

풀이) 스택
- 왼쪽 회전 === 맨 앞 값 -> 맨 뒤 이동
- 문자열 길이만큼 맨 앞 -> 맨 뒤 
1. 문자열 길이 만큼 반복
2. 문자열 전체 짝이 맞는 지 체크 후 cnt++

2-0. 시작이 ) } ] 면 바로 continue
2-1. 배열에 순차적으로 push()
2-2. 짝이 맞으면 pop()
2-3. 최종 배열이 비었는지 체크

3. 맨 앞 shift, 맨 뒤 push 
4. 최종 return cnt

*/

function isCouple(str){
    const coupleDic = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    
    
    // 시작 체크
    if(Object.keys(coupleDic).some((c)=> c === str[0])){
        return false
    }
    
    const stack = []
    
    // 조합 체크
    for(const s of str){
        if(Object.values(coupleDic).some((c) => c === s)){
            stack.push(s)
        }
        else if(stack.length > 0){
            if(stack.at(-1) === coupleDic[s]){
                stack.pop()
            }
        }
    }
    
    return stack.length === 0
    
}

function solution(str) {
    let cnt = 0
    const arr = str.split('')
    
    for(let i = 0; i < arr.length; i++){
        if(isCouple(arr)){
            cnt++
        }
        arr.push(arr[0])
        arr.shift()
    }
    
    return cnt;
}