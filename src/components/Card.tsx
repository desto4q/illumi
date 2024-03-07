import { Anchor, Group, Stack, Text, Title } from "@mantine/core";

type Card = {
	img: string;
	text: string;
	source: undefined | string;
	link: undefined | string;
	description: string;
};
function Card({ img, text, source, link, description }: Card) {
	return (
		<Stack className="h-fit p-2 rounded-md outline outline-neutral-700 hover:outline-neutral-500 outline-1">
			<img src={img} className="h-52"></img>
			<Title>{text}</Title>
			<Text lineClamp={3}>{description}</Text>
			<Group>
				<Anchor href={source}>Source</Anchor>
				<Anchor href={link}>Project </Anchor>
			</Group>
		</Stack>
	);
}

export default Card;
