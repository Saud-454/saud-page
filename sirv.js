document.getElementById("sirv").onclick = function(event) {

    let thgg = window.confirm(`ستنتقل الى موقعي الشخصي`);

    if (thgg === true) {
        window.location.href = "https://binshiekhin.github.io/crmxi/";
    } else {
        event.preventDefault();
    }

};