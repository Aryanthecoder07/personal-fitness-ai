var w8=document.getElementById('w8')
var hit=document.getElementById('hit')
var result=document.getElementById('result')
var form=document.getElementById('bmi')
form.addEventListener('submit',function(event) {
    if(!w8.value || !hit.value){
        alert("please enter values")
    }
    else{
        var x=parseFloat(w8.value)
        var y=parseFloat(hit.value)
        var b=x/(y*y)
        result.innerText="BMI:"+b;
        event.preventDefault()
    }
})