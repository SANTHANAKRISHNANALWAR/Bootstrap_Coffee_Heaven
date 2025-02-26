// For navbar Collapse after the navLink clicked    
    
    document.addEventListener("DOMContentLoaded", function () {
        let navLinks = document.querySelectorAll(".nav-link");
        let navbarCollapse = document.querySelector(".navbar-collapse");

        navLinks.forEach(function (link) {
            link.addEventListener("click", ()=> {
                if (navbarCollapse.classList.contains("show")) {
                    new bootstrap.Collapse(navbarCollapse).hide();
                }
            });
        });
    });
