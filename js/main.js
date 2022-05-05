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

    function onScrollCallback(entries, obs) {
        entries.forEach( entry => {
            if(!entry.isIntersecting){
                header.classList.add('scrolled');
                toTop.classList.add('scrolled');
            }else{
                header.classList.remove('scrolled');
                toTop.classList.remove('scrolled');
            }
        })
    }

    const header = document.querySelector('header');
    const toTop = document.getElementById('nav')

    const inViewObserver = new IntersectionObserver(inViewCallback, {
        threshold: 0.2,
    });

    document.querySelectorAll('.target').forEach(el => {
        inViewObserver.observe(el);
    });

    const onScrollObserver = new IntersectionObserver(onScrollCallback);

    onScrollObserver.observe(document.getElementById('scroll_target'));
}
