/*
 * 텍스트 문자열을 가지고 괄호가 균형 잡혀 있으면 true를 반환하고 그렇지 않으면 false를 반환하는 함수를 작성하십시오.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   괄호, 중괄호, 대괄호 전부 되도록 만드세요.
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * bracket이 아닌 character는 무시하세요.
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input) {
	var chaekarr = []; 
	var balanceMap = {
		'[' : ']',
		'{' : '}',
		'(' : ')'
	}

	for(var i = 0; i < input.length; i++){
		var char = input[i];
		if(chaekarr[chaekarr.length - 1] === char){
			chaekarr.pop();
		}

		if(balanceMap[char]){
			chaekarr.push(balanceMap[char]);
		}
	}

	return chaekarr.length === 0;
};

