function Header({handleScroll}) {
  
  return (
<>
<header className="header">
      <div className="logo">
        <h1>Druze Analytics</h1>
      </div>     
        <ul className="nav">
          <li><button onClick={() => handleScroll('Home')}>Home</button></li>
          <li><button onClick={() => handleScroll('about')}>About Us</button></li>
          <li><button onClick={() => handleScroll('services')}>Services</button></li>
          <li><button onClick={() => handleScroll('contact')}>Contact</button></li>
        </ul>
        
    </header>
</>
)
}

export default Header;