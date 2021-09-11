import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  private data = [
    {"WorkExperience": "IT Support", "Years": "8"},
    {"WorkExperience": "Front end developer", "Years": "4"},
    {"WorkExperience": "Nurse", "Years": "1"}
  ];

  private svg: any;
  private margin = 100;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
  }

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}

private drawBars(data: any[]): void {
  // Create the X-axis band scale
  const x = d3.scaleBand()
  .range([0, this.width])
  .domain(data.map(d => d.WorkExperience))
  .padding(0.4);

  // Draw the X-axis on the DOM
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

  // Create the Y-axis band scale
  const y = d3.scaleLinear()
  .domain([0, 10])  // how many y values are visible
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(data)
  .enter()
  .append("rect")

  // x and y axis
  .attr("x", (d: { WorkExperience: string; }) => x(d.WorkExperience))
  .attr("y", (d: { Years: d3.NumberValue; }) => y(d.Years))

  // height and width of the bars
  .attr("width", x.bandwidth())
  .attr("height", (d: { Years: d3.NumberValue; }) => this.height - y(d.Years))

  // bar color
  .attr("fill", "#F04b76");
}

}
