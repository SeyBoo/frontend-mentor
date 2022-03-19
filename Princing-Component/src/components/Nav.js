function Nav() {
    return (
        <nav>
            <h1>Our princing</h1>
            <div class="nav-option">
                <p>Annually</p>
                <label class="switch">
                    <input type="checkbox" id="type"></input>
                    <span class="slider round"></span>
                    </label>
                <p>Monthly</p>
            </div>
        </nav>
    )
}

export default Nav