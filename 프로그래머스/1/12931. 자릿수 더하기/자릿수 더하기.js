// 숫자 인덱스 별 총합
// toSting -> idx
function solution(n)
{
    var sum = 0;
    var tmp = n.toString()
        console.log(tmp)

    for(var s of tmp){
        sum += Number(s)
    }
    return sum;
}