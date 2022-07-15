/* eslint-disable @next/next/no-img-element */

const Cards = (props: any) => {
  return (
    <>
      <style jsx>
        {`
          .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 8rem;
            margin: 4rem 5vw;
            padding: 0;
            list-style-type: none;
          }

          .card {
            position: relative;
            display: block;
            height: 100%;
            border-radius: calc(40 * 1px);
            overflow: hidden;
            text-decoration: none;
            box-shadow: 7px 7px 14px #747474, -7px -7px 14px #ffffff;
          }

          .card__image {
            width: 100%;
            height: auto;
          }

          .card__overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1;
            border-radius: calc(40 * 1px);
            background-color: #fff;
            transform: translateY(100%);
            transition: 0.2s ease-in-out;
          }

          .card:hover .card__overlay {
            transform: translateY(0);
          }

          .card__header {
            position: relative;
            display: flex;
            align-items: center;
            gap: 2em;
            padding: 2em;
            border-radius: calc(40 * 1px) 0 0 0;
            background-color: #fff;
            transform: translateY(-100%);
            transition: 0.2s ease-in-out;
          }

          .card__arc {
            width: 80px;
            height: 80px;
            position: absolute;
            bottom: 100%;
            right: 0;
            z-index: 1;
          }

          .card:hover .card__header {
            transform: translateY(0);
          }

          .card__thumb {
            display: none;
          }

          .card__title {
            font-size: 1em;
            text-align: center;
            color: black;
          }

          .card__description {
            padding: 0 2em 2em;
            margin: 0;
            color: black;
            font-family: "MockFlowFont";
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
        `}
      </style>
      <ul className="cards">
        <li>
          <a href="" className="card">
            <img
              src="https://i.imgur.com/oYiTqum.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <img
                  className="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">Jessica Parker</h3>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" className="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <img
                  className="card__thumb"
                  src="https://i.imgur.com/sjLMNDM.png"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">kim Cattrall</h3>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" className="card">
            <img
              src="https://i.imgur.com/oYiTqum.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <img
                  className="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">Jessica Parker</h3>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" className="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <img
                  className="card__thumb"
                  src="https://i.imgur.com/sjLMNDM.png"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">kim Cattrall</h3>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" className="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <img
                  className="card__thumb"
                  src="https://i.imgur.com/sjLMNDM.png"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">kim Cattrall</h3>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Cards;
