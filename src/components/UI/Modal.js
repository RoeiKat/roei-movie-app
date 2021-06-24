import { Fragment } from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faImdb, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Icons = {
  youtubeIcon: <FontAwesomeIcon icon={faYoutube} />,
  imdbIcon: <FontAwesomeIcon icon={faImdb} />,
  closeIcon: <FontAwesomeIcon icon={faTimes} />,
};

const URLS = {
  img: "https://image.tmdb.org/t/p/w500/",
  youTube: "https://www.youtube.com/results?search_query=",
  imdb: "https://www.imdb.com/find?q=",
};

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">
        <div className="cotent_header">
          <h3>{props.data.title}</h3>
          <img
            className="modal_img"
            src={`${URLS.img}${props.data.poster_path}`}
          />
        </div>

        <div className="content_footer">
          <span className="desc">Description:</span>
          <p>{props.data.overview}</p>
          <div className="links">
            <a
              className="youtube"
              href={`${URLS.youTube}${props.data.title} trailer`}
            >
              {Icons.youtubeIcon}
            </a>
            <span>Watch Trailer</span>
            <a className="imdb" href={`${URLS.imdb}${props.data.title}`}>
              {Icons.imdbIcon}
            </a>
            <span>More Info</span>
          </div>
        </div>
        <span className="close_btn" onClick={props.onClose}>
          {Icons.closeIcon}
        </span>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} data={props.data} />,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
