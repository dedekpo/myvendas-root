import Image from "next/image";

export default function Features() {
	return (
		<div
			className="w-5/6 md:max-w-3xl mx-auto overflow-hidden md:overflow-auto"
			id="saiba-mais"
		>
			{/* Feature header */}
			<div className="text-center">
				<span className="text-3xl font-bold text-center w-full">
					Quer saber como ajudamos o seu negócio a crescer?
				</span>
				<span className="mb-20 text-center  text-gray-600 text-lg block">
					Chega de anotar seus pedidos e histórico de vendas em
					cadernos ou planilhas complexas. <br /> Vamos digitalizar
					com o MyVendas!
				</span>
			</div>
			<div className="flex-col space-y-20 ">
				<Feature1 />
				<Feature2 />
				<Feature3 />
			</div>
		</div>
	);
}

function Feature1() {
	return (
		<div className="flex flex-col md:flex-row align-middle gap-10 ">
			<Image
				src="/gestao-vendas.png"
				alt="Demonstração do aplicativo MyVendas em um Smartphone"
				width={200}
				height={250}
				quality={75}
				className="mx-auto"
			/>
			<div className="my-auto">
				<span className="font-bold text-3xl w-full block">
					Gestão de Vendas
				</span>
				<span className="text-gray-600 text-xl">
					Chega de dor de cabeça,{" "}
					<mark className="bg-green-200 text-gray-700 shadow-md px-1">
						tenha suas vendas sob controle
					</mark>
					. Com o MyVendas você tem controle de vendas com PDV, gestão
					de estoque, carteira de clientes e histórico de compras.
					Além de funcionar no seu smartphone, tablet e computador.
					Tudo com o mesmo acesso.
				</span>
			</div>
		</div>
	);
}

function Feature2() {
	return (
		<div className="flex flex-col md:flex-row align-middle gap-10 ">
			<Image
				src="/catalogo.png"
				alt="Demonstração da loja digital MyVendas em um Smartphone"
				width={200}
				height={250}
				quality={75}
				className="md:hidden mx-auto"
			/>
			<div className="my-auto">
				<span className="font-bold text-3xl w-full block">
					Loja Digital
				</span>
				<span className="text-gray-600 text-xl">
					Além de você gerenciar suas vendas de um modo eficaz, você
					também cria a sua Loja Digital. Com ela você levará o{" "}
					<mark className="bg-green-200 text-gray-700 shadow-md px-1">
						seu negócio ao mundo online
					</mark>
					. Seus clientes ficam por dentro de tudo que está no seu
					estoque e fazem{" "}
					<mark className="bg-green-200 text-gray-700 shadow-md px-1">
						pedidos que chegam direto no seu Whatsapp!
					</mark>
					Tudo sincronizado com seu estoque.
				</span>
			</div>
			<Image
				src="/catalogo.png"
				alt="Demonstração da Loja Digital MyVendas em um Smartphone"
				width={200}
				height={250}
				quality={75}
				className="hidden md:block mx-auto"
			/>
		</div>
	);
}

function Feature3() {
	return (
		<div className="flex flex-col md:flex-row align-middle gap-10 ">
			<Image
				src="/dashboard.png"
				alt="Demonstração do dashboard MyVendas em um Smartphone"
				width={200}
				height={250}
				quality={75}
				className="mx-auto"
			/>
			<div className="my-auto">
				<span className="font-bold text-3xl w-full block">
					Relatórios
				</span>
				<span className="text-gray-600 text-xl">
					Traga inteligência de dados para a sua empresa. No MyVendas
					você tem um{" "}
					<mark className="bg-green-200 text-gray-700 shadow-md px-1">
						relatório em tempo real
					</mark>{" "}
					onde você pode acompanhar o desempenho de vendas do seu
					negócio, dos seus vendedores, produtos e filtrando esses
					dados por período de tempo.
				</span>
			</div>
		</div>
	);
}
