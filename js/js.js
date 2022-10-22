// I hate this so much
window.onload = function() {
    // Get Buttons to add Click event
    const homeBtn       = document.getElementById('homeBtn');
    const linksBtn      = document.getElementById('linksBtn');
    const aboutBtn      = document.getElementById('aboutBtn');
    const contactBtn    = document.getElementById('contactBtn');

    // Get Div elements to show/hide
    const homeSection       = document.getElementById('secHome');
    const linksSection      = document.getElementById('secLinks');
    const aboutSection      = document.getElementById('secAbout');
    const contactSection    = document.getElementById('secContact');

    /*const homeSection       = document.getElementById('home');
    const linksSection      = document.getElementById('links');
    const aboutSection      = document.getElementById('about');
    const contactSection    = document.getElementById('contact');*/

    // Set section visibility for first time load
    homeSection.style.visibility    = 'visible';
    linksSection.style.visibility   = 'hidden';
    aboutSection.style.visibility   = 'hidden';
    contactSection.style.visibility = 'hidden';

    // Set CSS styles for Home
    homeBtn.className = 'hq-nav-button-active';

    //homeSection.style.visibility = 'visible';

    homeBtn.onclick     = function() {toggleSectionVisibility('home');};
    linksBtn.onclick    = function() {toggleSectionVisibility('links');};
    aboutBtn.onclick    = function() {toggleSectionVisibility('about');};
    contactBtn.onclick  = function() {toggleSectionVisibility('contact');};

    // There's probably a better way to do this lol
    function toggleSectionVisibility(clicked) {
        switch(clicked) {
            case 'home':
                hideSection([linksSection, aboutSection, contactSection]);
                showSection(homeSection);
                revertCSS([linksBtn, aboutBtn, contactBtn]);
                changeCSS(homeBtn);
                break;
            case 'links':
                hideSection([homeSection, aboutSection, contactSection]);
                showSection(linksSection);
                revertCSS([homeBtn, aboutBtn, contactBtn]);
                changeCSS(linksBtn);
                break;
            case 'about':
                hideSection([linksSection, homeSection, contactSection]);
                showSection(aboutSection);
                revertCSS([linksBtn, homeBtn, contactBtn]);
                changeCSS(aboutBtn);
                break;
            case 'contact':
                hideSection([linksSection, aboutSection, homeSection]);
                showSection(contactSection);
                revertCSS([linksBtn, aboutBtn, homeBtn]);
                changeCSS(contactBtn);
                break;
        }
    }

    function hideSection(sections) {
        for(i = 0; i < sections.length; i++) {
            //sections[i].className           = 'hq-card-hidden';
            sections[i].style.visibility    = 'hidden';
            sections[i].style.height        = '0px';
        }
    }

    function showSection(section) {
        //section.className           = 'hq-card';
        section.style.visibility    = 'visible';
    }

    function revertCSS(sections) {
        for(i = 0; i < sections.length; i++) {
            sections[i].className = 'hq-nav-button';
        }
    }

    function changeCSS(section) {
        section.className = 'hq-nav-button-active';
    }
}