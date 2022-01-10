import React from "react";
import "./Video.scss";
import { useParams } from "react-router-dom";
function Video() {
  // Nz5CnNHnpO8
  // ?rel=0&showinfo=0&vq=720;autoplay=1
  //let { id } = useParams();
  let id = "8lZki_Z35N0";
  return (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
