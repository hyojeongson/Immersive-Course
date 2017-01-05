/* 

배열에서 3개의 숫자의 가능한 가장 큰 곱을 찾는 함수를 작성하십시오.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: 음수(negative number)도 handling할수 있게 해주세요.
 */

/////////////////////////////////// *** Plan *** ///////////////////////////////////
// input:  array of numbers
// constraint: negative, >= 3
// output: number

// 1. sort small to big
// 2. array에서 하나씩 max만 가지고 오는데
  // 양수 max하나는 가지고 오고;
  // negative가 2개 있는지 확인
  // negative 2개있으면 양수 2개와 negative 2개중 어느거 2개 가지고올지 정하기.
    // 정하기: 가장작은 음수 2개 곱한거랑 max랑 max다음 큰수를 곱한거보다 크면 negative사용 작으면 positive
  // 양수 하나는 무조건 사용 가장 큰녀석
// max랑 2개 비교한것들올 곱해서 return result

var largestProductOfThree = function(array){
  
  // using sort method, sort small tso big
  array = array.sort(function(a, b){
    return a - b;
  });
  
  var max = Math.max.apply(null, array);
  // 새로운 array만들기.
  // Math.max를 사용하여 max를 찾고 index를 찾아서 그 index에 있는 값을 splice하기.
  var maxIdx = array.indexOf(max);
  // splice한 값을 새로운 array에 담기.
  array.splice(maxIdx, 1);
  // counter 만들기
  var counter = 0
  // for문을 array 만큼돌리는데 각 요소가 0보다 작으면 if문으로 확인해서 counter오리고 아니면 nothing
  for (var i = 0; i < array.length; i++) {
    if(array[i] < 0){
      counter++;
    }
  }
  // if문으로 counter가 2개 이상이면 negative 임.
  var negMax = 0;
  if(counter >= 2) {
    negMax = array[0] * array[1];
  }
  // 뒤에서 부터 2개 가지고오기.
  // 곱한수를 비교.
  var posMax = array[array.length - 1] * array[array.length - 2];
  if(negMax > posMax) {
    // 큰수를 가지고 오기.
    // max랑 큰수랑 곱하고 return.
    return max * negMax;
  } else {
    // 큰수를 가지고 오기.
    // max랑 큰수랑 곱하고 return.
    return max * posMax;
  }

};










