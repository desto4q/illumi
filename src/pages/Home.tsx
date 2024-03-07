import { Stack } from "@mantine/core";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";

function Home() {
	return (
		<Stack gap={82}>
			<Hero></Hero>
			<Gallery/>
		</Stack>
	);
}

export default Home;
