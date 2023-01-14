import Link from "next/link";

export default function Plans() {
	return (
		<div className="max-w-5xl mx-auto mt-24">
			<span className="text-3xl font-bold text-center block">Planos</span>
			<span className="mb-10 text-center w-5/6 mx-auto text-gray-600 text-lg block">
				Todas essas funcionalidades com um precinho que cabe no seu
				bolso!
			</span>
			<div className="items-center flex flex-col md:flex-row gap-7 justify-center">
				<FreePlan />
				<ProPlan />
				<GoldPlan />
			</div>
		</div>
	);
}

function FreePlan() {
	return (
		<div className="flex flex-col h-[500px] w-[350px] bg-green-700 p-10 text-gray-100 rounded-md">
			<span className="text-xl block">Plano gratuito</span>
			<span className="mt-5 text-5xl font-bold block">Grátis</span>
			<div className="relative flex py-5 items-center">
				<div className="flex-grow border-t border-gray-300" />
			</div>
			<Feature feature={"1 usuário"} />
			<Feature feature={"Produtos ilimitados"} />
			<Feature feature={"Clientes ilimitados"} />
			<Feature feature={"Catálogo Digital"} />
			<Feature feature={"Ponto de Vendas (PDV)"} />
			<Feature feature={"1 foto por produto"} />
			<Feature feature={"Multi plataforma"} />
			<Feature feature={"10% de taxa por venda online"} />
			<Link
				href="https://app.myvendas.com"
				target="_blank"
				className="mt-auto"
			>
				<button className="bg-gray-900 hover:bg-gray-700 text-gray-100 w-full py-2 rounded-md font-semibold">
					Cadastre-se grátis
				</button>
			</Link>
		</div>
	);
}

function ProPlan() {
	return (
		<div className="flex flex-col h-[500px] w-[350px] bg-gray-100 p-10 text-gray-900 rounded-md border-2">
			<span className="text-xl block">Plano PRO</span>
			<span className="mt-5 text-5xl font-bold block">R$49,00</span>
			<span className="text-gray-500 mt-2 block">por mês</span>
			<div className="relative flex py-5 items-center">
				<div className="flex-grow border-t border-gray-300" />
			</div>
			<Feature feature={"Tudo do plano gratuito +"} />
			<Feature feature={"Usuários ilimitados"} />
			<Feature feature={"Controle de estoque"} />
			<Feature feature={"7 fotos por produto"} />
			<Feature feature={"Estatísticas e Relatórios"} />
			<Feature feature={"4% de taxa por venda online"} />
			<Link
				href="https://app.myvendas.com"
				target="_blank"
				className="mt-auto"
			>
				<button className="bg-green-800 hover:bg-green-700 text-gray-100 w-full py-2 rounded-md font-semibold">
					Teste grátis por 7 dias
				</button>
			</Link>
		</div>
	);
}

function GoldPlan() {
	return (
		<div className="flex flex-col h-[500px] w-[350px] bg-white p-10 text-gray-900 rounded-md border-2 border-yellow-200">
			<span className="text-xl block">Plano GOLD</span>
			<span className="mt-5 text-5xl font-bold block">R$1290,00</span>
			<div className="flex gap-3 mt-2">
				<span className="text-gray-500">por ano</span>
				<div className="bg-green-800 px-2 rounded-lg">
					<span className="text-gray-100">Somente plano anual</span>
				</div>
			</div>
			<div className="relative flex py-5 items-center">
				<div className="flex-grow border-t border-gray-300" />
			</div>
			<Feature feature={"Tudo do plano PRO +"} />
			<Feature feature={"Site personalizado"} />
			<Feature feature={"Domínio próprio"} />
			<Feature feature={"Time de implantação"} />
			<Feature feature={"Atendimento individual"} />
			<Link
				href="https://app.myvendas.com"
				target="_blank"
				className="mt-auto"
			>
				<button className="bg-green-800 hover:bg-green-700 text-gray-100 w-full py-2 rounded-md font-semibold">
					Fale conosco
				</button>
			</Link>
		</div>
	);
}

function Feature({ feature }: { feature: string }) {
	return (
		<div className="flex gap-2">
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
					d="M4.5 12.75l6 6 9-13.5"
				/>
			</svg>
			<span>{feature}</span>
		</div>
	);
}
