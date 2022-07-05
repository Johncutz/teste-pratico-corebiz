import React from "react";
import Contato from "./Contato/Contato";
import Logos from "./Logos/Logos";
import Localizacao from "./Localizacao/Localizacao";

import './Footer.css'




function Footer() {
    return (
        <footer className="Footer">
            <Contato />
            <Logos />
            <Localizacao />
        </footer>
    )
}
export default Footer;