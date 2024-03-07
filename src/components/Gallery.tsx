import { SimpleGrid, Stack, Title } from "@mantine/core";
import { PROJECTS } from "../data/data";
import Card from "./Card";

function Gallery() {
	return (
		<div className="container mx-auto my-32">
			<Stack>
				<Title>Projects</Title>
				<SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} className="p-2">
					{PROJECTS.map(({ title, links, image, description }) => {
						return (
							<Card
								key={title}
								img={image[0]}
								description={description}
								text={title}
								link={links.source_code}
								source={links.link}
							></Card>
						);
					})}
				</SimpleGrid>
			</Stack>
		</div>
	);
}

export default Gallery;
