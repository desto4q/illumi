import {
	Burger,
	Center,
	Drawer,
	Flex,
	Image,
	Portal,
	Stack,
	Text,
	Title
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
function Nav() {
	let [opened, { open, close }] = useDisclosure();
	return (
		<>
			<Portal>
				<Drawer onClose={close} opened={opened}></Drawer>
			</Portal>
			<nav className="h-20 py-2 bg-red-500 w-full flex align-middle justify-center px-4 ">
				<Flex
					justify={"center"}
					w={{ base: "100%", lg: "90%" }}
					className="bg-blue-200 p-1 rounded-md"
				>
					<Flex gap={"lg"} mr={"auto"}>
						<Image src={"ava.png"} h={"100%"} className="rounded-full"></Image>
						<Stack gap={0} bg={"green"}>
							<Title order={3}>Hey there</Title>
							<Text>Web developer</Text>
						</Stack>
					</Flex>
					<Flex></Flex>
					<Center className=" md:hidden">
						<Burger opened={opened} onClick={open}></Burger>
					</Center>
				</Flex>
			</nav>
		</>
	);
}

export default Nav;
