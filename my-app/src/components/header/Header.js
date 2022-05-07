import './Header.css';

function Header() {
    return (
        <nav class='header-nav'>
            <div class="header-nav-element">
                <p class='header-para'>home</p>
            </div>
            <div class="header-nav-element">
                <p class='header-para'>projects</p>
            </div>
            <div class="header-nav-element">
                <p class='header-para'>accomplishments</p>
            </div>
            <div class="header-nav-element">
                <p class='header-para'>about me</p>
            </div>
        </nav>
    );
}

export default Header;