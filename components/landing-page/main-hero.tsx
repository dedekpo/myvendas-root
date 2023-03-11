import Link from "next/link";
import Image from "next/image";

export default function MainHero() {
	return (
		<div className="px-8 py-24 mx-auto  from-white to-gray-200">
			<div className="w-full md:max-w-4xl mx-auto md:text-center">
				<h1 className="mb-6 text-5xl md:text-7xl font-bold leading-none md:tracking-tight text-gray-900">
					A plataforma perfeita para <br />
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
					<a href="#saiba-mais">
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
					</a>
				</div>
			</div>
			<div className="w-full max-w-3xl mx-auto mt-20 text-center text-gray-100 font-medium relative">
				<div className="w-full h-[65vw] md:h-[34rem] relative mb-2">
					<Image
						src="/smartphone-notebook.png"
						alt="Smartphone e notebook mostrando o aplicativo MyVendas"
						fill
						quality={50}
						className="object-cover"
					/>
				</div>
				<div
					className={`flex relative md:absolute items-center gap-2 mb-2 p-3 rounded-md shadow-lg bg-red-500 top-0`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>

					<h2 className="">Praticidade nas suas vendas</h2>
				</div>
				<div
					className={`flex relative md:absolute items-center gap-2 mb-2 p-3 rounded-md shadow-lg bg-green-500 top-0 right-0`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
						/>
					</svg>

					<h2>Receba pedidos pelo Whatsapp</h2>
				</div>
				<div
					className={`flex relative md:absolute items-center gap-2 mb-2 p-3 rounded-md shadow-lg bg-gray-800 bottom-0`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
						/>
					</svg>

					<h2>Crie sua loja digital e venda mais</h2>
				</div>
				<div
					className={`flex file:relative md:absolute items-center gap-2 mb-2 p-3 rounded-md shadow-lg bg-purple-500 bottom-0 right-0`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
						/>
					</svg>

					<h2>Multi usuários</h2>
				</div>
				{/* <PopUpInfo
					bottom="50vh"
					right="80vw"
					bgColor={"bg-red-500"}
					text={"Praticidade nas suas vendas"}
				/>
				<PopUpInfo
					top="150px"
					right="-150px"
					bgColor={"bg-green-500"}
					text={"Receba pedidos pelo Whatsapp"}
				/>
				<PopUpInfo
					top="300px"
					left="-100px"
					bgColor={"bg-gray-800"}
					text={"Controle de vendas com PDV"}
				/>
				<PopUpInfo
					top="10px"
					left="-10px"
					bgColor={"bg-purple-500"}
					text={"Multi usuários"}
				/> */}
			</div>
		</div>
	);
}

function PopUpInfo({
	top = undefined,
	bottom = undefined,
	left = undefined,
	right = undefined,
	bgColor,
	text,
}: {
	top?: string | undefined;
	bottom?: string | undefined;
	left?: string | undefined;
	right?: string | undefined;
	bgColor: string;
	text: string;
}) {
	console.log(`right-[${right}]`);
	return (
		<div
			className={`relative md:absolute items-center gap-2 mb-2 p-3 rounded-md shadow-lg ${bgColor} ${
				top && `top-[${top}]`
			} ${bottom && `bottom-[${bottom}]`} ${left && `left-[${left}]`} ${
				right && `right-[${right}]`
			}`}
		>
			<h2>{text}</h2>
		</div>
	);
}
