// for 3*3 matrix 

      
      //for cofactor of matrix
      let findcf =()=>{

        document.getElementById("result").style.display = "block";
            
        const in1 = document.getElementById("n1").value;
        const in2 = document.getElementById("n2").value;
        const in3 = document.getElementById("n3").value;
        const in4 = document.getElementById("n4").value;
        const in5 = document.getElementById("n5").value;
        const in6 = document.getElementById("n6").value;
        const in7 = document.getElementById("n7").value;
        const in8 = document.getElementById("n8").value;
        const in9 = document.getElementById("n9").value;

        let c11 = ((in5*in9)-(in6*in8)) *((-1)**2);
        let c12 = ((in4*in9)-(in6*in7)) *((-1)**3);
        let c13 = ((in4*in8)-(in5*in7)) * (-1)**4;
        let c21 = ((in2*in9)-(in3*in8)) * (-1)**3;
        let c22 = ((in1*in9)-(in3*in7)) * (-1)**4;
        let c23 = ((in1*in8)-(in2*in7)) * (-1)**5;
        let c31 = ((in2*in6)-(in3*in5)) * (-1)**4;
        let c32 = ((in1*in6)-(in3*in4)) * (-1)**5;
        let c33 = ((in5*in1)-(in2*in4)) * (-1)**6;

      

        document.getElementById("c11").innerHTML=  "C11: "+ c11;
        document.getElementById("c12").innerHTML= "C12: "+ c12;
        document.getElementById("c13").innerHTML= "C13: "+ c13;
        document.getElementById("c21").innerHTML= "C21: "+ c21;
        document.getElementById("c22").innerHTML= "C22: "+ c22;
        document.getElementById("c23").innerHTML= "C23: "+ c23;
        document.getElementById("c31").innerHTML= "C31: "+ c31;
        document.getElementById("c32").innerHTML= "C32: "+ c32;
        document.getElementById("c33").innerHTML= "C33: "+ c33;
      }

      //for the mdulud of matrix

      let findmod=()=>{
        document.getElementById("result").style.display = "block";


        const in1 = document.getElementById("n1").value;
        const in2 = document.getElementById("n2").value;
        const in3 = document.getElementById("n3").value;
        const in4 = document.getElementById("n4").value;
        const in5 = document.getElementById("n5").value;
        const in6 = document.getElementById("n6").value;
        const in7 = document.getElementById("n7").value;
        const in8 = document.getElementById("n8").value;
        const in9 = document.getElementById("n9").value;

        let mod = (in1*((in5*in9)-(in6*in8)) - in2*((in4*in9)-(in6*in7)) + in3*((in4*in8)-(in5*in7)) );
       document.getElementById("c11").innerHTML = mod;

        document.getElementById("c12").innerHTML= "";
        document.getElementById("c13").innerHTML= "";
        document.getElementById("c21").innerHTML= "";
        document.getElementById("c22").innerHTML="";
        document.getElementById("c23").innerHTML= "";
        document.getElementById("c31").innerHTML="";
        document.getElementById("c32").innerHTML= "";
        document.getElementById("c33").innerHTML="";
      }

      //for the adjoint of the matrix

      let findadj = ()=>{

        document.getElementById("result").style.display = "block";

        const in1 = document.getElementById("n1").value;
        const in2 = document.getElementById("n2").value;
        const in3 = document.getElementById("n3").value;
        const in4 = document.getElementById("n4").value;
        const in5 = document.getElementById("n5").value;
        const in6 = document.getElementById("n6").value;
        const in7 = document.getElementById("n7").value;
        const in8 = document.getElementById("n8").value;
        const in9 = document.getElementById("n9").value;

        let c11 = ((in5*in9)-(in6*in8)) *((-1)**2);
        let c12 = ((in4*in9)-(in6*in7)) *((-1)**3);
        let c13 = ((in4*in8)-(in5*in7)) * (-1)**4;
        let c21 = ((in2*in9)-(in3*in8)) * (-1)**3;
        let c22 = ((in1*in9)-(in3*in7)) * (-1)**4;
        let c23 = ((in1*in8)-(in2*in7)) * (-1)**5;
        let c31 = ((in2*in6)-(in3*in5)) * (-1)**4;
        let c32 = ((in1*in6)-(in3*in4)) * (-1)**5;
        let c33 = ((in5*in1)-(in2*in4)) * (-1)**6;

      

        document.getElementById("c11").innerHTML= c11;
        document.getElementById("c12").innerHTML= c21;
        document.getElementById("c13").innerHTML= c31;
        document.getElementById("c21").innerHTML= c12;
        document.getElementById("c22").innerHTML= c22;
        document.getElementById("c23").innerHTML= c32;
        document.getElementById("c31").innerHTML= c13;
        document.getElementById("c32").innerHTML= c23;
        document.getElementById("c33").innerHTML= c33;
      }

      //for the inverse of the matrix ;


      let findinv=()=>{
      
        document.getElementById("result").style.display = "block";


        const in1 = document.getElementById("n1").value;
        const in2 = document.getElementById("n2").value;
        const in3 = document.getElementById("n3").value;
        const in4 = document.getElementById("n4").value;
        const in5 = document.getElementById("n5").value;
        const in6 = document.getElementById("n6").value;
        const in7 = document.getElementById("n7").value;
        const in8 = document.getElementById("n8").value;
        const in9 = document.getElementById("n9").value;

        let mod = (in1*((in5*in9)-(in6*in8)) - in2*((in4*in9)-(in6*in7)) + in3*((in4*in8)-(in5*in7)) );
        

        let c11 = ((in5*in9)-(in6*in8)) *((-1)**2) /mod;
        let c12 = ((in4*in9)-(in6*in7)) *((-1)**3) /mod;
        let c13 = ((in4*in8)-(in5*in7)) * ((-1)**4) /mod;
        let c21 = ((in2*in9)-(in3*in8)) * ((-1)**3) /mod;
        let c22 = ((in1*in9)-(in3*in7)) * ((-1)**4) /mod;
        let c23 = ((in1*in8)-(in2*in7)) * ((-1)**5) /mod;
        let c31 = ((in2*in6)-(in3*in5)) * ((-1)**4) /mod;
        let c32 = ((in1*in6)-(in3*in4)) * ((-1)**5) /mod;
        let c33 = ((in5*in1)-(in2*in4)) * ((-1)**6) /mod;

      

        document.getElementById("c11").innerHTML= c11;
        document.getElementById("c12").innerHTML= c21;
        document.getElementById("c13").innerHTML= c31;
        document.getElementById("c21").innerHTML= c12;
        document.getElementById("c22").innerHTML= c22;
        document.getElementById("c23").innerHTML= c32;
        document.getElementById("c31").innerHTML= c13;
        document.getElementById("c32").innerHTML= c23;
        document.getElementById("c33").innerHTML= c33;
      }

      //for the multiplication with num

      // let intowith=()=>{

      //   document.getElementById("result").style.display = "block";

      //   //getting all inputs

      //   const in1 = document.getElementById("n1").value;
      //   const in2 = document.getElementById("n2").value;
      //   const in3 = document.getElementById("n3").value;
      //   const in4 = document.getElementById("n4").value;
      //   const in5 = document.getElementById("n5").value;
      //   const in6 = document.getElementById("n6").value;
      //   const in7 = document.getElementById("n7").value;
      //   const in8 = document.getElementById("n8").value;
      //   const in9 = document.getElementById("n9").value;

      //   let z = document.getElementById("z").value;

      //   //setting all calculations
      //   let c11 = in1 * z;
      //   let c12 =  in2 * z;
      //   let c13 =  in3 * z;
      //   let c21 =  in4 * z;
      //   let c22 =  in5 * z;
      //   let c23 =  in6 * z;
      //   let c31 =  in7 * z;
      //   let c32 =  in8 * z;
      //   let c33 =  in9 * z;

      // }



