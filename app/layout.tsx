import "./globals.css";

import { Outfit } from "@next/font/google";
import { Analytics } from "@/components/analytics";

const outfit = Outfit({
	subsets: ["latin"],
	display: "optional",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR" className={`${outfit.className} scroll-smooth`}>
			<head />
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
