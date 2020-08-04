
    const generatePin = document.getElementById("generatePin");
    generatePin.addEventListener("click", function(){
        // var number = Math.random()*10000;
        var result = Math.floor(1000 + Math.random() * 9000);
        // var result = Math.round(number);
        document.getElementById("displayPin").value = result;
        
    })

    //verify
    
    const submit = document.getElementById("submitBtn");
    submit.addEventListener("click", function(){
    const verify = document.getElementById("screen").value;
    const randVal = document.getElementById("displayPin").value;
        if(verify =="" || randVal ==""){
            document.getElementById("warningGen").style.display = "block";
           
        }
    
        else if(verify == randVal){
        document.getElementById("warningScc").style.display = "block";
    }
        else{
        document.getElementById("warningErr").style.display = "block";
       
    }

    })
    