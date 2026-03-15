/**
문제) 같은 알파벳 2개짝 찾고 제거, 문자열 붙이기 반복 후 없어지는지 확인
- 출력: 1 or 0

풀이) 스택
- stack = []
- for(const s of arr) 
- if stack.length !== 0 && stack.at(-1) === s -> stack.pop()
- else -> stack.push(s)
*/

function solution(str){
    let newArr = []
    
    for(const s of str){
        // 처음이 아니고, 짝임
        if(newArr.length !== 0 && newArr.at(-1) === s){
            // 제거
            newArr.pop()
        } else{
            // 추가
            newArr.push(s)
        }
    }
    
    return newArr.length === 0 ? 1 : 0
    }