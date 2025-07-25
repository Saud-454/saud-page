document.getElementById("sirv").onclick = function(){


    let thgg = window.confirm(`عفوا هذه صفحة خاصة 
    سيتوجب إدخال كلمة المرور ان كانت لديك صلاحية وصول.`);

    if (thgg === true ){
        let password = window.prompt(`أدخل كلمة المرور`);
        
        if (password === null){
            return
        }
        
        if (password === "4545") {
             window.location.href= "https://binshiekhin.github.io/crmxi/"
        }
        
        else {
            alert("كلمة المرور خاطئة")
    }
    }else {
        event.preventDefault()
    }


}


