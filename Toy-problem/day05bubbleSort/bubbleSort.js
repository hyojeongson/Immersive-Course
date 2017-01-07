/*jshint expr:true*/

/* 버블소트(Bubble sort)는 컴퓨터 공학에서 가장 간단한 sorting algorithm입니다.
* array에서 첫번째 element와 두번째 element를 검색을 하는것으로 시작합니다;
* 만약 첫번째 element가 두번째 element보다 크면 서로 자리를 바꿉니다(swap).
* 그리고나서 2번째 element를 3번째 element와 비교를 하고 크면 자리를 바꿉니다,
* 3번째 element와 4번째 element를 비교를 하고 크면 자리를 바꿉니다
* 이렇게 비교후 자리 바꾸기를 모든 element를 다 비교할때 까지 계속합니다.
* 모든 element의 비교가 끝났으면 bubble sort는 비교하는것을 첫번째 element부터
* 다시 하기를 element들이 숫자순으로 정렬될때 까지 계속하게 됩니다.
* 큰 value들은 array의 뒷부분으로 넘어가게 되지요.
*
* array를 input으로 받아 위에서 설명한 bubble sort를 하는 function을
* 만드세요.
* JavaScript의 Array.prototype.sort를 사용하지 마세요.
*
*  Example:
*  bubbleSort([2, 1, 3]); //--> [1, 2, 3]
*/


// helper function들을 만들어도 됩니다.

var bubbleSort = function(array) {
  // Your code here.
  for (var i = 0; i < array.length; i++){
    for(var j = 0; j < array.length; j++){
      if(array[j] > array[j+1]){
        var newarr = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = newarr
      }
    }
  }
  return array;
};
