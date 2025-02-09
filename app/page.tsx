export const dynamic = "force-dynamic";

import CallToAction from "@/components/landing-page/call-to-action";
import FAQ from "@/components/landing-page/faq";
import Features from "@/components/landing-page/features";
import Footer from "@/components/landing-page/footer";
import Header from "@/components/landing-page/header";
import MainHero from "@/components/landing-page/main-hero";
import Plans from "@/components/landing-page/plans";

export default function Home({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const slr = String(searchParams?.slr);
	return (
		<>
			<Header slr={slr} />
			<main>
				<MainHero slr={slr} />
				<Features />
				<Plans slr={slr} />
				<FAQ />
				<CallToAction slr={slr} />
			</main>
			<Footer />
		</>
	);
}
