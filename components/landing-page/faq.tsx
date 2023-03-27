"use client";

import * as Accordion from "@radix-ui/react-accordion";

export default function FAQ() {
	return (
		<>
			<span className="text-2xl font-normal mt-24 mb-5 text-center block">
				Perguntas frequentes
			</span>
			<Accordion.Root
				type="single"
				className="w-5/6 md:max-w-5xl mx-auto"
			>
				<Question
					question={"Por quantos dias eu posso testar a plataforma?"}
					answer={
						"Você pode testar o plano PRO por 7 dias gratuitamente a partir do momento que você cadastrar a sua empresa, sem a necessidade de preenchimento de dados do seu cartão de crédito."
					}
				/>
				<Question
					question={"Quais as formas de pagamento?"}
					answer={
						"No plano mensal o pagamento pode ser feito por cartão de crédito. Já no plano anual, o pagamento é feito por cartão de crédito ou boleto."
					}
				/>
				<Question
					question={
						"Posso cancelar a assinatura em qualquer momento?"
					}
					answer={
						"Sim. Você pode cancelar a qualquer momento e não receber mais nenhuma cobrança. Sua assinatura deixa de valer no fim do período contratado."
					}
				/>
				<Question
					question={"Como recebo os meus pedidos pela loja digital?"}
					answer={
						"O cliente irá entrar na sua loja, colocar os produtos no carrinho e concluir o pedido. Ele pode fazer o pedido direto no seu Whatsapp ou realizar o pagamento online. Caso a venda seja online, você receberá o pedido pelo aplicativo MyVendas."
					}
				/>
				<Question
					question={"Em quais dispositivos eu posso usar o MyVendas?"}
					answer={
						"Você pode usar a plataforma através do seu smartphone, computador, tablet, notebook, etc. Basicamente qualquer dispostivo com acesso a internet."
					}
				/>
			</Accordion.Root>
		</>
	);
}

function Question({ question, answer }: { question: string; answer: string }) {
	return (
		<Accordion.Item value={question} className="border-t-2 py-3 text-xl">
			<Accordion.Header className="flex">
				<Accordion.Trigger>
					<h2 className="text-left">{question}</h2>
				</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content className="text-gray-600 py-4">
				{answer}
			</Accordion.Content>
		</Accordion.Item>
	);
}
