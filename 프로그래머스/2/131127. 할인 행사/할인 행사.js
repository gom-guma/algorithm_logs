
/**
문제)
- 조건: 10일 회원 자격, 1개씩 구매 가능, *원하는 품목 모두 구매 가능한 시작일
- 입력: 구매 품목ㅔ[, 필요 갯수[], 할인 품목[]
- 출력: 모두 할인 가능 일자 갯수

풀이)
1. 10일치 확인
2. discount 전체를 돌면 진행, 마지막시점은 len - 10
3. 확인 할때 10개를 돌면서 카운드 줄이기
4. 모두 0 되면 다음 index

*/

function solution(want, number, discount) {
    let cnt = 0
    const org = new Map()
    want.forEach((w, i) => org.set(w, number[i]))
    
    for(let i = 0; i < discount.length - 9; i++){
        const dic = new Map(org)
        for(let j = i; j < i + 10; j++){
            const key = discount[j]
            if(dic.has(key)){
                if(dic.get(key) === 1){
                    dic.delete(key)
                } else{
                    dic.set(key, dic.get(key) - 1)
                }
            }
        }
        if(dic.size === 0){
            cnt++
        }
    }
    
    return cnt
}