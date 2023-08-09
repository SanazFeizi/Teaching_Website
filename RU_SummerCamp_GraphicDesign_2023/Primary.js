function toggleActiveLink(link) {
    var links = document.querySelectorAll('.navigation a');
    links.forEach(function (item) {
        item.classList.remove('active');
    });
    link.classList.add('active');
}