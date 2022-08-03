function loadNav() {
    let nav = document.getElementById('#nav');

    nav.innerHTML = (`
        <nav>
        <ul class="hq-nav">
            <li class="hq-nav-button"><a href="index.html">Home</a></li>
            <li class="hq-nav-button"><a href="about.html">About</a></li>
            <li class="hq-nav-button"><a href="music.html">Music</a></li>
            <li class="hq-nav-button"><a href="contact.html">Contact</a></li>
        </ul>
        </nav>
    `);
}

