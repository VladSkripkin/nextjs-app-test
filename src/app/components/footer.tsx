
export default function Footer() {
    return(
        <footer className="footer relative pt-16 pb-10 md:pt-36">
            <div className="container">
                <div className="contact relative pl-4 pr-4" id="contact">
                    <h2 className="contact-title text-center">
                        Let’s make<br/>
                        the connection!
                    </h2>
                    <div className="contact-email text-center mt-4">
                        <a href="#">email@email.com</a>
                    </div>
                </div>
                <div className="copyright text-center mt-32 md:mt-52  pl-4 pr-4">
                    © 2024 adentro AG | Sihlbruggstrasse 109 | CH 6340 Baar ZG | Switzerland
                </div>
            </div>
        </footer>
    )
}