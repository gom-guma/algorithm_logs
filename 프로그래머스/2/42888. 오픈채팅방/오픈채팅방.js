/**
문제)
- 입력: 채팅방 입장, 퇴장, 닉네임변경 배열
- Enter 유저아이디 닉네임
- Leave 유저아이디 닉네임
- Chage 유저아이디 닉네임 (닉네임 변경 시 기존 닉네임 업데이트)
- 출력: 입장 퇴장 순차 메세지 배열

풀이) 로그 해시 테이블
- 입장 배열, 닉네임 변경 맵
- 입장 배열 = {id: 아이디, status: '들어왔' || '나갔'}[]
- 닉네임 변경 맵 = {아이디: 닉네임}
- 변경 기록은 마지막에 일괄 반영
*/

function solution(record) {
    const log = []
    const info = new Map
    const result = []
    for(const r of record){
        const [status, id, name] = r.split(' ')

        switch(status){
            case 'Enter':
                info.set(id, name)
                log.push({id, status: '들어왔'})
                break 
            case 'Leave':
                log.push({id, status:'나갔'})
                break
            case 'Change':
                info.set(id, name)
                break
        }
    }
    
    return log.map((l) => `${info.get(l.id)}님이 ${l.status}습니다.`)
}