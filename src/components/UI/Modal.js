import { Fragment } from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import {faImdb, faYoutube} from "@fortawesome/free-brands-svg-icons"

const closeIcon = <FontAwesomeIcon icon={faTimes} />;
const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />;
const imdbIcon = <FontAwesomeIcon icon={faImdb} />;
const favoriteIcon = <FontAwesomeIcon icon={faStar} />;

const img_url = "https://image.tmdb.org/t/p/w500/";
const youtube_url = "https://www.youtube.com/results?search_query=";
const imdb_url = "https://www.imdb.com/find?q=";

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
            src={`${img_url}${props.data.poster_path}`}
          />
        </div>

        <div className="content_footer">
          <span>Description:</span>
          <p>{props.data.overview}</p>
          <div className="links">
            <a className="youtube" href={`${youtube_url}${props.data.title} trailer`}>{youtubeIcon}</a>
            <a className="imdb" href={`${imdb_url}${props.data.title}`}>{imdbIcon}</a>
            <a>{favoriteIcon}</a>
          </div>
        </div>
        <span className="close_btn" onClick={props.onClose}>{closeIcon}</span>
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
