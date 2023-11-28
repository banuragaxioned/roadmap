import BarChart from "@/components/viz/bar-chart";

export default function Home() {
	return (
		<main>
			<BarChart data={[5, 10, 1, 3]} width={500} height={300} id="root" />
		</main>
	);
}
