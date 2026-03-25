/**
문제)
- 입력: 참가자 배열, 완주 배열
- 출력: 완주하지 못한 선수 이름 조회

풀이) 해시 알고리즘
*/

function solution(participant, completion) {
    const cDic = new Map()
    
    // 1. 참가자 테이블 생성
    participant.forEach((p) => {
        cDic.set(p, cDic.has(p) ? cDic.get(p) + 1 : 1)
    })
        
    // 2. 완주자 검색
    completion.forEach((c) => {
        if(cDic.has(c)){
            cDic.set(c, cDic.get(c) - 1)
        } else {
            return c
        }        
    })
    
    for(const [name, num] of cDic){
        if(num > 0){
            return name
        }
    }
    
}