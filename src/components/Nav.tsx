import {
	Burger,
	Center,
	Drawer,
	Flex,
	Image,
	Portal,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
function Nav() {
	let [opened, { open, close }] = useDisclosure();
	return (
		<>
			<Portal>
				<Drawer onClose={close} opened={opened}></Drawer>
			</Portal>
			<nav className="h-20 z-10 py-2  w-full flex align-middle justify-center px-4 fixed left-0 top-0 ">
				<Flex
					justify={"center"}
					className=" p-1.5 px-4 rounded-md bg-neutral-800 lg:container w-full"
				>
					<Flex gap={"lg"} mr={"auto"}>
						<Image src={"ava.png"} h={"100%"} className="rounded-full "></Image>
						<Stack gap={0}>
							<Title order={3} component={"a"}>Illumi</Title>
							<Text>Web developer</Text>
						</Stack>
					</Flex>
					<Flex></Flex>
					<Center className=" md:hidden ">
						<Burger opened={opened} onClick={open}></Burger>
					</Center>
				</Flex>
			</nav>
		</>
	);
}

export default Nav;
