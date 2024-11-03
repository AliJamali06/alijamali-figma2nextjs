export default function CustomerContent() {
    return(
        <div className="custom-container">
            {/* Left side with images */}
            <div className="left-side">
              {/* Two images in a column */}
              <div className="left-images">
                <img src="/Rectangle9.png" alt="Image 1" className="image-small" />
                <img src="/Rectangle10.png" alt="Image 2" className="image2-small" />
              </div>

              {/* Large image closer to the right content */}
              <img src="/Rectangle9.png" alt="Image 3" className="image-large" />
            </div>

            {/* Right side with heading and paragraph */}
            <div className="right-side">
              <h1 className="about">About</h1>
              <p className="dummytext">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged.
              </p>
              <button className="read-more-button">
                READ MORE
                <span className="arrow-symbol">→</span>
              </button>
            </div>
          </div>
    )
}