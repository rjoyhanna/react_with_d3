import React, {Component} from 'react';
import * as d3 from "d3";

class NewBarChart extends Component {

  drawChart() {
    const h = this.props.height
    const w = this.props.width
    const data = this.props.data;
    const node = this.node
    const svg = d3.select(node).append("svg").attr("width", w).attr("height", h);
    // svg.selectAll("rect").data(data).enter().append("rect")
    // selection.attr("property", (d, i) => {})
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 110)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 100)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green");

    svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 110)
      .attr("y", (d, i) => h - (10 * d) - 3)
  }

  componentDidMount() {
      this.drawChart();
    }

  render() {
    return <div ref={node => this.node = node}></div>
  }
}

export default NewBarChart;
