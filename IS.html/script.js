document.addEventListener("mousemove", (e) => {
    let x = (e.clientX / window.innerWidth - 0.5) * 200;
    let y = (e.clientY / window.innerHeight - 0.5) * 200;
    document.querySelector(".hero").style.transform = `translate(${x}px, ${y}px)`;
});
