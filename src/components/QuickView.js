import React from "react";
import "./QuickView.scss";
import CancelIcon from "@material-ui/icons/Cancel";

function QuickView({ bannerStyle, movie, popup, popupStatus }) {
  return (
    <div className={`quickView ${popupStatus && "open"}`}>
      <div className="quickView__banner" style={bannerStyle}>
        <div className="quickView__content">
          <h3 className="quickView__title">
            {movie?.title || movie?.name || movie?.original_title}
          </h3>
          <p>{movie?.overview}</p>
          <p>{movie?.overview}</p>
          <p>{movie?.overview}</p>
          <p>{movie?.overview}</p>
          <p>{movie?.overview}</p>
          <p>{movie?.overview}</p>
          <p>{movie?.overview}</p>
        </div>
      </div>
      <button className="quickView__close" onClick={popup}>
        <CancelIcon fontSize="large" />
      </button>
    </div>
  );
}

export default QuickView;
