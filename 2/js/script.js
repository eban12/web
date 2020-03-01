var form = document.getElementById("percentageForm");


form.addEventListener("submit", function(event) {
    var x = document.getElementById("X");
    var y = document.getElementById("Y");
    if (x.value && y.value){
        var result = parseFloat(x.value) * 100 / parseFloat(y.value)  
        document.getElementById("result").innerText = "Result = " + result + "%";
    } else {
        alert("Please Enter Values!");
    }
    event.preventDefault();    
});

// function calculate() {
//     var x = document.getElementById("X");
//     var y = document.getElementById("Y");

//     document.getElementById("result").innerText = x.value + " " + y.value;
// }