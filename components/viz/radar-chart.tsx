"use client";

import React, { useEffect } from "react";
import radar_visualization from "../../lib/radar";

const Radarchart = () => {
	useEffect(() => {
    radar_visualization({
			svg_id: "radar",
			width: 1440,
			height: 1000,
			colors: {
				background: "#fff",
				grid: "#dddde0",
				inactive: "#ddd",
			},
			title: "Zalando Tech Radar",
			date: "28.01",
			quadrants: [
				{ name: "Languages" },
				{ name: "Infrastructure" },
				{ name: "Datastores" },
				{ name: "Data Management" },
			],
			rings: [
				{ name: "ADOPT", color: "#5ba300" },
				{ name: "TRIAL", color: "#009eb0" },
				{ name: "ASSESS", color: "#c7ba00" },
				{ name: "HOLD", color: "#e09b96" },
			],
			print_layout: true,
			links_in_new_tabs: true,
			// zoomed_quadrant: 0,
			entries: [
				{
					quadrant: 0,
					ring: 0,
					label: "React",
				},
				{
					quadrant: 0,
					ring: 2,
					label: "Vue",
				},
				{
					quadrant: 0,
					ring: 1,
					label: "Svelte",
				},
				{
					quadrant: 0,
					ring: 0,
					label: "Next.js",
				},
				{
					quadrant: 1,
					ring: 4,
					label: "Gatsby",
				},
				{
					quadrant: 2,
					ring: 0,
					label: "Excalidraw",
				},
			],
		});
	}, []);

	return <svg id="radar"></svg>;
};

export default Radarchart;
