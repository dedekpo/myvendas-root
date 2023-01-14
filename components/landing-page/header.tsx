import Link from "next/link";
import Image from "next/image";

export default function Header() {
	return (
		<header>
			<div className="h-full w-full bg-white px-4 md:px-0 py-4">
				<div className="flex align-middle justify-between mx-auto max-w-5xl">
					<Link href="/">
						<Image
							width={150}
							height={50}
							src="/myvendas-original.png"
							alt="MyVendas logo"
							className="pr-5 object-cover"
						/>
					</Link>
					<Link href="https://app.myvendas.com/" target="_blank">
						<button>Entrar</button>
					</Link>
				</div>
			</div>
		</header>
	);
}
