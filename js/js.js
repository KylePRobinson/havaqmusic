// I hate this so much
window.onload = function() {
    // Get Buttons to add Click event
    const homeBtn       = document.getElementById('homeBtn');
    const musicBtn      = document.getElementById('musicBtn');
    const aboutBtn      = document.getElementById('aboutBtn');
    const contactBtn    = document.getElementById('contactBtn');

    // Get Div elements to show/hide
    const homeSection       = document.getElementById('secHome');
    const musicSection      = document.getElementById('secMusic');
    const aboutSection      = document.getElementById('secAbout');
    const contactSection    = document.getElementById('secContact');

    // Set section visibility for first time load
    homeSection.style.visibility    = 'visible';
    musicSection.style.visibility   = 'hidden';
    aboutSection.style.visibility   = 'hidden';
    contactSection.style.visibility = 'hidden';

    //homeSection.style.visibility = 'visible';

    homeBtn.onclick     = function() {toggleSectionVisibility('home');};
    musicBtn.onclick    = function() {toggleSectionVisibility('music');};
    aboutBtn.onclick    = function() {toggleSectionVisibility('about');};
    contactBtn.onclick  = function() {toggleSectionVisibility('contact');};

    // There's probably a better way to do this lol
    function toggleSectionVisibility(clicked) {
        switch(clicked) {
            case 'home':
                homeSection.style.visibility    = 'visible';
                musicSection.style.visibility   = 'hidden';
                aboutSection.style.visibility   = 'hidden';
                contactSection.style.visibility = 'hidden';
                break;
            case 'music':
                homeSection.style.visibility    = 'hidden';
                musicSection.style.visibility   = 'visible';
                aboutSection.style.visibility   = 'hidden';
                contactSection.style.visibility = 'hidden';
                break;
            case 'about':
                homeSection.style.visibility    = 'hidden';
                musicSection.style.visibility   = 'hidden';
                aboutSection.style.visibility   = 'visible';
                contactSection.style.visibility = 'hidden';
                break;
            case 'contact':
                homeSection.style.visibility    = 'hidden';
                musicSection.style.visibility   = 'hidden';
                aboutSection.style.visibility   = 'hidden';
                contactSection.style.visibility = 'visible';
                break;
        }
    }
}