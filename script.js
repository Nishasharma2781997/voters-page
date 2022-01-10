let bjp = document.getElementById('bjp');
let c1 = document.createElement('span');
bjp.appendChild(c1);

console.log(bjp);

let congress = document.getElementById('congress');
let c2 = document.createElement('span');
congress.appendChild(c2);

//console.log(congress);

let mns = document.getElementById('mns');
let c3 = document.createElement('span');
mns.appendChild(c3);

//console.log(mns);
let count1= 0;
let count2=0;
let count3=0;
let a1 = document.getElementById('header');
let thanks = document.createElement('p');
a1.appendChild(thanks);

function onclick1(){
    if(bjp.onclick){
        count1 += 1;
        //c1.innerHTML = count1;
        thanks.innerHTML ='thanks for voting'
    }
    console.log(count1);
}

function onclick2(){
    if(bjp.onclick){
        count2 += 1;
        console.log('clicked');
       // c2.innerHTML = "votes by congress is ${count2}";
        thanks.innerHTML ='thanks for voting'
    }
    return count2;
}
function onclick3(){
    if(bjp.onclick){
        count3 += 1;
        console.log('clicked');
       // c3.innerHTML = "votes by mns is ${count3}"
        thanks.innerHTML ='thanks for voting'
    }
    return count3;
}

let sub = document.getElementById('btn');
let bd = document.createElement('p');

sub.appendChild(bd);
sub.addEventListener('click', function(){
    console.log('clicked for votes')
    bd.innerHTML = `votes by BJP is ${count1} <br>
                    votes by congress is ${count2} <br>
                    votes by mns is ${count3} <br> and total votes ${count1 + count2 + count3}`
})