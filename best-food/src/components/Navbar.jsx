
export default function Navbar(props) {
    return(
        <div className="logo" id="custom-nav">
            <img src={props.logo} alt={props.logoName}/>

            <ul className='nav-tabs'>
                <li><a href={props.route}>Saved Places</a></li>
                <li><a href={props.route}>Account</a></li>
                <li><a href={props.route}>About</a></li>
            </ul>
        </div>
    )
}