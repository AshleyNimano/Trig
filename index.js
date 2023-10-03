//sin functions
const ge = document.getElementById("ge");
const hy = document.getElementById("hy");
const an = document.getElementById("angles");
const calc = document.getElementById("calcs");


let ratio;
let sin1, sin2, sin3;
let angleP;

calc.addEventListener("click",  function() { 
    if(ge.value === ''){

        angleP = (Math.PI * an.value) / 180;

        
        sin1 = hy.value * Math.sin(angleP);

        console.log(ratio)
        console.log("Oppokateus: " + sin1 );
    
    } else if(hy.value === ''){

        angleP = (Math.PI * an.value) / 180;

        sin2 = ge.value / Math.sin(angleP);

        console.log(sin2    )
 
    }else if(an.value === ''){
    
        sin3 = Math.asin(ge.value / hy.value);
        
        console.log(sin3)

    }
});


//tan function

const geT = document.getElementById("get");
const anT = document.getElementById("ant");
const angleT = document.getElementById("anglet");
const calcT = document.getElementById("calct");


let tan1, tan2, tan3, tan4;
let angleD
calcT.addEventListener("click", function(){
    if(geT.value === '' && anT.value === '' && angleT.value === ''){
        alert("Add more information")
    } else if(geT.value === ''){
        angleD = angleT.value * Math.PI / 180;
        sin1 = Math.tan(angleD) * anT.value;
        console.log(sin1);
    } else if(anT.value === ''){
        angleD = (Math.PI * angleT.value) / 180;
        sin2 = geT.value / Math.tan(angleD);
        console.log(sin2) 
    } else if(angleT.value === ''){

        tan3 = Math.atan(geT.value / anT.value)
        tan4 = tan3 *s (180 / Math.PI);
        angleT.value = tan4;

    }
});

const anC = document.getElementById("anc");
const hyC = document.getElementById("hyc");
const angleC = document.getElementById("anglec");
const calcC = document.getElementById("calcc");


let cos1, cos2, cos3, cos4;
angleCC
calcT.addEventListener("click", function(){
    if(geT.value === '' && anT.value === '' && angleT.value === ''){
        alert("Add more information")
    } else if(geT.value === ''){
        angleCC = angleT.value * Math.PI / 180;
        sin1 = Math.tan(angleCC) * anT.value;
        console.log(sin1);
    } else if(anT.value === ''){
        angleCC = (Math.PI * angleT.value) / 180;
        sin2 = geT.value / Math.tan(angleCC);
        console.log(sin2) 
    } else if(angleT.value === ''){

        tan3 = Math.atan(geT.value / anT.value)
        tan4 = tan3 *s (180 / Math.PI);
        angleT.value = tan4;

    }
});



