import React, { useState } from "react";
import img1 from "../../assests/Carousel_Image_Boards_2x.webp";
import img2 from "../../assests/Carousel_Image_Cards_2x.webp";
import img3 from "../../assests/Carousel_Image_Lists_2x.webp";
import './Trello.scss';

function Trello() {
  const obj = {
    0: img1,
    1: img2,
    2: img3,
  };

  const [flag, setFlag] = useState(false);
  const [xid, setXid] = useState(0);

  return (
    <>
      <div className="main">
        <div className="row-1">
          <h2>A productivity powerhouse</h2>
          <span>
            Simple, flexible, and powerful. All it takes are boards, lists, and <br/>
            cards to get a clear view of who’s doing what and what needs to get <br/>
            done. Learn more in our guide for getting started.
          </span>
        </div>

        <div className="row-2">
          <div className="col-1">
            <button id="0" onClick={() => setXid(0)}>
              <div className="content">
                <span>
                    Boards
                </span>
                <p>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
              </div>
            </button>
            <button id="1" onClick={() => setXid(1)}>
            <div className="content">
                <span>
                    Lists
                </span>
                <p>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
              </div>
            </button>
            <button id="2" onClick={() => setXid(2)}>
            <div className="content">
                <span>
                    Cards
                </span>
                <p>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
              </div>
            </button>
          </div>

          <div className="col2">
            <img  width={'100%'} src={obj[xid]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Trello;
