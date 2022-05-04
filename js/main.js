'use strict';

{
    function inViewCallback (entries, obs) {
        entries.forEach( entry => {
            if(!entry.isIntersecting){
                entry.target.classList.remove('appear');
                return;
            }

            entry.target.classList.add('appear');
        });
    }

    const inViewObserver = new IntersectionObserver(inViewCallback, {
        threshold: 0.2,
    });

    document.querySelectorAll('.target').forEach(el => {
        inViewObserver.observe(el);
    });
}
