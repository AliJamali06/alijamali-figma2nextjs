export default function Navbar() {
    return (
    <header className="navbar">
      <div className="container header-content">
        <img className="logo" src="/image.png" alt="Logo" />
        <ul className="navigation">
          <li className="main">MAIN</li>
          <li>GALLERY</li>
          <li>PROJECTS</li>
          <li>CERTIFICATIONS</li>
          <li>CONTACTS</li>
        </ul>
      </div>    
    </header>
   );
}