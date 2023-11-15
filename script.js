document.getElementById("navbar-toggler").addEventListener("click", function() {
    const navbarLinks = document.querySelectorAll(".nav-link");
    for (const link of navbarLinks) {
        link.style.display = link.style.display === "none" ? "block" : "none";
    }
});
