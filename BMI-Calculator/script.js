const submitButton = document.getElementById('submitButton')
const remark = document.createElement('p');
console.log(remark);
submitButton.addEventListener('click', function (e) {

  const height = document.getElementById('height').value
  const weight = document.getElementById('weight').value
  
  result.innerHTML=`BMI : ${(weight/(height*height)).toFixed(2)}`
  if(weight/(height*height)<=18.4){
    remark.innerHTML="Underweight";
    console.log(remark.innerHTML);
  }
  else if(weight/(height*height)<=24.9){
    remark.innerHTML="Normal"
  }
  else if(weight/(height*height)<=39.9){
    remark.innerHTML="Overweight"
  }
  else{
    remark.innerHTML="Obese"
  }
  document.getElementById('remarks').append(remark);
});