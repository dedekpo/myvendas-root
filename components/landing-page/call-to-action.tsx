import Link from "next/link";

export default function CallToAction({ slr }: { slr: string }) {
	return (
		<div className="flex w-5/6 md:max-w-5xl mx-auto my-20">
			<div className="flex flex-col md:flex-row gap-4 w-full bg-green-800 p-10 rounded-3xl justify-evenly items-center text-white py-8 md:py-16">
				<div className="flex-col">
					<span className="font-bold text-2xl md:text-4xl text-center md:text-left block">
						Faça seu cadastro gratuitamente
					</span>
					<span className="mt-3 text-lg md:text-xl block">
						Ganhe 7 dias de plano PRO. Não pedimos dados do seu
						cartão.
					</span>
				</div>
				<Link
					href={`https://app.myvendas.com${slr ? `?slr=${slr}` : ""}`}
					target="_blank"
				>
					<button className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md p-4 shadow-lg font-bold">
						Cadastre-se agora
					</button>
				</Link>
			</div>
		</div>
	);
}
