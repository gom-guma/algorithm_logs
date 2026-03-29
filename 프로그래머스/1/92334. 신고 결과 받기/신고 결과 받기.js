/**
문제)
- 입력: id[], 신고id 문제id[], 정지 기준
- 출력: id 별 처리 결과 메일 받은 횟수

풀이)
1. id : 누적 신고 받은 수, 신고 자 수[] 맵
2. id_list를 돌면서 1번에서 값이 k 이상인 경우 2번 맵에서 값에 신고자가 있는 경우 정답 idx++
*/

function solution(id_list, report, k) {
    const answer = new Map()
    const reportDic = new Map()
    
    id_list.forEach((id) => {
        answer.set(id, 0)
        reportDic.set(id, {rep:[], cnt: 0})
    })
        
    report.forEach((r)=>{
        const [reporter, target] = r.split(' ')
        const val = reportDic.get(target)
        
        //같은 유저 신고 스킾
        if(!reportDic.get(target).rep.includes(reporter)){
            reportDic.set(target, {rep: [...val.rep, reporter], cnt: val.cnt + 1})
        }
    })
    
    reportDic.forEach((r, idx) => {
        //신고 횟수 넘은 유저 신고자에게 메일
        if(r.cnt >= k){
            r.rep.forEach((id)=>{
                answer.set(id, answer.get(id) + 1)
            })
        }
    })
    
    return [...answer.values()]
}