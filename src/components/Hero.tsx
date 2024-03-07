import {
	Anchor,
	Center,
	Group,
	Image,
	SimpleGrid,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { Typewriter } from "react-simple-typewriter";
import Ava from "/ava.png";
import { INFO } from "../data/data";

let bg =
	"https://images.unsplash.com/photo-1495423204732-e41dd10e53a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80";
function Hero() {
	return (
		<div className="lg:container mx-auto mt-24 w-full isolate">
			<Image
				src={bg}
				className="absolute -z-10 left-0 top-0 blur-xl h-dvh object-cover"
			></Image>
			<SimpleGrid cols={{ base: 1, lg: 2 }}>
				<Stack gap={"sm"} className="px-5 lg:px-0">
					<Image
						src={Ava}
						className="h-23 w-32 object-cover rounded-full"
					></Image>
					<Title>
						<span className="text-orange-400">
							<Typewriter words={["Hi", "Hello"]} loop></Typewriter>
						</span>
						, Im Destiny
					</Title>
					<Title order={2} className="text-neutral-500">
						Web developer and graphic artist
					</Title>
					<Text>{INFO.homepage.description}</Text>
					<Group>
						{INFO.socials.map(({ Icon, name, link }) => {
							return (
								<Anchor key={name} href={link}>
									<Icon className="hover:text-orange-500 text-neutral-500" />
								</Anchor>
							);
						})}
					</Group>
					<Group>
						<a href="#">view projects</a>
						<a href="#">Contact me</a>
					</Group>
				</Stack>
				<Center h={"500px"} className="px-4 lg:px-0">
					<Image
						src={"Home_.jpg"}
						h={"100%"}
						w={"400px"}
						fit="cover"
						className="rounded-lg"
					/>
				</Center>
			</SimpleGrid>
		</div>
	);
}

export default Hero;
