
/**
문제)
- 순서 대로 배포
- 배포 시점에 완료된 작업 모두 배포
- 출력: 몇개씩 배포[]

풀이) 순서대로 배포 = 큐
1. 각 작업 끝 나는 시간 배열 (100-작업량)/스피드
2. 배포 기준일 설정(첫 작업 완료일)
3. 순회하면서 배포 그룹 묶기
*/
function solution(progresses, speeds) {
    let answer = [];
    
    // 1. 각 작업 종료일
    const days = progresses.map((p,i)=>Math.ceil((100-p)/speeds[i]))
    
    // 2. 첫번째 작업 기준일
    let maxDay = days[0]
    let count = 0;
    
    // 3. 작업을 순회하면서 그룹화
    for(let i = 0; i < days.length; i++){
        if(days[i] <= maxDay){
            // 현재 작업이 기준일보다 빨리 끝나거나 같은 날이면 배포
            count++
        } else{
            // 더 오래 걸리는 작업을 만나면, 지금까지 쌓인 기능 배포
            answer.push(count)
            maxDay = days[i]
            count = 1
        }
    }
    
    //마지막 그룹 추가
    answer.push(count)
    return answer;
}