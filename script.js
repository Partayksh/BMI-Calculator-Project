// <!-- BMI - Calculator Project -->

const form = document.querySelector('form')
// weight-guide
const guide = document.querySelector('#weight-guide')
form.addEventListener('submit', function (val) {

    val.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    // console.log(height);
    const Weight = parseInt(document.querySelector('#weight').value)
    // console.log(Weight);
    const result = document.querySelector('#results')

    // console.log(result);
    if (height < 0 || height === "" || isNaN(height)) {
        result.innerHTML = `Please Enter a Valid Height `;
    }
    else if (Weight < 0 || Weight === "" || isNaN(Weight)) {
        result.innerHTML = 'Please Enter a Valid Weight';
    }
    else {
        var ibm = (Weight / ((height * height) / 10000.)).toFixed(2);
        result.innerHTML = ibm;

    }
    // guide.style.display = 'none';

    if (ibm < 18.6) {
        // const under = document.createElement('p');
        guide.innerHTML = "You are Under Weight"
    //   const underweight=  document.querySelector('#weight-guide').appendChild(under)
    //   guide.replaceWith(underweight)


    }
    else if (ibm >= 18.6 && ibm < 24.9) {
    //     const normal = document.createElement('p');
    //    const normalweight= normal.innerHTML = "Normal : Maintain it"
    //     document.querySelector('#weight-guide').appendChild(normal)
    //     guide.replaceWith(normalweight)
    guide.innerHTML = "Normal : Maintain it"
    }
    else if(ibm>24.9){
        // const over = document.createElement('p');
        // over.innerHTML = "Overweight : Lose the Fat"
        // const overweight=  document.querySelector('#weight-guide').appendChild(over)
        // guide.replaceWith(overweight)
        guide.innerHTML = "Overweight : Lose the Fat"
    }

})