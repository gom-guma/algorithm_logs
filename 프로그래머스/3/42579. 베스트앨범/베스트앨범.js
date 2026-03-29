/**
문제) 장르별 최대 재생 수 2곡 출시
- 입력: 장르[], 재생횟수[]
- 출력: 고유번호[]
*/

/**
풀이)
1. genreMap: { "장르명": { total: 총재생수, songs: [{id, play}, ...] } }
2. 장르별 총재생수(total) 기준으로 장르 정렬
3. 각 장르 내에서 songs를 [재생수 내림차순, ID 오름차순]으로 정렬
4. 각 장르당 최대 2개씩 id 추출
*/

function solution(genres, plays) {
    const genreMap = new Map();

    // 1. 데이터 구조화
    genres.forEach((g, idx) => {
        const current = genreMap.get(g) || { total: 0, songs: [] };
        current.total += plays[idx];
        // 고유번호(idx)와 재생수를 한 객체로 묶어서 저장
        current.songs.push({ id: idx, play: plays[idx] });
        genreMap.set(g, current);
    });

    // 2. 장르 총합 기준 정렬
    const sortedGenres = [...genreMap.values()].sort((a, b) => b.total - a.total);

    const answer = [];

    // 3. 정렬된 장르를 순회하며 노래 추출
    sortedGenres.forEach(({ songs }) => {
        // 장르 내 정렬: 재생수(desc) -> ID(asc)
        songs.sort((a, b) => b.play - a.play || a.id - b.id);
        
        // 상위 2개만 결과에 담기
        songs.slice(0, 2).forEach(song => answer.push(song.id));
    });

    return answer;
}