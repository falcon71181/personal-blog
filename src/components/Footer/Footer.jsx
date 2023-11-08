import Link from 'next/link';
import './Footer.css';

const Footer = () => {
    return(
        <div className='footer'>
            © 2023<div className='text-white'>
                <Link href='https://github.com/falcon71181' target='_blank'>falcon71181</Link>
                </div>. All rights reserved .
        </div>
    );
}

export default Footer;