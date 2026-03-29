/**
    조합 재귀 함수
*/
function getComb(arr, maxCnt){
    const res = []
    
    // 1개 인 경우 즉시 반환
    if(maxCnt === 1) return arr.map((el) =>[el])
    
    // 2개 이상 조합
    arr.forEach((fix, idx, org) => {
        //나머지
        const rest = org.slice(idx + 1)
        //조합
        const comb = getComb(rest, maxCnt - 1)
    
        const att = comb.map((el) => [fix, ...el])    
        res.push(...att)
    })
    
    return res
}

function solution(orders, course) {
    const answer = [];


    // 모든 코스 개수 별
    course.forEach((c_cnt) => {
        const courseMap = new Map()
        let max = 0
        
        orders.forEach((order) => {
            const sorted = order.split('').sort()
            const comb = getComb(sorted, c_cnt)

            comb.forEach((c) => {
                const key = c.join('')
                const cnt = (courseMap.get(key)||0) + 1

                courseMap.set(key, cnt)

                // 최다 빈도 코스 횟수
                if(cnt > max) max = cnt
            })
        })
         // 최소 2이상인 최다 빈도 조합 저장
        if(max >= 2){
            for(const [key, cnt] of courseMap){
                if(cnt === max){
                    answer.push(key)
                }
            }
        }
    })
    
    return answer.sort()
}