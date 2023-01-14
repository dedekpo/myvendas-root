import "./globals.css";

import { Outfit } from "@next/font/google";

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
			<body>{children}</body>
		</html>
	);
}
