const gasten = document.querySelectorAll('.gast-div');

gasten.forEach(gast => {
    gast.addEventListener("click", () => {
        const gastId = gast.getAttribute("id");
        window.location.href = "../gastpage?gast="+ gastId;
    });
});