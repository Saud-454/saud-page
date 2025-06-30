document.getElementById("sirv").onclick = function(){


    let thgg = window.confirm(`عفوا هذه صفحة خاصة 
    سيتوجب إدخال كلمة المرور ان كانت لديك صلاحية وصول.`);

    if (thgg === true ){
        let password = window.prompt(`أدخل كلمة المرور`);
        if (password === "1234") {
             window.location.href= "https://alfalqi1.online/sirv.html"
        }
        else if (password === null){
            event.preventDefault()
        }
        else (
            alert("كلمة المرور خاطئة")
        )
    }else {
        event.preventDefault()
    }


}


