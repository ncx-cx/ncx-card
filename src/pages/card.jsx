import React, {useState} from "react";
import './style.css';
import BlackCard from '../assets/images/ncx-blackcard.png';
import GoldCard from '../assets/images/ncx-whitegoldcard.png';
import WhiteCard from '../assets/images/ncx-whitecard.png';
import PlatinumCard from '../assets/images/ncx-platniumcard.png';
import { ReactComponent as Ethereum } from '../assets/images/ethereum.svg';
import { ReactComponent as Avalanche } from '../assets/images/avax.svg';
import { ReactComponent as BNB } from '../assets/images/bnb-chain.svg';
import { ReactComponent as BUSD } from '../assets/images/busd.svg';
import { ReactComponent as USDT } from '../assets/images/usdt.svg';


function CardHomePage()
{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return(
        <div className="card__gers">
            <div className="container">
                <div className="row card-balance">
                    <div className="col balance">
                        <div className="card_bal">
                            <div className="balance">
                                <h1>NCX Card <span>Balance</span></h1>
                                <h2>$0.00</h2>
                            </div>
                            <a href="#">Top Up</a>
                        </div>
                        <div className="token-div">
                            <div className="trhs">
                                <div className="token">
                                    <Ethereum />
                                    <p>Ethereum</p>
                                </div>
                                <div className="token-pric">
                                    <p>$0.00</p>
                                    <p>2 Tokens</p>
                                </div>
                            </div>
                            <div className="trhs">
                                <div className="token">
                                    <BNB />
                                    <p>BNB Chain</p>
                                </div>
                                <div className="token-pric">
                                    <p>$0.00</p>
                                    <p>2 Tokens</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col crd_div">
                        <div className="ncx_card_tabs">
                            <div className={toggleState === 1 ? "ncx_card  active" : "ncx_card"}>
                                <img src={WhiteCard} alt="ncx-card"/>
                            </div>
                            <div className={toggleState === 2 ? "ncx_card  active" : "ncx_card"}>
                                <img src={GoldCard} alt="ncx-card" />
                            </div>
                            <div className={toggleState === 3 ? "ncx_card  active" : "ncx_card"}>
                                <img src={PlatinumCard} alt="ncx-card" />
                            </div>
                            <div className={toggleState === 4 ? "ncx_card black active" : "ncx_card"}>
                                <img src={BlackCard} alt="ncx-card" />
                            </div>
                        </div>
                        <div className="kyc_div">
                            <div className="txt">
                                <h3>Not Created</h3>
                                <p>To use card, you need to complete KYC</p>
                            </div>
                            <a href="#">KYC</a>
                        </div>
                        <div className="card__tab__btn">
                            <button
                                className={toggleState === 1 ? "card_btn active" : "card_btn"}
                                onClick={() => toggleTab(1)}
                            >
                            <div className="tct">
                                <h1>Select</h1>
                                <span>Card</span>
                            </div>
                            <div className="tct-f">
                                <h3>Stake</h3>
                                <span>50k-250k NCXT</span>
                            </div>
                            </button>
                            <button
                                className={toggleState === 2 ? "card_btn active" : "card_btn"}
                                onClick={() => toggleTab(2)}
                            >
                            <div className="tct">
                                <h1>Gold</h1>
                                <span>Card</span>
                            </div>
                            <div className="tct-f">
                                <h3>Stake</h3>
                                <span>250k-1m NCXT</span>
                            </div>
                            </button>
                            <button
                                className={toggleState === 3 ? "card_btn active" : "card_btn"}
                                onClick={() => toggleTab(3)}
                            >
                            <div className="tct">
                                <h1>Platinum</h1>
                                <span>Card</span>
                            </div>
                            <div className="tct-f">
                                <h3>Stake</h3>
                                <span>1m-5m NCXT</span>
                            </div>
                            </button>
                            <button
                                className={toggleState === 4 ? "card_btn active" : "card_btn"}
                                onClick={() => toggleTab(4)}
                            >
                            <div className="tct">
                                <h1>Black</h1>
                                <span>Card</span>
                            </div>
                            <div className="tct-f">
                                <h3>Stake</h3>
                                <span>5m-10m NCXT</span>
                            </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardHomePage;