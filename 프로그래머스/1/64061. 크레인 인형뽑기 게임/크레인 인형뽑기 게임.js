/**
문제)
- board = 인형 위치(행, 열)
- move = 순자척으로 뽑은 인형 위치 (x, m 값)
- *같은 모양의 인형 쌍은 터짐 (스택)
- 출력: 터진 인형 수

풀이)
- 행: 1차원 i, 열: 2차원 j
- move 길이 반복
- move: borad[i][j] 가 존재하면 stack 넣기
- *stack 넣을때 stack[stack.length -1]랑 값이 같으면 result++, stack.pop()
*/
function solution(board, moves) {
    const stack = []
    let cnt = 0;
    
    for(let i = 0; i < moves.length; i++){
        //인형뽑기
        let item = 0
        let col = moves[i] - 1
        
        for(let j = 0; j < board.length; j++){
            if(board[j][col] > 0){
                item = board[j][col]
                //뽑은 인형 제거
                board[j][col] = 0
                break
            }
        }
        
        if(item === 0){
            continue
        }

        //비교하기
        if(stack.length > 0 && item === stack[stack.length - 1]){
            stack.pop()
            cnt += 2
        } else{
            stack.push(item)
        }
    }
    
    return cnt;
}