import "@mantine/core/styles.css";
import webfont from "webfontloader";
import { MantineProvider, createTheme } from "@mantine/core";
import PageRouter from "./routes/PageRouter";
function App() {
	webfont.load({ google: { families: ["Inter"] } });
	let theme = createTheme({
		fontFamily: "Inter",
		headings: { fontFamily: "Inter" },
	});
	return (
		<MantineProvider theme={theme} defaultColorScheme="dark">
			<PageRouter />
		</MantineProvider>
	);
}

export default App;
