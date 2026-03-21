/**
문제) 카드 합쳐서 목표 문장 생성 가능 여부
1. 두개 카드 뭉치 별 순서대로 한 장씩(재사용 X, 앞에서 부터)

풀이) 
1. 목표 배열을 돌면서 idx별로 card1, card2 체크
2. 둘 중하나 인덱스에 없다면 뒤에 있음으로 순차체크 실패로 'No'
*/


function solution(cards1, cards2, goal) {
    const result = [...goal]
    for(let i = 0; i < goal.length; i++){
        const target = goal[i]
        
        const idx1 = 0
        const idx2 = 0
        
        if(target === cards1[idx1]){
            cards1.shift()
            result.shift()
        }
        else if(target === cards2[idx2]){
            cards2.shift()
            result.shift()
        } else{
            return 'No'
        }
    }
    return result.length === 0 ? "Yes" : "No"
}