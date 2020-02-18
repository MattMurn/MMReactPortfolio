import React, { useState } from "react";
import "d3-cloud";
import * as d3 from "d3";
import skills from "./skills.js";
const SCloud = () => {
  const [tech, setTech] = useState(skills);
  let wordScale = d3.scaleLinear().domain([0, 100]);
  d3.layout.cloud()
    .size([500, 500])
    .words(tech)
    .rotate(0)
    .fontSize(d => wordScale(d.name))
    .on("end", drawCloud)
    .start();

  const drawCloud = () => {
    let wordGroup = d3
      .select("#cloud-svg")
      .append("g")
      .attr("id", "cloudGroup")
      .attr("transform", "translate(250, 250)");
    
    wordGroup.selectAll("text").data(tech).append("text")
    .attr("font-size", d => `${d.rank}px`).style("fill", "white")
    .attr("text-anchor", "middle")
    .attr("transform", d => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
    .text(d => d.name);
  };

  return (
    <div>
        <svg id="cloud-svg"/>
    </div>
  );
};

export default SCloud;
