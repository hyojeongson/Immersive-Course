// `filterFamilyMembers` 2 arguments를 받습니다. family tree object와 truth test callback.
//`filterFamilyMembers`는 array를 return합니다. array안에는 truthTest를 pass한 fullname들이 들어가 있습니다. 순서는 상관 없습니다.
// recursion을 사용하여 풀어주세요.
//
// family member는 이렇게 생길수 있습니다.
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
var familyTree = {
  'firstName': 'Beth',
  'lastName': 'Johnson',
  'location': 'San Francisco',
  'children': [
    {
      'firstName': 'Beth Jr.',
      'lastName': 'Johnson',
      'location': 'Berkeley',
      'children': [
        {
          'firstName': 'Smitty',
          'lastName': 'Won',
          'location': 'Beijing',
          'children': []
        }
      ]
    },
    {
      'firstName': 'Joshie',
      'lastName': 'Wyattson',
      'location': 'Berkeley',
      'children': []
    }
  ]
};

var livesInBerkeley = function (familyMember) {
  return familyMember.location === 'Berkeley';
}
// filterFamilyMembers(familyTree, livesInBerkeley)
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];

var filterFamilyMembers = function (familyTree, truthTest) {
  var arr = [];

  if(truthTest(familyTree) === true ){
    arr.push(familyTree.firstName +" "+ familyTree.lastName)
  }

  if(familyTree.children.length > 0){
    for(var i = 0; i < familyTree.children.length; i++){
      arr = arr.concat(filterFamilyMembers(familyTree.children[i],truthTest));
    }
  }
  return arr;
};
