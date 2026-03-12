
/**
Q)
1. U(1, 0) D(-1, 0) R(0, 1) L(0, -1)
2. (-5,-5)이하,(5,5)이상 범위인 경우 무시
3. 입력: 명령 문자열
4. 출력: 처음 걸어본 길 수량 측정 (중복 제거)

A)
1. 명령 문자열 정의 U = [x, y + 1], D = [x, y - 1], R = [x + 1, y] L = [x - 1 , y]
2. 무시 범위 x < -5 || x > 5 || y < -5 || y > 5
3. 동일 좌표 중복 처리 new Set
4. 지나간 경로는 앞 뒤 동일함으로 경로에 우선 추가 후 나중에 / 2 |x,y,x,y| = |y,x,y,x|
*/


// 2. 무시 범위 검증 함수
function isInvalid(x, y){
    return x < -5 || x > 5 || y < -5 || y > 5
}
    

function solution(dirs){
    let x = 0;
    let y = 0;
    
    // 3. 좌표 등록
    const visited = new Set()
    
    // 4. 명령 하나씩 수행
    for(const dir of dirs){
        let nx = x
        let ny = y
        
        // 5. 좌표 이동
        switch(dir){
            case 'U':
                ny++
                break
            case 'D':
                ny--
                break
            case 'R':
                nx++
                break
            case 'L':
                nx--
                break
        }
        
        // 6. 이동 결과 반환
        if(isInvalid(nx, ny)){
            continue
        }
        
        // 경로 앞/뒤 모두 확인
        const route1 = `${x},${y}-${nx},${ny}`
        const route2 = `${nx},${ny}-${x},${y}`
        
        // 7. 중복 아니면 등록
        if(!visited.has(route1) && !visited.has(route2)){
            visited.add(route1)
        }
        
        // 8.현 위치 업데이트
        x = nx
        y = ny
    }
    
    return visited.size
}