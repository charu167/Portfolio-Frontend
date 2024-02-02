import React from "react";
import './Hex.scss'

export default function Hex({title}) {
  return (
    <div class="hexagon">
      <div class="mytext">{title}</div>
    </div>
  );
}
