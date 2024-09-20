window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            const scrollBtn = document.getElementById("scrollBtn");
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        }

        // Función para volver arriba
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }