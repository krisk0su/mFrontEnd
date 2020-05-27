import React, { Fragment } from "react";

export const Index = () => {
  return (
    <Fragment>
      <div id="frame_wrap">
        <iframe
          allowFullScreen={true}
          src="https://api.max333.net/api/v1/iframe?apitoken=396395163c725c71a0c6241b02ebec4e6fe81b5&amp;t=1590233265767"
          id="frame"
          frameBorder={0}
          scrolling="no"
          width="100%"
          className="yggdrasil"
        ></iframe>
      </div>
    </Fragment>
  );
};
