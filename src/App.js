import React, { Component } from "react";
import { useState } from "react";
import './script'
import Home from "../src/pages/card";
import { ReactComponent as DarkMode } from './assets/images/darkmode.svg';
import { ReactComponent as LightMode } from './assets/images/lightmode.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NCXLogo from './assets/images/new_sitelogo.svg';
import NCXWhiteLogo from './assets/images/ncx-blacklogo.svg';
import { ReactComponent as More } from './assets/images/more.svg';
import Telegram from './assets/images/telegram.svg';
import Twitter from './assets/images/twitter.svg';
import Instagram from './assets/images/instagram.svg';
import { ReactComponent as Apple } from './assets/images/apple.svg'; 
import { ReactComponent as Google } from './assets/images/google.svg'; 
import QrCode from "./assets/images/ncx-QRcode.svg";
import BuyLogo from './assets/images/buy-logo.svg'; 
import MobileHeader from './assets/components/header';
import { ReactComponent as CloseIcon } from './assets/images/clos.svg';
import {ReactComponent as DropdownICon} from './assets/images/menu-dropdown.svg';
import SplashScreen from "./assets/components/splash/splash";

class Main extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() { 
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? <DarkMode /> : <LightMode />

    return (
      <div className={`mode ${modeClassName}`}>
        <SplashScreen />
        <div id="header-row">
          <div className="MuiToolbar-regular">
            <div id="main-header" class="desktop">
              <div className="logo-nav">
                <a className="header-logo" href="https://card.ncx.cx">
                  <img src={NCXLogo} alt="site-logo" className="dark" />
                  <img src={NCXWhiteLogo} alt="site-logo" className="light" />
                </a>
                <div className="headermore_row">
                  <a className="header-more" href="#"><More /></a>
                    <div id="new-headermenu" className="mega_menu">
                      <div className="col1">
                        <div class="top_heading connect_link_title">
                          <h4>Services</h4>
                          <h4>NCXT</h4>
                          <h4>Company</h4>
                        </div>
                        <div class="menu_box">
                          <div class="col">
                            <div class="main_service_wrapper">
                              <div class="community_inner">
                                <div class="main_service">
                                  <a href="https://ncx.cx/rewards">Rewards Program</a>
                                  <a href="https://ncx.cx/market-insights">News & Insights</a>
                                  <a href="https://ncx.cx/market-makers">Market Makers</a>
                                  <a href="https://ncx.cx/institutional">Institutional Services</a>
                                  <a href="https://ncx.cx/ncx-otc">OTC</a>
                                  <a href="https://ncx.cx/ncx-ambassador">NCX Ambassador</a>
                                </div>
                              </div>
                              <div class="social_links">
                                <div class="social_link_inner">
                                  <a href="#">NCXT Overview</a>
                                  <a href="#">Claim Airdrop</a>
                                  <a href="#">Presale Dashboard</a>
                                  <a href="#">Referral Program</a>
                                  <a href="#">Official Telegram</a>
                                </div>
                              </div>
                              <div class="social_links">
                                <div class="social_link_inner">
                                  <a href="https://ncx.cx/about-us">About Us</a>
                                  <a href="https://ncx.cx/market-insights">Media & Press</a>
                                  <a href="https://ncx.cx/user-agreement">User Agreement</a>
                                  <a href="https://ncx.cx/kyc-aml-policy">AML & KYC Policy</a>
                                  <a href="https://ncx.cx/privacy-policy">Privacy Policy</a>
                                  <a href="https://ncx.cx/api-agreement">API Documentation</a>
                                  <a href="https://ncx.cx/cookie-policy">Cookie Policy</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col2">
                        <div class="right_inner">
                          <h4>Support</h4>
                          <div class="connect_links">
                            <div class="box">
                              <div class="boxx-links">
                                <a href="https://ncx.cx/faq">FAQ</a>
                                <a href="#">Open Support Ticket</a>
                                <a href="#">Support via Telegram</a>
                              </div>
                              <h4>Social Media</h4>
                              <div class="social-icons">
                                <div class="icons">
                                  <a href="https://ncx.cx"><img src={Telegram} alt="NCX" title="Telegram" /></a>
                                </div>
                              <div class="icons">
                                <a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer">
                                  <img src={Twitter} alt="NCX" title="Twitter" />
                                </a>
                              </div>
                              <div class="icons">
                                <a href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer">
                                  <img src={Instagram} alt="NCX" title="Instagram" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                  </div>
                </div>
                <ul class="navlink">
                  <li class="main_title white_bg"><a href="https://ncx.cx/buy-crypto">Buy Crypto</a></li>
                  <li class="main_title white_bg"><a href="https://trade.ncx.cx/" target="_blank" rel="noreferrer">Spot Trading</a></li>
                  <li class="main_title white_bg"><a href="https://ncx.cx/derivatives">Derivatives</a></li>
                  <li class="main_title white_bg"><a href="https://ncx.cx/markets">Markets</a></li>
                  <li class="main_title white_bg"><a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer">DEX</a></li>
                  <li class="main_title white_bg"><a href="https://ncx.cx/ncx-card">NCX Card</a></li>
                  <li class="main_title white_bg"><a href="https://ncx.cx/wallet">NCX Wallet</a></li>
                  <li class="main_title white_bg"><a href="https://ncx.cx/ncx-token">NCX Token</a></li>
                  <li class="main_title white_bg"><a href="https://ncx.cx/rewards">Rewards</a></li>
                </ul>
              </div>
              <div className="login-buttons">
                <button type="button" onClick={this.onClickButton} className="light-dark">{buttonText}</button>
                <a href="https://my.ncx.cx/en/login" target="_blank" rel="noreferrer" className="signin">Sign In</a>
                <a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer" className="launch-dex">DeFi</a>
                <div className="downloadQRCode">
                  <div id="downloadlink" className="storeicons">
                    <Apple />
                    <Google />
                  </div>
                  <div id="headerDownloadApp">
                    <div className="download-box">
                      <div className="qr-box">
                        <div className="img-box">
                          <img src={QrCode} alt="NCX Mobile App" />
                        </div>
                      </div>
                      <div className="pc-box">
                        <div class="text">Scan the QR code to download NCX mobile APP</div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="connect_wal">Connect Wallet</a>
              </div>
            </div>

            <MobileHeader />
          </div>
        </div>
        <div id="subheader">
            <div className="logo-nav">
              <a href="https://ncx.cx/buy-crypto">
                <img src={BuyLogo} alt="logo-buy" />
                <span>Buy NCXT</span>
              </a>
            </div>
            <div className="menu">
              <ul className="navlink">
                <li className="swap">
                  <a href="https://bsc.ncx.cx/#/swap">Swap</a>
                </li>
                <li className="cross-chain">
                  <a href="https://dex.ncx.cx/#/swap">Cross-Chain Swap</a>
                </li>
                <li className="card active">
                  <a href="https://card.ncx.cx/">Card</a>
                </li>
              </ul>
            </div>
          </div>
        <BrowserRouter>
            <Routes>
              <Route path='/' exact element={<Home />} />
            </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
 
export default Main;