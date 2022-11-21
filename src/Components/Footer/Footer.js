import './Footer.css';

const Footer = () => {

    const year = (new Date()).getFullYear(); 

    return(
        <footer>
            <div className="footer-content">
                <p>©{year} Csnark</p>
                <p>Csnark.dev@gmail.com</p>
            </div>
        </footer>
    )
}

export default Footer;

