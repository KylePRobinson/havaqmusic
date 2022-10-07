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

    homeBtn.onclick     = function() {hideSection();showSection()};
    musicBtn.onclick    = function() {hideSection();showSection()};
    aboutBtn.onclick    = function() {hideSection();showSection()};
    contactBtn.onclick  = function() {hideSection();showSection()};

    function hideSection() {
        homeSection.style.visibility = 'visible';
    }

    function showSection() {
    }
}