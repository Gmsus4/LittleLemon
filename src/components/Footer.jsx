import { NavOptions } from "./NavOptions"

export const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-img">
                <img src="/lemon.webp" alt="Decorative image of a lemon" />
            </div>
            <nav className="footer-navigation">
                <div>
                    <h2>Doormat Navigation</h2>
                    <NavOptions />
                </div>
                <div>
                    <h2>Contact</h2>
                    <ul>
                        <li><a href="#" aria-label="Address">Address</a></li>
                        <li><a href="#" aria-label="Phone number">Phone number</a></li>
                        <li><a href="#"  aria-label="Email">Email</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Social Media Links</h2>
                    <ul>
                        <li><a href="#" aria-label="Facebook">Facebook</a></li>
                        <li><a href="#" aria-label="Twitter">Twitter</a></li>
                        <li><a href="#" aria-label="Instagram">Instagram</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </footer>
  )
}
