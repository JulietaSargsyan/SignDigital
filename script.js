window.onscroll = function(ev) {
    const line = document.getElementById('stiky-line');
    const lineA = document.getElementById('lineA');
    // let css_of_before = window.getComputedStyle(line, '::before');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        line.style.setProperty('--beforeDisplay', 'block');
        lineA.style.cursor = 'pointer';
        line.style.cursor = 'pointer';
        line.classList.add('lineAnimation');
        line.addEventListener('mouseover', () => line.classList.add('lineAnimationHover') )
        line.addEventListener('mouseout', () => line.classList.remove('lineAnimationHover') )

    } else {
        line.style.setProperty('--beforeDisplay', 'none')
        lineA.style.cursor = 'default';
        line.classList.remove('lineAnimation');
        lineA.addEventListener('mouseover', () => lineA.classList.remove('lineAnimationHover') )
    }
};


  const path = document.querySelector('#myPath');
  const rect = document.querySelector('#rec');
  const pathLength = path.getTotalLength();
  const rectLength = rect.getTotalLength();
  const step = 0.01; // Smaller value for smoother animation
  
  let pos = 0;
  let angle = 0;
  
  function updateRect() {
    pos += step;
    if (pos > 1) {
      pos = 0;
    }
    
    const pt = path.getPointAtLength(pos * pathLength);
    const prevPt = path.getPointAtLength((pos - step) * pathLength);
    const dx = pt.x - prevPt.x;
    const dy = pt.y - prevPt.y;
    angle = Math.atan2(dy, dx) * 180 / Math.PI;
    
    rect.setAttribute('x', pt.x - rectLength / 2);
    rect.setAttribute('y', pt.y - rectLength / 2);
    rect.setAttribute('transform', `rotate(${angle}, ${pt.x}, ${pt.y})`);
    
    window.requestAnimationFrame(updateRect);
  }
  
  updateRect();