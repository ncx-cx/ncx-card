import React, {useState} from "react";
import './header.css';
import { ReactComponent as CloseIcon } from '../images/clos.svg';
import NCXWhiteLogo from '../images/new_sitelogo.svg';
import NCXBlackLogo from '../images/ncx-blacklogo.svg';

function NCXCardHeader()
{
    const [isNavExpanded, setIsNavExpanded] = useState(false) 

    return(
        <div id="header-newmobile" className={
            isNavExpanded ? "header-expanded avtive" : "header-expanded"
          }>
            <nav className="navigation">
            <div className="navigation-one">
                <div className="mobile-toogle">
                <button 
                    className="hamburger"
                    onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                    }}>
                    <div className="mplo">
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.875 0.5H18.125V1.49902H0.875V0.5ZM1 7.50098L18.125 7.5V8.49902L1 8.5V7.50098ZM0.875 14.5H18.125V15.499H0.875V14.5Z" fill="white"/>
                    </svg>
                    </div>
                    <div className="clols">
                    <CloseIcon />
                    </div>
                </button>
                    <div
                        className={
                        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                        }>
                        <ul>
                        <li>
                            <a href="https://ncx.cx/buy-crypto">Buy Crypto</a>
                        </li>
                        <li>
                            <a href="https://trade.ncx.cx/" target="_blank" rel="noreferrer">Spot Trading</a>
                        </li>
                        <li>
                            <a href="/derivatives">Derivatives</a>
                        </li>
                        <li>
                            <a href="/markets">Markets</a>
                        </li>
                        <li>
                            <a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer">DEX</a>
                        </li>
                        <li>
                            <a href="https://ncx.cx/ncx-card">NCX Card</a>
                        </li>
                        <li>
                            <a href="https://ncx.cx/wallet">NCX DeFi Wallet</a>
                        </li>
                        <li>
                            <a href="/ncx-token">NCX Token</a>
                        </li>
                        <li>
                            <a href="/rewards">Rewards</a>
                        </li>
                        <li>
                            <a href="/market-insights">Insights</a>
                        </li>
                        {/* <li>
                            <a className="btn01 signup launching-btn">Sign Up</a>
                        </li> */}
                        <li>
                            <a className="signin launching-btn" href="https://my.ncx.cx/en/login" target="_blank" rel="noreferrer">Sign In  / Sign Up</a>
                        </li>
                        {/* <li>
                            <a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer" className="launch-dex launching-btn">Launch DEX</a>
                        </li> */}
                        </ul>
                    </div>
                </div>
                <div className="mobile-logo">
                <button
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className="header-logo"
                    sx={{ mr: 2 }}
                    >
                    <a href="https://ncx.cx/">
                        <img className="lght" src={NCXWhiteLogo} alt="NCX-Logo" />
                        <img className="drk" src={NCXBlackLogo} alt="NCX-Logo" />
                    </a>
                </button>
                </div>
            </div>
            {/* <div className="mobile-launch">
                <div class="dropdown">
                <button class="dropbtn">{t("launch_dex")}</button>
                <div class="dropdown-content">
                    <a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer">{t("launch_dex")}</a>
                    <a href="https://my.ncx.cx/en/login" target="_blank" rel="noreferrer">{t("sign_in")}</a>
                </div>
                </div>
            </div> */}
            </nav>
        </div>
    )
}

export default NCXCardHeader;