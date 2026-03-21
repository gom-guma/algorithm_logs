
/**
문제)
- 표 기능(n개의 행, 초기 k)
- 단일 행 선택, 복구, 삭제 기능 (최종 결과 'O','X')
- D n: idx + n 인덱스 선택 (뒤)
- U n : idx - n 인덱트 선택 (앞)
- C : idx 삭제, +1 인덱스 선택
- Z : 직전 삭제 행 원래 위치 복구 (커서 유지)
- 출력: 0번 행 부터 순차 'O', 'X' 반환

풀이)
- 이중 연결 리스트로 구현
- prev[i]: i행의 바로 위 행 인덱스
- next[i]: i행의 바로 아래 행 인덱스
- 삭제: 연결 끊고 stack에 인덱스 저장
- 복구: stack에서 꺼내서 복구
- 최종: stack에 남은 인덱스 = 상태 'X' 나머지 'O'
*/
function solution(n, k, cmd) {
    //1. 연결 리스트 초기화
    const prev = Array.from({length: n}, (_,i) => i - 1)
    const next_ = Array.from({length: n}, (_,i) => i + 1)
    
    let cIdx = k
    const stack = []
    
    //2. 명령처리
    for(const c of cmd){
        const [action, m] = c.split(' ')
        const move = parseInt(m) || 0
        
        // 뒤로
        if(action === 'D'){
            for(let i = 0; i < move; i++){
                cIdx = next_[cIdx]
            }
        }
        // 앞으로
        else if(action === 'U'){
            for(let i = 0; i < move; i++){
                cIdx = prev[cIdx]
            }
        }
        // 삭제
        else if(action === 'C'){
            stack.push(cIdx)
            const p = prev[cIdx], nx = next_[cIdx]
            if(p >= 0) next_[p] = nx
            if(nx < n) prev[nx] = p
            
            cIdx = nx < n ? nx : p
        }
        // 복구
        else if(action === 'Z'){
           const restored = stack.pop()
           const p = prev[restored], nx = next_[restored]
           
           if(p >= 0) next_[p] = restored
            if(nx < n) prev[nx] = restored
        }
    }
    
    //3. 결과
    const del = new Set(stack)
    return Array.from({length: n}, (_,i)=>del.has(i) ? 'X' : 'O').join('')

}