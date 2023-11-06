import './NavBar.css';

const NavBar = () => {
    return(
        <div className="nav_bar">
          <div id='name' className='nav_item'><sub>_</sub>&#8457;<sub>.</sub>&#514;<sub>.</sub>l<sub>.</sub>&#8450;<sub>.</sub>o<sub>.</sub>&#8501;<sub>_</sub></div>
          <div className='nav_end nav_item'>
            <div><a href=''>Home</a></div>
            <div><a href=''>Blog</a></div>
            <div><a href=''>Contact</a></div>
          </div>
        </div>
    );
}
export default NavBar;