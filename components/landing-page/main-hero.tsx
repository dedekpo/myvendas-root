import Link from "next/link";
import Image from "next/image";

export default function MainHero() {
	return (
		<div className="px-8 py-24 mx-auto  from-white to-gray-200">
			<div className="w-full md:max-w-4xl mx-auto md:text-center">
				<h1 className="mb-6 text-5xl md:text-7xl font-bold leading-none md:tracking-tight text-gray-900">
					A sua plataforma ideal para <br />
					<strong className="block text-transparent lg:inline w-full bg-clip-text bg-gradient-to-r from-green-600 to-purple-500 font-extrabold">
						GESTÃO DE VENDAS.
					</strong>
				</h1>
				<h2 className="px-0 lg:px-24 mb-6 text-lg md:text-xl text-gray-600">
					Somos o MyVendas, uma plataforma que auxília o seu negócio a
					crescer utilizando gestão de vendas, loja digital e
					relatórios.
				</h2>
				<div className="flex flex-col md:flex-row mb-4 md:mb-8 gap-2 md:justify-center">
					<Link href="https://app.myvendas.com" target="_blank">
						<button className="flex justify-center w-full gap-1 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-5 rounded">
							<span className="text-lg">Cadastre-se grátis</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-4 h-4 my-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
								/>
							</svg>
						</button>
					</Link>
					<Link href="#saiba-mais">
						<button className="flex justify-center w-full gap-1 bg-gray-200 hover:bg-gray-300 text-gray-900 py-3 px-5 rounded">
							<span className="text-lg">Saiba mais</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-4 h-4 my-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
								/>
							</svg>
						</button>
					</Link>
				</div>
			</div>
			<div className="w-full h-[34rem] max-w-3xl mx-auto mt-20 text-center relative">
				<Image
					src="/smartphone-notebook.png"
					alt="Smartphone e notebook mostrando o aplicativo MyVendas"
					fill
					quality={50}
					className="object-cover"
				/>
			</div>
		</div>
	);
}
