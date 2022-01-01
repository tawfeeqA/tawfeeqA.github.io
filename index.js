
let buttons = Array.from(document.getElementsByClassName('sudoku-value-grid'));
let d= Array.from(document.getElementsByClassName('grid-item'));
var value=0;
let makenew = document.getElementById('makenew');
let clear = document.getElementById('clear');
var origArr;
f = [0,4,0,0,0,0,8,0,0,0,0,4,0,0,8,0,0,9,0,7,0,0,0,0,0,0,5,0,1,0,0,7,5,0,0,8,0,5,6,0,9,1,3,0,0,7,8,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,9,3,0,0,1,0,0,0,5,7,0,0,4,0,3];
g = [1,2,3,4,5,6,7,8,9,4,5,6,7,8,9,1,2,3,7,8,9,1,2,3,4,5,6,2,3,4,5,6,7,8,9,1,5,6,7,8,9,1,2,3,4,8,9,1,2,3,4,5,6,7,3,4,5,6,7,8,9,1,2,6,7,8,9,1,2,3,4,5,9,1,2,3,4,5,6,7,8];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive

}
function CheckValid(){

}
function generatesudoku(){
}
function displayArray(arr){
    //Same function as clear basically. 
    origArr =arr;
    //generate new and use that
    for(let i =0;i<arr.length;i++){
        if(arr[i]==0){
            (document.getElementById(String(i)).innerText ='');
        }
        else {
            (document.getElementById(String(i)).innerText =arr[i]);

        }
    }
}
function clearBoard(arr){
    for(let i =0;i<arr.length;i++){
        if(arr[i]==0){
            (document.getElementById(String(i)).innerText ='');
        }
        else {
            (document.getElementById(String(i)).innerText =arr[i]);

        }
    }
}
function checkSolved(arr){  
    if(checkVertical(arr)&&checkHorizontal(arr)&&checkSquares(arr)){
        alert("Solved");
    }
    else{
        alert("Not Solved");
    } 
}
function checkHorizontal(arr){
    var a=0;
    var b=9;
    var res=true;
    l=[1,2,3,4,5,6,7,8,9];
    for(i=0;i<=8;i++){
        if(l.every(i => arr.slice(a,b).includes(i))){
            a+=9;
            b+=9;
        }
        else{
            res = false;
            break;
        }
    }
    return res;
}
function checkVertical(arr){
    a=0, b=9,c=18,d=27,e=36,f=45,g=54,h=63,i=72;
    l=[1,2,3,4,5,6,7,8,9];
    lst=[arr[a],arr[b],arr[c],arr[d],arr[e],arr[f],arr[g],arr[h],arr[i]];
    var res =true;
    for(x=0;x<=8;x++){
        if(l.every(y => lst.includes(y))){
            a+=1,b+=1,c+=1,d+=1,e+=1,f+=1,g+=1,h+=1,i+=1;
            lst=[arr[a],arr[b],arr[c],arr[d],arr[e],arr[f],arr[g],arr[h],arr[i]];
        }
        else{
            res = false;
            break;
        }
    }return res;
}
function checkSquares(arr){
    a=0, b=1,c=2,d=9,e=10,f=11,g=18,h=19,i=20;
    l=[1,2,3,4,5,6,7,8,9];
    lst=[arr[a],arr[b],arr[c],arr[d],arr[e],arr[f],arr[g],arr[h],arr[i]];
    var res =true;
    for(x=0;x<=8;x++){
    if(l.every(y => lst.includes(y))){
        //console.log(lst);
        if(x==2||x==5){
            a+=21, b+=21,c+=21,d+=21,e+=21,f+=21,g+=21,h+=21,i+=21;
        }
        else{
            a+=3,b+=3,c+=3,d+=3,e+=3,f+=3,g+=3,h+=3,i+=3;
        }
        lst=[arr[a],arr[b],arr[c],arr[d],arr[e],arr[f],arr[g],arr[h],arr[i]];
        //console.log(lst);
        }
        else{
            res = false;
            break;
        }
    }return res;
}

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case '1':{
                value = 1;
                console.log(value);
                break;
            }
            case '2':
                value = 2;
                console.log(value);
                break;
            case '3':
                value = 3;
                console.log(value);
                break;
            case '4':
                value = 4;
                break;
            case '5':
                value = 5;
                console.log(value);
                break;
            case '6':
                value = 6;
                console.log(value);
                break;
            case '7':
                value = 7;
                console.log(value);
                break;
            case '8':
                value = 8;
                console.log(value);
                break;
            case '9':
                value = 9;
                console.log(value);
                break;
            default:
                value =0;
        }
    });
});

d.map( button => {
    button.addEventListener('click', (e) => {
        if (value!=0){
        e.target.innerText = value;
        f[e.target.id]= value;
        console.log(f);
        value=0;
        }
    });
});
document.getElementById('makenew').onclick = function(){
    displayArray(g);
}
document.getElementById('clear').onclick = function(){
    clearBoard(origArr);
}
document.getElementById('checksolved').onclick = function(){
    checkSolved(g);
}

