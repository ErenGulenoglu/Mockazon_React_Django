import { cn } from "@/lib/utils"; // optional: shadcn’s className merge helper

interface TypographyProps {
	children: React.ReactNode;
	className?: string;
}

// H1
// TypographyH1 fonksiyonu, H1 başlıklarını tek tip ve tutarlı şekilde göstermek için oluşturulmuş bir bileşendir.
// children -> Başlık içeriği (metin veya başka React elementleri)
// className -> Opsiyonel olarak ek Tailwind sınıfları eklemek için
export function TypographyH1({ children, className }: TypographyProps) {
	return (
		<h1
			// cn fonksiyonu kullanılıyor:
			// 1. Verilen sabit Tailwind sınıflarını uygular ("scroll-m-20 text-4xl font-extrabold tracking-tight text-balance")
			// 2. Eğer className prop'u verilmişse onu da ekler
			// 3. tailwind-merge sayesinde çakışan sınıfları otomatik olarak çözer
			className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight text-balance", className)}
		>
			{/* children içeriğini h1 etiketi içinde render eder */}
			{children}
		</h1>
	);
}

// H2
export function TypographyH2({ children, className }: TypographyProps) {
	return <h2 className={cn("scroll-m-20 text-3xl font-semibold tracking-tight", className)}>{children}</h2>;
}

// H3
export function TypographyH3({ children, className }: TypographyProps) {
	return <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>{children}</h3>;
}

export function TypographyH4({ children, className }: TypographyProps) {
	return <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>{children}</h4>;
}

// Paragraph
export function TypographyP({ children, className }: TypographyProps) {
	return <p className={cn("leading-7", className)}>{children}</p>;
}

export function TypographyLarge({ children, className }: TypographyProps) {
	return <div className={cn("text-lg font-semibold", className)}>{children}?</div>;
}

export function TypographySmall({ children, className }: TypographyProps) {
	return <small className={cn("text-sm leading-none font-medium)", className)}>{children}</small>;
}
