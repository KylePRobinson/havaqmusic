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
                hideSection([musicSection, aboutSection, contactSection]);
                showSection(homeSection);
                break;
            case 'music':
                hideSection([homeSection, aboutSection, contactSection]);
                showSection(musicSection);
                break;
            case 'about':
                hideSection([musicSection, homeSection, contactSection]);
                showSection(aboutSection);
                break;
            case 'contact':
                hideSection([musicSection, aboutSection, homeSection]);
                showSection(contactSection);
                break;
        }
    }

    function hideSection(sections) {
        for(i = 0; i < sections.length; i++) {
            sections[i].style.visibility    = 'hidden';
            sections[i].style.height        = '0px';
        }
    }

    function showSection(section) {
        section.style.visibility    = 'visible';
    }
}