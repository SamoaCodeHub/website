export function scrollToTop() {
    const el = document.querySelector("#Hero");
    el.scrollIntoView({
        behavior: 'smooth'
    });
}
