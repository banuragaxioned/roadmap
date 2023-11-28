"use client";

import React, { Component } from "react";
import * as d3 from "d3";

interface BarChartProps {
	data: number[];
	width: number;
	height: number;
	id: string;
}

class BarChart extends Component<BarChartProps> {
	componentDidMount() {
		this.drawChart();
	}

	drawChart() {
		const { data, width, height } = this.props;

		const svg = d3.select("body").append("svg").attr("width", width).attr("height", height);

		svg
			.selectAll("rect")
			.data(data)
			.enter()
			.append("rect")
			.attr("x", (d, i) => i * 70)
			.attr("y", (d, i) => 300 - 10 * d)
			.attr("width", 65)
			.attr("height", (d, i) => d * 10)
			.attr("fill", "green");

		svg
			.selectAll("text")
			.data(data)
			.enter()
			.append("text")
			.text((d) => d)
			.attr("x", (d, i) => i * 70)
			.attr("y", (d, i) => 300 - 10 * d - 3);
	}

	render() {
		const { id } = this.props;
		return <div id={id}></div>;
	}
}

export default BarChart;
