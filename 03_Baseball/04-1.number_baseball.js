var 바디 = document.body;

var 숫자후보 = [1,2,3,4,5,6,7,8,9];
var 숫자배열 = [];

for(var i = 0; i < 4; i += 1) {
    var 뽑은수 = 숫자후보.shift();
    숫자배열.unshift(뽑은수);
}


var 결과 = document.createElement('h1');
바디.append(결과);
var 폼 = document.append(폼);
var 입력창 = document.createElement('input');
입력창.type = 'number';
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력';
폼.append(버튼);