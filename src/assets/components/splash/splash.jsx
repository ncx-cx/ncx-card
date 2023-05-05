import './splash.css';
function SplashScreen() 
{
    return(
        <div class="splashScreen">
            <div class="splashupperscreen"></div>
            <div class="loadingContainer">
                <div class="loadingBox">
                    <div class="loading">
                        <span>N</span>
                        <span>C</span>
                        <span>X</span>
                        <span></span>
                        <span>E</span>
                        <span>X</span>
                        <span>C</span>
                        <span>H</span>
                        <span>A</span>
                        <span>N</span>
                        <span>G</span>
                        <span>E</span>
                    </div>
                    <div class="loadingBarContainer">
                        <div class="loadingbar"></div>
                    </div>
                </div>
            </div>
            <div class="splashlowerscreen"></div>
        </div>
    )
}

export default SplashScreen;