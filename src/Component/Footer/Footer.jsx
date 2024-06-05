import social from '../../assets/social.png'
const Footer = () => {
    return (
        <div className="mt-80">
            <footer className="footer max-w-7xl mx-auto p-10">
                <nav>
                    <h6 className="footer-title">OrionSAAS</h6>
                    <p>Bootstrapping accelerator termsheet partnership non-disclosure <br /> agreement. Research & development stealth user experience direct <br /> mailing crowdfunding niche market gamification crowdsource <br /> facebook iPhone value proposition seed money.</p>
                    <div className='flex items-center '>
                    <a className="link link-hover mr-3">Follow us</a>
                    <img className='h-3' src={social} alt="" />
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title" >Features</h6>
                    <a className="link link-hover">Organic SEO</a>
                    <a className="link link-hover">Local SEO</a>
                    <a className="link link-hover">Social Media Marketing</a>
                    <a className="link link-hover">PPC Marketing</a>
                    <a className="link link-hover">SEO Analysis</a>
                    <a className="link link-hover">Reputation Management</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Our Team</a>
                    <a className="link link-hover">Contact Us</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;