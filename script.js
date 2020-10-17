let scale = document.getElementById("scale");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let sc = scale.style.width;
let countPl = 0;
let countMin = 0;


sc = 1;

const pl = ()=>{
    countPl +=1;
    sc += 1;
    plus.innerText = `+${countPl}`
    scale.style.width = `${sc}%`
} 

const min = ()=>{
    countMin +=1;
    sc -= 1;
    minus.innerText = `-${countMin}`
    scale.style.width = `${sc}%`
  } 

plus.addEventListener("click", pl);
minus.addEventListener("click", min);






let _sc1 = document.getElementById("_sc1");
let _sc2 = document.getElementById("_sc2");
let _plus = document.getElementById("_plus");
let _minus = document.getElementById("_minus");
let s1 = _sc1.style.width;
let s2 = _sc2.style.width;

s1 = 1;
s2 = 1;

  _plus.addEventListener("click", ()=>{
    countPl +=1;
    s1 += 1;
    _plus.innerText = `-${countPl}`
    _sc1.style.width = `${s1}%`
});

  _minus.addEventListener("click", ()=>{
    countMin +=1;
    s2 += 1;
    _minus.innerText = `+${countMin}`
    _sc2.style.width = `${s2}%`
  });


