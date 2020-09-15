import React from "react";
import { Serie } from "./serie/serie";
import "./series.scss";

export const Series = () => {
  return (
    <div className="series-wrapper">
      <div className="season-input-section">
        <select name="select-season" id="select-season">
          <option value="1">Season 1</option>
          <option value="2">Season 2</option>
          <option value="3">Season 3</option>
        </select>
        <h2>SEASON: 1</h2>
      </div>
      <div className="series-grid">
        <Serie imageUrl="https://hips.hearstapps.com/esq.h-cdn.co/assets/cm/15/05/54cccd4230270_-_esq-walt-0712-lg.jpg" />
        <Serie imageUrl="https://vignette.wikia.nocookie.net/breakingbad/images/5/5d/Episode-5-jesse-todd-walt.jpg/revision/latest?cb=20170716214856" />
        <Serie imageUrl="https://hips.hearstapps.com/esq.h-cdn.co/assets/cm/15/05/54ccd003246b5_-_esq-bb-article.jpg" />
        <Serie imageUrl="https://i2.wp.com/acrossthemargin.com/wp-content/uploads/2013/08/photo-6.jpg?resize=570%2C361&ssl=1" />
        <Serie imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRacyq4hV3PIMMtEP3_oq5VCL6OUkt8gZeWsQ&usqp=CAU" />
        <Serie imageUrl="https://img.cinemablend.com/quill/a/5/3/3/5/f/a5335fa22c7890c0c9d15aa66c7cbb4f7a472227.jpg" />
        <Serie imageUrl="https://wp-media.patheos.com/blogs/sites/62/2013/09/breakingbadtohajiilee.jpg" />
        <Serie imageUrl="https://compote.slate.com/images/812bbd52-893f-470c-9fbf-5544c0575267.jpg" />
      </div>
    </div>
  );
};
