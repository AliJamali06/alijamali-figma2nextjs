import Image from "next/image";
export default function Hero() {
    return(
        <div className="content">
          <div className="text-section">
            <br /><br /><br /><br />

            <div className="hero-heading">
              <h2 className="project">PROJECT</h2>
              <h3 className="lorum"><b>Lorum</b></h3>
            </div>
            
            <br /><br /><br />
            
            <div className="btns">
              <button className="arrowBtn"><span className="arrowSymbol">←</span></button>
              <button className="arrowBtn2"><span className="arrowSymbol">→</span></button>
            </div><br /><br /><br />

            <div className="numberSection">
              <p className="figureSpace">0 <span style={{ marginRight: '20px' }}></span> / <span style={{ marginRight: '20px' }}></span> 02</p>
              <p className="figure2Space">1</p>
            </div>
          </div>

          <div className="image-section">
            <button className="read3-button">VIEW PROJECT <span className="arrow3-symbol">→</span></button>
            <Image className="fitcover-image"src="/Rectangle6.png"alt="Main Rectangle"width={770} height={829} />
          </div>
        </div>
  )
}




