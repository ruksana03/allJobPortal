import social from '../../assets/icons/social.png'

const Footer = () => {
    return (
        <footer className="p-10 bg-black  text-white font-['Manrope']">
            <div className="footer max-w-6xl mx-auto">
                <aside>
                    <a className="btn btn-ghost normal-case text-4xl">Career Hub</a>
                    <p className="text-[#FFFFFFB3] ml-5">There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
                    <img className='ml-5 mt-4' src={social} alt="" />
                </aside>
                <nav className='gap-4'>
                    <header className="text-xl font-semibold">Company</header>
                    <a className="link link-hover text-[#FFFFFFB3]">About Us
                    </a>
                    <a className="link link-hover text-[#FFFFFFB3]">Work
                    </a>
                    <a className="link link-hover text-[#FFFFFFB3]">Latest News
                    </a>
                    <a className="link link-hover text-[#FFFFFFB3]">Careers</a>
                </nav>
                <nav className='gap-4'>
                    <header className="text-xl font-semibold">Product</header>
                    <a className="link link-hover text-[#FFFFFFB3]">Prototype
                    </a>
                    <a className="link link-hover text-[#FFFFFFB3]">Plans & Pricing
                    </a>
                    <a className="link link-hover text-[#FFFFFFB3]">Customers
                    </a>
                    <a className="link link-hover text-[#FFFFFFB3]">Integrations</a>
                </nav>
                <nav className='gap-4'>
                    <header className="text-xl font-semibold">Support</header>
                    <a className="link link-hover text-[#FFFFFFB3]">Help Desk
                    </a>
                    <a className="link link-hover text-[#FFFFFFB3]">Sales
                    </a>
                    <a className="link link-hover text-[#FFFFFFB3]">Become a Partner
                    </a>
                    <a className="link link-hover text-[#FFFFFFB3]">Developers
                    </a>
                </nav>
                <nav className='gap-4'>
                    <header className="text-xl font-semibold">Contact</header>
                    <a className="link link-hover text-[#FFFFFFB3]">524 Broadway , NYC
                    </a>
                    <a className="link link-hover text-[#FFFFFFB3]">+1 777 - 978 - 5570</a>
                </nav>

            </div>
            <div  className='my-16 max-w-6xl mx-auto text-[#FFFFFFB3]'>
                <hr />
                <p className='my-16'>@2023 CareerHub. All Rights Reserved</p>
            </div>

        </footer>
    );
};

export default Footer;