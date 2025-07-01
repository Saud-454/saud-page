


document.getElementById("numberInput1").oninput = function(){
    this.value = this.value.replace(/[^0-9.]/g, '');
    let nsfQatar = document.getElementById("numberInput1").value;
    nsfQatar = Number(nsfQatar)
    const PI = 3.14;
    msahh = nsfQatar**2 *PI;  
    document.getElementById("natej1").textContent = `  ${msahh}  `
}
