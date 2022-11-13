// Probably a better way to do this
window.onload = function() {
    // Page Buttons
    const homeBtn       = document.getElementById('homeBtn');
    const linksBtn      = document.getElementById('linksBtn');
    const aboutBtn      = document.getElementById('aboutBtn');
    const contactBtn    = document.getElementById('contactBtn');
    // Mini Nav Buttons
    const navBtnMini        = document.getElementById('navBtnMini');
    const homeBtnMini       = document.getElementById('homeBtnMini');
    const linksBtnMini      = document.getElementById('linksBtnMini');
    const aboutBtnMini      = document.getElementById('aboutBtnMini');
    const contactBtnMini    = document.getElementById('contactBtnMini');

    // Get Div elements to show/hide
    const miniNavSection    = document.getElementById('secMiniNav');
    const homeSection       = document.getElementById('secHome');
    const linksSection      = document.getElementById('secLinks');
    const aboutSection      = document.getElementById('secAbout');
    const contactSection    = document.getElementById('secContact');

    /*const homeSection       = document.getElementById('home');
    const linksSection      = document.getElementById('links');
    const aboutSection      = document.getElementById('about');
    const contactSection    = document.getElementById('contact');*/

    // Set section visibility for first time load
    miniNavSection.style.visibility = 'hidden';
    miniNavSection.style.height     = '0px';
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

    navBtnMini.onclick      = function() {toggleNav('nav');};
    homeBtnMini.onclick     = function() {toggleSectionVisibility('home');};
    linksBtnMini.onclick    = function() {toggleSectionVisibility('links');};
    aboutBtnMini.onclick    = function() {toggleSectionVisibility('about');};
    contactBtnMini.onclick  = function() {toggleSectionVisibility('contact');};

    // There's probably a better way to do this lol
    const toggleSectionVisibility = (clicked) => {
        switch(clicked) {
            case 'nav': 
                toggleNav();
                break;
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

    const toggleNav = () => {
        const miniNavSectionVisibility = miniNavSection.style.visibility;
        if (miniNavSectionVisibility === 'hidden') {
            miniNavSection.style.visibility = 'visible';
            miniNavSection.style.height     = 'auto';
        } else {
            miniNavSection.style.visibility = 'hidden';
            miniNavSection.style.height     = '0px';
        }
    }

    const hideSection = (sections) => {
        for(i = 0; i < sections.length; i++) {
            //sections[i].className           = 'hq-card-hidden';
            sections[i].style.visibility    = 'hidden';
            sections[i].style.height        = '0px';
        }
    }

    const showSection = (section) => {
        //section.className           = 'hq-card';
        section.style.visibility    = 'visible';
    }

    const revertCSS = (sections) => {
        for(i = 0; i < sections.length; i++) {
            sections[i].className = 'hq-nav-button';
        }
    }

    const changeCSS = (section) => {
        section.className = 'hq-nav-button-active';
    }
}