window.onscroll = function(ev) {
    const line = document.getElementById('stiky-line');
    const lineA = document.getElementById('lineA');
    // let css_of_before = window.getComputedStyle(line, '::before');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        line.style.setProperty('--beforeDisplay', 'block');
        // line.style.cssText += 'cursor:pointer';  
        lineA.style.cursor = 'pointer';
        line.classList.add('lineAnimation');
    } else {
        line.style.setProperty('--beforeDisplay', 'none')
        lineA.style.cursor = 'default';
        line.classList.remove('lineAnimation');
    }
};


// ptxni 3rd aygegortsakan zangvac, 1in taxamas, hamar 50 kisakaruuyc