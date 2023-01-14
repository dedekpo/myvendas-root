import Image from "next/image";

export default function Footer() {
	return (
		<footer>
			<div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto my-3">
				<Image
					width={150}
					height={50}
					src="/myvendas-original.png"
					alt="MyVendas logo"
					className="pr-5 object-cover mx-auto md:mx-0"
				/>
				<span className="text-center">
					{
						"Todos os direitos reservados 2022 – MyVendas – 45.298.933/0001-45"
					}
				</span>
				<span />
			</div>
		</footer>
	);
}
