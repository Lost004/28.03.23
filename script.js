"use strict";
//1
let a=5;
let b=10;
let result = (a+b<10 ) ? "Yes":"No";
console.log(result)
//2
function numPower(num,pow){
    let result =1;
    for(let i=0;i<pow;i++){
        result*=num
    }
    return result;
}
//3
let tbl=document.getElementById('tbl');
let slc=document.getElementById('slc');

function add(){

    tbl.style.display = 'table';

    
    let result='';
    let color; 
    for(let i=1;i<=slc.value;i++){

        result+=`<tr>`;

        for(let j=1;j<=slc.value;j++){
            color = (i+j)%2== 0? 'black' : '';
            result+=`<td style="background-color:${color};"> ${i}+${j} </td>`;
        }
        result+=`</tr>`;
    }

    tbl.innerHTML = result;
}

slc.addEventListener('change', add);