//adding all the events to buttons 

      document.querySelector("#btn1").addEventListener("click", findcf);
      document.querySelector("#btn2").addEventListener("click", findadj);
      document.querySelector("#btn3").addEventListener("click", findinv);
      document.querySelector("#btn4").addEventListener("click", findmod);

      // document.querySelector("#btn10").addEventListener("click", intowith)



document.getElementById("rt").style.width=screen.width;
 

// for second 2X2 matrix 

document.getElementById("two2").addEventListener("click", ()=>{
  let main1 =   document.getElementsByClassName("main1")[0];
  let main2 =   document.getElementsByClassName("main2")[0];

    if(main1.style.display == "flex"){
        main1.style.display ="none";
        main2.style.display = "flex";
        document.getElementById("two2").innerHTML = "3X3 Matrix"
    }
    else{
        main1.style.display ="flex";
        main2.style.display = "none";
        document.getElementById("two2").innerHTML = "2X2 Matrix"

    }

})


//2X2 matrix starts 

let findcf2 =()=>{

    document.getElementById("result2").style.display = "block";
        
    const put1 = document.getElementById("put1").value;
    const put2 = document.getElementById("put2").value;
    const put3 = document.getElementById("put3").value;
    const put4 = document.getElementById("put4").value;
  

    let c11 = (put4) *((-1)**2);
    let c12 = (put3) *((-1)**3);
    let c21 = (put2) * (-1)**3;
    let C22 = (put1) * (-1)**4;
   

   let see11 = document.getElementById("see11");
   see11.innerHTML=(`C11: ${c11}`);

    document.getElementById("see12").innerHTML=(`C11: ${c12}`);
    document.getElementById("see21").innerHTML=(`C11: ${c21}`);
    document.getElementById("see22").innerHTML=(`C11: ${C22}`);

  }


  let findmod2=()=>{
    const in1 = document.getElementById("put1").value;
    const in2 = document.getElementById("put2").value;
    const in3 = document.getElementById("put3").value;
    const in4 = document.getElementById("put4").value;


    let mod = ((in1*in4)- (in2* in3));
    document.getElementById("see11").innerHTML = mod;

    document.getElementById("see12").innerHTML= "";
    document.getElementById("see21").innerHTML= "";
    document.getElementById("see22").innerHTML= "";

    document.getElementById("result2").style.display = "block";

  }


       //for the adjoint of the matrix 2X2

       let findadj2 = ()=>{

        document.getElementById("result2").style.display = "block";

        const in1 = document.getElementById("put1").value;
        const in2 = document.getElementById("put2").value;
        const in3 = document.getElementById("put3").value;
        const in4 = document.getElementById("put4").value;

        let c11 = (in4) *((-1)**2);
        let c12 = (in3) *((-1)**3);
        let c21 = (in2) * (-1)**3;
        let c22 = (in1) * (-1)**4;


      

        document.getElementById("see11").innerHTML= c11;
        document.getElementById("see12").innerHTML= c21;
        document.getElementById("see21").innerHTML= c12;
        document.getElementById("see22").innerHTML= c22;

      }


      
      //for the inverse of the matrix ;


      let findinv2=()=>{
      
        document.getElementById("result2").style.display = "block";


        const in1 = document.getElementById("put1").value;
        const in2 = document.getElementById("put2").value;
        const in3 = document.getElementById("put3").value;
        const in4 = document.getElementById("put4").value;


        let mod = ((in1*in4)-(in2*in3) );
        

        let c11 = (in4) *((-1)**2) /mod;
        let c12 = (in3) *((-1)**3) /mod;
        let c21  =(in2) *((-1)**4) /mod;
        let c22 = (in1) * ((-1)**3) /mod;
 

      

        document.getElementById("see11").innerHTML= c11;
        document.getElementById("see12").innerHTML= c21;
        document.getElementById("see21").innerHTML= c12;
        document.getElementById("see22").innerHTML= c22;

      }




  document.getElementById("btn5").addEventListener('click', findcf2);
  document.getElementById("btn6").addEventListener('click',findadj2);
  document.getElementById('btn7').addEventListener("click", findinv2);
  document.getElementById("btn8").addEventListener("click", findmod2);





  // fro minors both mib-pc sizes

  let minor = ()=>{

    document.getElementById("result").style.display="block";

    const in1 = document.getElementById("n1").value;
    const in2 = document.getElementById("n2").value;
    const in3 = document.getElementById("n3").value;
    const in4 = document.getElementById("n4").value;
    const in5 = document.getElementById("n5").value;
    const in6 = document.getElementById("n6").value;
    const in7 = document.getElementById("n7").value;
    const in8 = document.getElementById("n8").value;
    const in9 = document.getElementById("n9").value;

    let c11 = ((in5*in9)-(in6*in8)) ;
    let c12 = ((in4*in9)-(in6*in7)) ;
    let c13 = ((in4*in8)-(in5*in7));
    let c21 = ((in2*in9)-(in3*in8));
    let c22 = ((in1*in9)-(in3*in7));
    let c23 = ((in1*in8)-(in2*in7));
    let c31 = ((in2*in6)-(in3*in5));
    let c32 = ((in1*in6)-(in3*in4));
    let c33 = ((in5*in1)-(in2*in4));


    
    document.getElementById("c11").innerHTML=  "C11: "+ c11;
    document.getElementById("c12").innerHTML= "C12: "+ c12;
    document.getElementById("c13").innerHTML= "C13: "+ c13;
    document.getElementById("c21").innerHTML= "C21: "+ c21;
    document.getElementById("c22").innerHTML= "C22: "+ c22;
    document.getElementById("c23").innerHTML= "C23: "+ c23;
    document.getElementById("c31").innerHTML= "C31: "+ c31;
    document.getElementById("c32").innerHTML= "C32: "+ c32;
    document.getElementById("c33").innerHTML= "C33: "+ c33;
  

  }

  let minorfor2=()=>{
    
    document.getElementById("result2").style.display = "block";
        
    const put1 = document.getElementById("put1").value;
    const put2 = document.getElementById("put2").value;
    const put3 = document.getElementById("put3").value;
    const put4 = document.getElementById("put4").value;
  

    let c11 = (put4) *((-1)**2);
    let c12 = (put3) *((-1)**3);
    let c21 = (put2) * (-1)**3;
    let C22 = (put1) * (-1)**4;
   

   let see11 = document.getElementById("see11");
   see11.innerHTML=(`C11: ${c11}`);

    document.getElementById("see12").innerHTML=(`C11: ${c12}`);
    document.getElementById("see21").innerHTML=(`C11: ${c21}`);
    document.getElementById("see22").innerHTML=(`C11: ${C22}`);

  }


  /*adjustting 2*/

  if(screen.width <= 767){
    document.getElementById("two2").innerHTML = "2X2";
  }








