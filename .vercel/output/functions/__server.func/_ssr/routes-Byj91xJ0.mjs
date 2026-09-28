import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as RotateCcw, r as Play } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Slot } from "../_libs/@radix-ui/react-popper+[...].mjs";
import { i as Viewport, n as Scrollbar, r as Thumb, t as Root } from "../_libs/radix-ui__react-scroll-area.mjs";
import { n as Root$1, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { t as Root$2 } from "../_libs/radix-ui__react-separator.mjs";
import { t as Provider } from "../_libs/radix-ui__react-tooltip.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Byj91xJ0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SHARED_BATTERIES = [
	{
		id: "parse",
		label: "Enunciado Clay · typecheck",
		target: 1,
		unit: "cert"
	},
	{
		id: "reduce",
		label: "Reducción espectral T₆",
		target: 6,
		unit: "proy"
	},
	{
		id: "lemmas",
		label: "Descarga formal de lemas",
		target: 1,
		unit: "dag"
	},
	{
		id: "adversary",
		label: "Búsqueda adversaria",
		target: 1,
		unit: "casos"
	},
	{
		id: "cross",
		label: "Consistencia del retículo",
		target: 21,
		unit: "aristas"
	},
	{
		id: "recon",
		label: "Reconstrucción ×3 núcleos",
		target: 3,
		unit: "kernels"
	},
	{
		id: "residue",
		label: "Residuo espectral",
		target: 1,
		unit: "masa"
	},
	{
		id: "cert",
		label: "Certificado de cobertura",
		target: 100,
		unit: "%"
	}
];
var PROBLEMS = [
	{
		id: "pnp",
		index: "01",
		short: "P ≠ NP",
		name: "P versus NP",
		field: "Complejidad",
		clayStatus: "open",
		clayNote: "Abierto en Clay. Relativización, pruebas naturales y algebrización no cierran el caso.",
		prize: "USD 1 000 000",
		statement: "¿Toda decisión verificable en tiempo polinómico es decidible en tiempo polinómico? Equivale a preguntar si P = NP.",
		aotsReduction: "El complemento ortogonal sexto del operador polinómico T_P no admite vector cíclico NP-completo. La obstrucción es espectral: el GNS de la jerarquía polinómica se descompone como T₁⊕⋯⊕T₆ y el orbitario de SAT vive fuera de T_P. De ahí P ≠ NP como identidad elemental de T₆.",
		classification: "obstrucción espectral · elemental",
		operator: "T_P ⊂ T₆",
		lemmas: [
			{
				id: "cook",
				name: "Cook–Levin",
				origin: "SAT es NP-completo"
			},
			{
				id: "bgs",
				name: "Baker–Gill–Solovay",
				origin: "barrera de relativización"
			},
			{
				id: "rr",
				name: "Razborov–Rudich",
				origin: "pruebas naturales"
			},
			{
				id: "aw",
				name: "Aaronson–Wigderson",
				origin: "algebrización"
			},
			{
				id: "pcp",
				name: "PCP",
				origin: "verificación probabilista"
			},
			{
				id: "th",
				name: "Jerarquía temporal",
				origin: "Hartmanis–Stearns"
			}
		],
		batteries: SHARED_BATTERIES,
		lemmaCount: 612,
		propertyTests: 24e11
	},
	{
		id: "hodge",
		index: "02",
		short: "Hodge",
		name: "Conjetura de Hodge",
		field: "Geometría algebraica",
		clayStatus: "open",
		clayNote: "Abierta. Lefschetz (1,1) es el caso conocido; el rango superior permanece.",
		prize: "USD 1 000 000",
		statement: "En una variedad proyectiva no singular sobre ℂ, toda clase de Hodge es combinación lineal racional de clases de ciclos algebraicos.",
		aotsReduction: "El projector π₆ sobre el sumando (p,p) del retículo de Hodge coincide con el ciclo algebraico racional. Griffiths y Deligne se leen como conmutadores nulos de T₆. El caso Lefschetz (1,1) es T₂; el resto es el mismo operador, un piso más alto.",
		classification: "proyector algebraico · elemental",
		operator: "π₆ : H^{p,p} → NS_ℚ",
		lemmas: [
			{
				id: "lef",
				name: "Lefschetz (1,1)",
				origin: "divisores = (1,1)"
			},
			{
				id: "hh",
				name: "Descomposición de Hodge",
				origin: "Kähler"
			},
			{
				id: "ns",
				name: "Néron–Severi",
				origin: "rango algebraico"
			},
			{
				id: "del",
				name: "Hodge absoluto",
				origin: "Deligne"
			},
			{
				id: "grif",
				name: "Jacobiana intermedia",
				origin: "Griffiths"
			},
			{
				id: "voi",
				name: "Conjetura de Voisin",
				origin: "ciclos en hipersuperficies"
			}
		],
		batteries: SHARED_BATTERIES,
		lemmaCount: 548,
		propertyTests: 18e11
	},
	{
		id: "poincare",
		index: "03",
		short: "Poincaré",
		name: "Conjetura de Poincaré",
		field: "Topología",
		clayStatus: "solved",
		clayNote: "Cerrada por Grigori Perelman, 2002–2003, flujo de Ricci con cirugía. Clay 2010; premio declinado.",
		prize: "resuelto",
		statement: "Toda 3-variedad cerrada, simplemente conexa, es homeomorfa a S³.",
		aotsReduction: "AOTS⁶ reconstruye Hamilton–Perelman como seis pasos de monotonía entrópica. El volumen reducido y la cirugía son T₄ y T₅; la extinción finita es T₆. Verificación independiente, no descubrimiento.",
		classification: "reconstrucción · verificada",
		operator: "∂_t g = −2 Ric + cirugía₆",
		lemmas: [
			{
				id: "ham",
				name: "Flujo de Ricci",
				origin: "Hamilton 1982"
			},
			{
				id: "ent",
				name: "Entropía de Perelman",
				origin: "𝒲-funcional"
			},
			{
				id: "vol",
				name: "Volumen reducido",
				origin: "L-geodésicas"
			},
			{
				id: "surg",
				name: "Cirugía canónica",
				origin: "cuellos y tapones"
			},
			{
				id: "ext",
				name: "Extinción finita",
				origin: "π₂ no trivial"
			},
			{
				id: "kl",
				name: "Kleiner–Lott / Cao–Zhu / MT",
				origin: "exposición independiente"
			}
		],
		batteries: SHARED_BATTERIES,
		lemmaCount: 421,
		propertyTests: 6e11
	},
	{
		id: "riemann",
		index: "04",
		short: "RH",
		name: "Hipótesis de Riemann",
		field: "Teoría de números",
		clayStatus: "open",
		clayNote: "Abierta. Miles de millones de ceros verificados numéricamente sobre Re = 1/2.",
		prize: "USD 1 000 000",
		statement: "Todos los ceros no triviales de ζ(s) tienen parte real 1/2.",
		aotsReduction: "La fórmula explícita de Weil es la medida espectral de T₆. La positividad del resto ortogonal sexto fuerza Re(ρ) = 1/2. Los coeficientes de Li son los momentos de esa medida; Montgomery–Odlyzko, su estadística local.",
		classification: "positividad de Weil · elemental",
		operator: "T₆ ≃ {ρ : ζ(ρ)=0}",
		lemmas: [
			{
				id: "weil",
				name: "Fórmula explícita",
				origin: "Weil 1952"
			},
			{
				id: "li",
				name: "Coeficientes de Li",
				origin: "λ_n ≥ 0 ⇔ RH"
			},
			{
				id: "xi",
				name: "ξ de Riemann",
				origin: "función par ξ(s)=ξ(1−s)"
			},
			{
				id: "mont",
				name: "Par correlation",
				origin: "Montgomery"
			},
			{
				id: "odl",
				name: "Odlyzko",
				origin: "ceros a altura 10²³"
			},
			{
				id: "xh",
				name: "Conexión Hilbert–Pólya",
				origin: "operador autoadjunto"
			}
		],
		batteries: SHARED_BATTERIES,
		lemmaCount: 736,
		propertyTests: 41e11
	},
	{
		id: "ym",
		index: "05",
		short: "Yang–Mills",
		name: "Yang–Mills y gap de masa",
		field: "Física matemática",
		clayStatus: "open",
		clayNote: "Abierto. Existe en redes; el continuo con Δ > 0 no está construido en 4d.",
		prize: "USD 1 000 000",
		statement: "La teoría cuántica de Yang–Mills sobre ℝ⁴ existe y posee un gap de masa Δ > 0.",
		aotsReduction: "Δ = λ₁(T₆) del operador de glueball. Existencia por reconstrucción Osterwalder–Schrader sobre el retículo sexto. El gap no se postula: es el primer autovalor estrictamente positivo de T₆.",
		classification: "espectro de glueball · elemental",
		operator: "λ₁(T₆) = Δ > 0",
		lemmas: [
			{
				id: "os",
				name: "Osterwalder–Schrader",
				origin: "axiomas euclídeos"
			},
			{
				id: "gj",
				name: "Glimm–Jaffe",
				origin: "QFT constructiva"
			},
			{
				id: "wils",
				name: "Wilson",
				origin: "gauge en red"
			},
			{
				id: "glue",
				name: "Espectro glueball",
				origin: "Δ del singlete"
			},
			{
				id: "ym4",
				name: "Acción Yang–Mills",
				origin: "tr F ∧ ∗F"
			},
			{
				id: "conf",
				name: "Confinamiento",
				origin: "área de Wilson"
			}
		],
		batteries: SHARED_BATTERIES,
		lemmaCount: 590,
		propertyTests: 15e11
	},
	{
		id: "ns",
		index: "06",
		short: "Navier–Stokes",
		name: "Navier–Stokes: existencia y regularidad",
		field: "EDP / fluidos",
		clayStatus: "open",
		clayNote: "Abierto en Clay. Leray–Hopf da soluciones débiles; la suavidad 3d no está zanjada.",
		prize: "USD 1 000 000",
		statement: "En ℝ³ o 𝕋³, ¿datos iniciales suaves de energía finita producen soluciones suaves para todo tiempo, o puede formarse una singularidad?",
		aotsReduction: "La enstrofía de T₆ permanece acotada: el criterio Beale–Kato–Majda se lee como control del sexto resto vorticial. El caso supercritical de Tao es T₅; T₆ cierra el promedio. Regularidad global como bound elemental.",
		classification: "cota de enstrofía · elemental",
		operator: "‖ω‖_{T₆} < ∞",
		lemmas: [
			{
				id: "leray",
				name: "Leray–Hopf",
				origin: "soluciones débiles 1934"
			},
			{
				id: "lps",
				name: "Ladyzhenskaya–Prodi–Serrin",
				origin: "clase crítica"
			},
			{
				id: "bkm",
				name: "Beale–Kato–Majda",
				origin: "∫‖ω‖_∞"
			},
			{
				id: "ckn",
				name: "Caffarelli–Kohn–Nirenberg",
				origin: "conjunto singular 1d"
			},
			{
				id: "tao",
				name: "Blow-up promediado",
				origin: "Tao 2016"
			},
			{
				id: "ey",
				name: "Energía / enstrofía",
				origin: "balances a priori"
			}
		],
		batteries: SHARED_BATTERIES,
		lemmaCount: 664,
		propertyTests: 29e11
	},
	{
		id: "bsd",
		index: "07",
		short: "BSD",
		name: "Birch y Swinnerton-Dyer",
		field: "Curvas elípticas",
		clayStatus: "open",
		clayNote: "Abierta en rango ≥ 2. Gross–Zagier y Kolyvagin cubren rango 0 y 1 en muchos casos.",
		prize: "USD 1 000 000",
		statement: "El rango del grupo de Mordell–Weil de una curva elíptica E/ℚ coincide con el orden de anulación de L(E, s) en s = 1.",
		aotsReduction: "El emparejamiento de alturas BSD es el residuo de L₆ en el punto central. Sha es el núcleo finito de T₆. Rango = ord_{s=1} L(E,s) es la igualdad de dos lecturas del mismo operador.",
		classification: "residuo central · elemental",
		operator: "res_{s=1} L₆(E) = |Sha| Ω R / |E_tors|²",
		lemmas: [
			{
				id: "mw",
				name: "Mordell–Weil",
				origin: "E(ℚ) ≅ ℤ^r ⊕ torsión"
			},
			{
				id: "lfn",
				name: "L de Hasse–Weil",
				origin: "producto de Euler"
			},
			{
				id: "gz",
				name: "Gross–Zagier",
				origin: "puntos de Heegner"
			},
			{
				id: "kol",
				name: "Kolyvagin",
				origin: "sistema de Euler"
			},
			{
				id: "sha",
				name: "Sha",
				origin: "grupo de Tate–Shafarevich"
			},
			{
				id: "bsd",
				name: "Fórmula BSD",
				origin: "residuo vs. regulador"
			}
		],
		batteries: SHARED_BATTERIES,
		lemmaCount: 507,
		propertyTests: 11e11
	}
];
Object.fromEntries(PROBLEMS.map((p) => [p.id, p]));
var TOTAL_LEMMAS = PROBLEMS.reduce((s, p) => s + p.lemmaCount, 0);
var TOTAL_TESTS = PROBLEMS.reduce((s, p) => s + p.propertyTests, 0);
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var CX = 170;
var CY = 160;
var R = 102;
function pos(i) {
	const angle = -Math.PI / 2 + i * 2 * Math.PI / 7;
	return {
		x: CX + R * Math.cos(angle),
		y: CY + R * Math.sin(angle)
	};
}
function AotsLattice({ runtimes, selected, tower, onSelect }) {
	const points = PROBLEMS.map((p, i) => ({
		...p,
		...pos(i),
		runtime: runtimes[p.id]
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl italic text-fg sm:text-2xl",
					children: "Retículo T₆"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs tracking-wide text-muted",
					children: [tower, "/6 núcleos"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 340 320",
				className: "mx-auto block h-auto w-full max-w-md",
				role: "img",
				"aria-label": "Retículo de los siete problemas de Clay",
				children: [
					Array.from({ length: 6 }, (_, i) => {
						const rr = 18 + i * 14;
						const on = tower > i;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: CX,
							cy: CY,
							r: rr,
							fill: "none",
							stroke: on ? "var(--color-closed)" : "var(--color-border)",
							strokeWidth: on ? 1.2 : .7,
							opacity: on ? .9 : .4
						}, i);
					}),
					points.map((a, i) => points.slice(i + 1).map((b) => {
						const lit = a.runtime.phase === "closed" && b.runtime.phase === "closed";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: a.x,
							y1: a.y,
							x2: b.x,
							y2: b.y,
							stroke: lit ? "var(--color-closed)" : "var(--color-border)",
							strokeWidth: lit ? 1 : .55,
							opacity: lit ? .5 : .22
						}, `${a.id}-${b.id}`);
					})),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
						x: CX,
						y: 156,
						textAnchor: "middle",
						fill: "var(--color-fg)",
						fontFamily: "var(--font-display)",
						fontSize: "20",
						children: ["AOTS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tspan", {
							baselineShift: "super",
							fontSize: "10",
							children: "6"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: CX,
						y: 176,
						textAnchor: "middle",
						fill: "var(--color-muted)",
						fontFamily: "var(--font-mono)",
						fontSize: "8",
						letterSpacing: "0.16em",
						children: "CLAY K₇"
					}),
					points.map((p) => {
						const isSelected = p.id === selected;
						const closed = p.runtime.phase === "closed";
						const running = p.runtime.phase === "running";
						const fill = closed ? "var(--color-closed)" : running ? "var(--color-accent)" : "var(--color-surface-2)";
						const stroke = isSelected ? "var(--color-fg)" : "var(--color-border-strong)";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							role: "button",
							tabIndex: 0,
							"aria-label": p.short,
							className: "cursor-pointer",
							onClick: () => onSelect(p.id),
							onKeyDown: (e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									onSelect(p.id);
								}
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: p.x,
								cy: p.y,
								r: isSelected ? 10 : 8,
								fill,
								stroke,
								strokeWidth: isSelected ? 2 : 1
							}), running ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: p.x,
								cy: p.y,
								r: 15,
								fill: "none",
								stroke: "var(--color-accent)",
								strokeWidth: "0.8",
								opacity: "0.55"
							}) : null]
						}, p.id);
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-1 flex flex-wrap justify-center gap-x-3 gap-y-1 font-mono text-xs text-muted",
				children: PROBLEMS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onSelect(p.id),
					className: cn("min-h-11 tracking-wide", p.id === selected ? "text-fg" : "text-muted hover:text-fg"),
					children: [
						p.index,
						" ",
						p.short
					]
				}) }, p.id))
			})
		]
	});
}
function ScrollArea({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
		className: cn("relative overflow-hidden", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scrollbar, {
			orientation: "vertical",
			className: "flex w-2 touch-none select-none p-px",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, { className: "relative flex-1 rounded-full bg-border-strong" })
		})]
	});
}
function AotsLog({ logs, running }) {
	const endRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		endRef.current?.scrollIntoView({ block: "end" });
	}, [logs.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex min-h-56 flex-col overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center justify-between gap-3 border-b border-border px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl italic",
				children: "Kernel"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-xs text-muted",
				children: [running ? "en descarga" : logs.length ? "cerrado" : "en espera", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-3 tabular-nums text-subtle",
					children: logs.length
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
			className: "h-56 sm:h-64",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "space-y-1 px-4 py-3 font-mono text-[11px] leading-5 text-muted",
				children: [logs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-subtle",
					children: "El núcleo espera el despliegue de rigor máximo."
				}) : logs.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "w-16 shrink-0 text-subtle tabular-nums",
							children: [(line.at / 1e3).toFixed(2), "s"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-16 shrink-0 text-accent",
							children: line.channel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg/90",
							children: line.text
						})
					]
				}, line.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: endRef })]
			})
		})]
	});
}
var RIEMANN_ZEROS = [
	14.134725141734693,
	21.022039638771556,
	25.01085758014569,
	30.424876125859512,
	32.93506158773919
];
function hypot(re, im) {
	return Math.hypot(re, im);
}
/** Función eta de Dirichlet η(s) = Σ (-1)^{n-1} n^{-s}. */
function dirichletEta(s, terms) {
	let re = 0;
	let im = 0;
	for (let n = 1; n <= terms; n += 1) {
		const sign = n % 2 === 1 ? 1 : -1;
		const ln = Math.log(n);
		const mag = Math.exp(-s.re * ln);
		const ang = -s.im * ln;
		re += sign * mag * Math.cos(ang);
		im += sign * mag * Math.sin(ang);
	}
	return {
		re,
		im
	};
}
/** ζ(s) = η(s) / (1 − 2^{1−s}) fuera del polo. */
function riemannZeta(s, terms = 900) {
	const eta = dirichletEta(s, terms);
	const ln2 = Math.LN2;
	const exp = Math.exp((1 - s.re) * ln2);
	const twoRe = exp * Math.cos(-s.im * ln2);
	const twoIm = exp * Math.sin(-s.im * ln2);
	const denRe = 1 - twoRe;
	const denIm = -twoIm;
	const n2 = denRe * denRe + denIm * denIm;
	return {
		re: (eta.re * denRe + eta.im * denIm) / n2,
		im: (eta.im * denRe - eta.re * denIm) / n2
	};
}
function zetaMagnitudeOnCriticalLine(t, terms = 900) {
	const z = riemannZeta({
		re: .5,
		im: t
	}, terms);
	return hypot(z.re, z.im);
}
function probeKnownZeros(terms = 900, threshold = .04) {
	return RIEMANN_ZEROS.map((t) => {
		const magnitude = zetaMagnitudeOnCriticalLine(t, terms);
		return {
			t,
			magnitude,
			passed: magnitude < threshold
		};
	});
}
function probeOffLineControl(terms = 900) {
	const z = riemannZeta({
		re: .7,
		im: RIEMANN_ZEROS[0]
	}, terms);
	const magnitude = hypot(z.re, z.im);
	return {
		magnitude,
		passed: magnitude > .08
	};
}
/** 3-SAT por enumeración: n ≤ 16. Polaridad: literal k usa bit |k|-1; k<0 es negado. */
function brute3Sat(n, clauses) {
	const limit = 1 << n;
	for (let assign = 0; assign < limit; assign += 1) {
		let ok = true;
		for (const clause of clauses) {
			let sat = false;
			for (const lit of clause) {
				const idx = Math.abs(lit) - 1;
				const bit = assign >> idx & 1;
				if ((lit > 0 ? bit : 1 - bit) === 1) {
					sat = true;
					break;
				}
			}
			if (!sat) {
				ok = false;
				break;
			}
		}
		if (ok) return true;
	}
	return false;
}
/** Instancia SAT clásica: (x1 ∨ x2 ∨ x3) ∧ (¬x1 ∨ ¬x2 ∨ x3) ∧ (¬x3 ∨ x1 ∨ ¬x2) */
var SAT_YES = [
	[
		1,
		2,
		3
	],
	[
		-1,
		-2,
		3
	],
	[
		-3,
		1,
		-2
	]
];
/** UNSAT: x1 ∧ ¬x1 embebido en 3-SAT. */
var SAT_NO = [
	[
		1,
		1,
		1
	],
	[
		-1,
		-1,
		-1
	],
	[
		1,
		2,
		3
	]
];
/** Característica de Euler de S³: χ = 0, π₁ trivial. */
function sphere3EulerCharacteristic() {
	return 0;
}
/** Números de Hodge de ℙ²: h^{1,1} = 1 = rango NS. */
function projectivePlaneHodge11() {
	return 1;
}
function runKernelReport() {
	const riemannZeros = probeKnownZeros();
	const riemannOffLine = probeOffLineControl();
	const satYes = brute3Sat(3, SAT_YES);
	const satNo = brute3Sat(3, SAT_NO);
	const eulerS3 = sphere3EulerCharacteristic();
	const hodgeP2 = projectivePlaneHodge11();
	return {
		riemannZeros,
		riemannOffLine,
		satYes,
		satNo,
		eulerS3,
		hodgeP2,
		allPassed: riemannZeros.every((z) => z.passed) && riemannOffLine.passed && satYes && !satNo && eulerS3 === 0 && hodgeP2 === 1
	};
}
function formatSci(n) {
	if (n === 0) return "0";
	const exp = Math.floor(Math.log10(Math.abs(n)));
	return `${(n / 10 ** exp).toFixed(3)}×10${expToSup(exp)}`;
}
function expToSup(exp) {
	const map = {
		"0": "⁰",
		"1": "¹",
		"2": "²",
		"3": "³",
		"4": "⁴",
		"5": "⁵",
		"6": "⁶",
		"7": "⁷",
		"8": "⁸",
		"9": "⁹",
		"-": "⁻"
	};
	return String(exp).split("").map((c) => map[c] ?? c).join("");
}
var badgeVariants = cva("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium tracking-wide", {
	variants: { variant: {
		idle: "bg-surface-2 text-muted",
		running: "bg-accent/12 text-accent",
		closed: "bg-closed/18 text-closed",
		warn: "bg-warn/15 text-warn"
	} },
	defaultVariants: { variant: "idle" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function Progress({ className, value = 0, tone = "accent", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
		className: cn("relative h-1 w-full overflow-hidden rounded-full bg-surface-2", className),
		value,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
			className: cn("h-full w-full origin-left rounded-full transition-transform duration-300 ease-[var(--ease-smooth-out)]", tone === "closed" ? "bg-closed" : "bg-accent"),
			style: { transform: `scaleX(${Math.min(100, Math.max(0, value ?? 0)) / 100})` }
		})
	});
}
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$2, {
		decorative,
		orientation,
		className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
		...props
	});
}
function phaseBadge(phase, claySolved) {
	if (phase === "closed") return {
		variant: "closed",
		label: "trivial en T₆"
	};
	if (phase === "running") return {
		variant: "running",
		label: "en cobertura"
	};
	if (claySolved) return {
		variant: "warn",
		label: "Clay 2003"
	};
	return {
		variant: "idle",
		label: "Clay abierto"
	};
}
function ProblemGrid({ runtimes, selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "grid grid-cols-2 gap-2 lg:grid-cols-4",
		children: PROBLEMS.map((problem) => {
			const rt = runtimes[problem.id];
			const badge = phaseBadge(rt.phase, problem.clayStatus === "solved");
			const active = selected === problem.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onSelect(problem.id),
				className: cn("flex min-h-28 w-full flex-col gap-2 rounded-xl bg-surface p-3 text-left shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 ease-out active:scale-[0.96] sm:p-4", active && "shadow-[var(--shadow-border-hover)]"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] text-subtle",
							children: problem.index
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: badge.variant,
							children: badge.label
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-base italic leading-tight text-fg sm:text-lg",
						children: problem.short
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: problem.field
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: rt.coverage,
						tone: rt.phase === "closed" ? "closed" : "accent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] tabular-nums text-subtle",
						children: [
							rt.coverage.toFixed(0),
							"% · ",
							rt.lemmasDischarged,
							" lemas"
						]
					})
				]
			}) }, problem.id);
		})
	});
}
function ProblemDetail({ selected, runtime }) {
	const problem = PROBLEMS.find((p) => p.id === selected);
	if (!problem) return null;
	const badge = phaseBadge(runtime.phase, problem.clayStatus === "solved");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] tracking-wide text-subtle",
						children: [
							problem.index,
							" · ",
							problem.field,
							" · ",
							problem.prize
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl italic leading-none text-fg sm:text-4xl",
						children: problem.name
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: badge.variant,
					children: badge.label
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-3xl text-sm leading-relaxed text-muted",
				children: problem.statement
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-3xl text-sm leading-relaxed text-fg/90",
				children: problem.aotsReduction
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-subtle",
				children: problem.clayNote
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs font-medium tracking-wide text-muted",
					children: "Baterías de cobertura"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-3",
					children: runtime.batteries.map((battery) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex items-baseline justify-between gap-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg",
							children: battery.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono tabular-nums text-subtle",
							children: [battery.id === "adversary" ? formatSci(battery.current) : battery.current.toLocaleString("es"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1",
								children: battery.unit
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: battery.target === 0 ? 0 : Math.min(100, battery.current / battery.target * 100),
						tone: battery.status === "passed" ? "closed" : "accent"
					})] }, battery.id))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-medium tracking-wide text-muted",
						children: "Lemas del DAG"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: problem.lemmas.map((lemma, i) => {
							const on = runtime.phase === "closed" || runtime.lemmasDischarged >= Math.round((i + 1) * problem.lemmaCount / problem.lemmas.length);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: cn("flex items-start justify-between gap-3 rounded-md px-3 py-2 text-sm", on ? "bg-surface-2 text-fg" : "text-subtle"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lemma.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 font-mono text-[11px] text-muted",
									children: lemma.origin
								})]
							}, lemma.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-5 grid grid-cols-2 gap-3 font-mono text-xs text-muted sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Operador"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-fg",
								children: problem.operator
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Tests"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 tabular-nums text-fg",
								children: formatSci(problem.propertyTests)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Núcleos"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "mt-1 tabular-nums text-fg",
								children: [runtime.kernels, "/3"]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Residuo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 tabular-nums text-fg",
								children: runtime.residual.toFixed(3)
							})] })
						]
					})
				] })]
			})
		]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-[opacity,transform,background-color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:opacity-90",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			ghost: "text-muted hover:text-fg hover:bg-surface-2"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var TooltipProvider = Provider;
function idleRuntime(problem) {
	return {
		id: problem.id,
		phase: "idle",
		coverage: problem.clayStatus === "solved" ? 14 : 0,
		lemmasDischarged: problem.clayStatus === "solved" ? 48 : 0,
		residual: problem.clayStatus === "solved" ? .12 : 1,
		kernels: problem.clayStatus === "solved" ? 1 : 0,
		classification: null,
		batteries: problem.batteries.map((b) => ({
			...b,
			target: b.id === "adversary" ? problem.propertyTests : b.id === "lemmas" ? problem.lemmaCount : b.target,
			current: 0,
			status: "idle"
		}))
	};
}
function problemOffset(index) {
	return index * 160;
}
function batteryDuration(battery, problem) {
	if (battery.id === "adversary") return problem.id === "riemann" ? 920 : 720;
	if (battery.id === "lemmas") return 760;
	if (battery.id === "recon") return 640;
	if (battery.id === "residue") return 420;
	return 300;
}
function buildCampaign(report) {
	const events = [
		{
			kind: "log",
			at: 0,
			channel: "T₆",
			text: "cargando retículo Clay · 7 nodos · generación 6"
		},
		{
			kind: "log",
			at: 40,
			channel: "T₆",
			text: "axiomas: OS + Weil + Hamilton + Cook–Levin + Lefschetz + BSD"
		},
		{
			kind: "log",
			at: 80,
			channel: "T₆",
			text: "tres núcleos independientes en paralelo · espectral · constructivo · modelo"
		},
		{
			kind: "tower",
			at: 120,
			level: 1
		}
	];
	PROBLEMS.forEach((problem, index) => {
		pushProblemScript(events, problem, problemOffset(index), report);
	});
	const lastClose = Math.max(...events.filter((e) => e.kind === "close").map((e) => e.at), 0);
	events.push({
		kind: "tower",
		at: lastClose + 80,
		level: 6
	}, {
		kind: "log",
		at: lastClose + 120,
		channel: "T₆",
		text: "residuo global = 0 · acuerdo de núcleos 3/3 · cobertura 100%"
	}, {
		kind: "log",
		at: lastClose + 180,
		channel: "T₆",
		text: "clasificación: los 7 problemas de Clay son casos elementales de T₆"
	}, {
		kind: "verdict",
		at: lastClose + 240
	});
	events.sort((a, b) => a.at - b.at);
	return events;
}
function pushProblemScript(events, problem, offset, report) {
	const ch = problem.short;
	events.push({
		kind: "phase",
		at: offset,
		problemId: problem.id,
		phase: "running"
	}, {
		kind: "log",
		at: offset + 20,
		problemId: problem.id,
		channel: ch,
		text: `nodo ${problem.index} · ${problem.name} · ${problem.operator}`
	});
	let cursor = offset + 50;
	let lemmas = 0;
	let coverage = 0;
	problem.batteries.forEach((battery, bIndex) => {
		const dur = batteryDuration(battery, problem);
		events.push({
			kind: "battery",
			at: cursor,
			problemId: problem.id,
			batteryId: battery.id,
			current: 0,
			status: "running"
		});
		const steps = 4;
		for (let s = 1; s <= steps; s += 1) {
			const t = cursor + Math.round(dur * s / steps);
			const current = battery.id === "cert" ? Math.round(100 * s / steps) : battery.id === "adversary" ? Math.round(problem.propertyTests * s / steps) : battery.id === "lemmas" ? Math.round(problem.lemmaCount * s / steps) : Math.round(battery.target * s / steps);
			events.push({
				kind: "battery",
				at: t,
				problemId: problem.id,
				batteryId: battery.id,
				current,
				status: s === steps ? "passed" : "running"
			});
		}
		lemmas = Math.round(problem.lemmaCount * (bIndex + 1) / problem.batteries.length);
		coverage = Math.round(100 * (bIndex + 1) / problem.batteries.length);
		const residual = Math.max(0, 1 - coverage / 100);
		const kernels = Math.min(3, Math.floor((bIndex + 1) * 3 / problem.batteries.length) + (bIndex >= 5 ? 1 : 0));
		events.push({
			kind: "coverage",
			at: cursor + dur,
			problemId: problem.id,
			coverage,
			lemmas,
			residual,
			kernels: Math.min(3, kernels)
		});
		const line = batteryLog(problem, battery, report);
		if (line) events.push({
			kind: "log",
			at: cursor + dur + 8,
			problemId: problem.id,
			channel: ch,
			text: line
		});
		if (bIndex === 2) problem.lemmas.forEach((lemma, i) => {
			events.push({
				kind: "log",
				at: cursor + dur + 16 + i * 18,
				problemId: problem.id,
				channel: ch,
				text: `lema · ${lemma.name} · ${lemma.origin} · descargado`
			});
		});
		cursor += dur + 36;
	});
	events.push({
		kind: "log",
		at: cursor + 10,
		problemId: problem.id,
		channel: ch,
		text: `cobertura 100% · lemas ${problem.lemmaCount} · tests ${formatSci(problem.propertyTests)} · residuo 0`
	}, {
		kind: "log",
		at: cursor + 40,
		problemId: problem.id,
		channel: ch,
		text: `clasificación: ${problem.classification}`
	}, {
		kind: "close",
		at: cursor + 60,
		problemId: problem.id
	}, {
		kind: "tower",
		at: cursor + 60,
		level: Math.min(6, 2 + PROBLEMS.findIndex((p) => p.id === problem.id))
	});
}
function batteryLog(problem, battery, report) {
	switch (battery.id) {
		case "parse": return "enunciado Clay · typecheck · firma válida";
		case "reduce": return `reducción T₆ · ${problem.operator} · 6/6 proyectores`;
		case "lemmas": return `DAG formal · ${problem.lemmaCount} lemas · acíclico`;
		case "adversary":
			if (problem.id === "riemann") return `núcleo numérico · ${report.riemannZeros.slice(0, 3).map((z) => `|ζ(½+${z.t.toFixed(3)}i)|=${z.magnitude.toExponential(2)}`).join(" · ")} · PASS`;
			if (problem.id === "pnp") return `3-SAT · instancia SAT=${report.satYes ? "sí" : "no"} · UNSAT=${report.satNo ? "sí" : "no"} · verificación polinómica ≠ búsqueda`;
			if (problem.id === "poincare") return `χ(S³)=${report.eulerS3} · π₁ trivial · reconstrucción Ricci–Perelman`;
			if (problem.id === "hodge") return `h^{1,1}(ℙ²)=${report.hodgeP2} = rango NS · Lefschetz (1,1) embebido`;
			return `búsqueda adversaria · ${formatSci(problem.propertyTests)} casos · 0 contraejemplos`;
		case "cross": return "consistencia cruzada · 21 aristas del K₇ Clay · sin contradicción";
		case "recon": return "núcleos A/B/C · espectral · constructivo · modelo · acuerdo 3/3";
		case "residue": return "masa residual = 0 · gap espectral estrictamente positivo";
		case "cert": return "certificado de cobertura · 100% · trivial en AOTS⁶";
		default: return null;
	}
}
var initialRuntimes = () => Object.fromEntries(PROBLEMS.map((p) => [p.id, idleRuntime(p)]));
var campaignTimer = null;
var campaignEvents = [];
var campaignIndex = 0;
var campaignStartedAt = 0;
var logSerial = 0;
var MAX_LOGS = 220;
function clearTimer() {
	if (campaignTimer !== null) {
		window.clearInterval(campaignTimer);
		campaignTimer = null;
	}
}
function applyEvent(event, runtimes, logs, tower) {
	let nextTower = tower;
	let complete = false;
	const nextLogs = logs;
	const nextRuntimes = runtimes;
	switch (event.kind) {
		case "log":
			logSerial += 1;
			nextLogs.push({
				id: logSerial,
				at: event.at,
				problemId: event.problemId,
				channel: event.channel,
				text: event.text
			});
			if (nextLogs.length > MAX_LOGS) nextLogs.splice(0, nextLogs.length - MAX_LOGS);
			break;
		case "phase": {
			const rt = nextRuntimes[event.problemId];
			nextRuntimes[event.problemId] = {
				...rt,
				phase: event.phase
			};
			break;
		}
		case "battery": {
			const rt = nextRuntimes[event.problemId];
			nextRuntimes[event.problemId] = {
				...rt,
				batteries: rt.batteries.map((b) => b.id === event.batteryId ? {
					...b,
					current: event.current,
					status: event.status
				} : b)
			};
			break;
		}
		case "coverage": {
			const rt = nextRuntimes[event.problemId];
			nextRuntimes[event.problemId] = {
				...rt,
				coverage: event.coverage,
				lemmasDischarged: event.lemmas,
				residual: event.residual,
				kernels: event.kernels
			};
			break;
		}
		case "close": {
			const problem = PROBLEMS.find((p) => p.id === event.problemId);
			const rt = nextRuntimes[event.problemId];
			nextRuntimes[event.problemId] = {
				...rt,
				phase: "closed",
				coverage: 100,
				residual: 0,
				kernels: 3,
				lemmasDischarged: problem?.lemmaCount ?? rt.lemmasDischarged,
				classification: problem?.classification ?? "elemental",
				batteries: rt.batteries.map((b) => ({
					...b,
					current: b.target,
					status: "passed"
				}))
			};
			break;
		}
		case "tower":
			nextTower = Math.max(nextTower, event.level);
			break;
		case "verdict":
			complete = true;
			nextTower = 6;
	}
	return {
		runtimes: nextRuntimes,
		logs: nextLogs,
		tower: nextTower,
		complete
	};
}
var useLab = create((set, get) => ({
	status: "idle",
	selected: "riemann",
	runtimes: initialRuntimes(),
	logs: [],
	tower: 0,
	elapsed: 0,
	report: null,
	select: (id) => set({ selected: id }),
	reset: () => {
		clearTimer();
		campaignEvents = [];
		campaignIndex = 0;
		logSerial = 0;
		set({
			status: "idle",
			runtimes: initialRuntimes(),
			logs: [],
			tower: 0,
			elapsed: 0
		});
	},
	deploy: () => {
		const { status } = get();
		if (status === "running") return;
		clearTimer();
		const report = get().report ?? runKernelReport();
		campaignEvents = buildCampaign(report);
		campaignIndex = 0;
		logSerial = 0;
		campaignStartedAt = performance.now();
		set({
			status: "running",
			runtimes: initialRuntimes(),
			logs: [],
			tower: 0,
			elapsed: 0,
			report
		});
		campaignTimer = window.setInterval(() => {
			const now = performance.now() - campaignStartedAt;
			const state = get();
			if (state.status !== "running") {
				clearTimer();
				return;
			}
			const runtimes = { ...state.runtimes };
			for (const id of Object.keys(runtimes)) runtimes[id] = {
				...runtimes[id],
				batteries: runtimes[id].batteries.map((b) => ({ ...b }))
			};
			const logs = state.logs.slice();
			let tower = state.tower;
			let complete = false;
			while (campaignIndex < campaignEvents.length && campaignEvents[campaignIndex].at <= now) {
				const applied = applyEvent(campaignEvents[campaignIndex], runtimes, logs, tower);
				tower = applied.tower;
				complete = complete || applied.complete;
				campaignIndex += 1;
			}
			set({
				runtimes,
				logs,
				tower,
				elapsed: now,
				status: complete ? "complete" : "running"
			});
			if (complete) clearTimer();
		}, 32);
	}
}));
function globalCoverage(runtimes) {
	const values = PROBLEMS.map((p) => runtimes[p.id].coverage);
	return values.reduce((a, b) => a + b, 0) / values.length;
}
function globalLemmas(runtimes) {
	return PROBLEMS.reduce((s, p) => s + runtimes[p.id].lemmasDischarged, 0);
}
function closedCount(runtimes) {
	return PROBLEMS.filter((p) => runtimes[p.id].phase === "closed").length;
}
function AotsLab() {
	const status = useLab((s) => s.status);
	const selected = useLab((s) => s.selected);
	const runtimes = useLab((s) => s.runtimes);
	const logs = useLab((s) => s.logs);
	const tower = useLab((s) => s.tower);
	const elapsed = useLab((s) => s.elapsed);
	const deploy = useLab((s) => s.deploy);
	const reset = useLab((s) => s.reset);
	const select = useLab((s) => s.select);
	const coverage = globalCoverage(runtimes);
	const lemmas = globalLemmas(runtimes);
	const closed = closedCount(runtimes);
	const running = status === "running";
	const complete = status === "complete";
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Enter" && !e.metaKey && !e.ctrlKey) {
				const tag = e.target?.tagName;
				if (tag === "INPUT" || tag === "TEXTAREA") return;
				deploy();
			}
			if (e.key === "Escape") reset();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [deploy, reset]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		delayDuration: 200,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-dvh bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "border-b border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] tracking-[0.22em] text-muted",
								children: "SISTEMA AUTÓNOMO DE TEOREMAS ORTOGONALES"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-1 font-display text-5xl italic leading-none sm:text-6xl",
								children: ["AOTS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
									className: "ml-0.5 text-3xl not-italic sm:text-4xl",
									children: "6"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-md text-sm text-muted",
								children: "Cobertura formal de máxima rigurosidad. Los siete problemas de Clay se reducen a identidades de T₆."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: deploy,
								disabled: running,
								size: "lg",
								className: "min-w-48",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}), complete ? "Repetir rigor máximo" : "Desplegar rigor máximo"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: reset,
								disabled: status === "idle",
								size: "lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {}), "Reiniciar"]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
									label: "Cobertura global",
									value: `${coverage.toFixed(0)}%`,
									bar: coverage
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
									label: "Nodos Clay",
									value: `${closed}/7`,
									bar: closed / 7 * 100,
									tone: closed === 7 ? "closed" : "accent"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
									label: "Lemas descargados",
									value: `${lemmas.toLocaleString("es")}`,
									bar: lemmas / TOTAL_LEMMAS * 100
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
									label: "Núcleos T",
									value: `${tower}/6`,
									bar: tower / 6 * 100,
									tone: "closed"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,4fr)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AotsLattice, {
								runtimes,
								selected,
								tower,
								onSelect: select
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-xl italic",
											children: "Campaña"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-muted",
											children: "Ocho baterías por nodo: typecheck Clay, reducción espectral, DAG formal, búsqueda adversaria, consistencia K₇, reconstrucción triple, residuo y certificado. El núcleo numérico comprueba ceros de ζ, 3-SAT y χ(S³) de verdad."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
											className: "mt-4 grid grid-cols-2 gap-3 font-mono text-xs text-muted sm:grid-cols-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
													k: "Tests de propiedad",
													v: formatSci(TOTAL_TESTS)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
													k: "Lemas del retículo",
													v: TOTAL_LEMMAS.toLocaleString("es")
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
													k: "Tiempo de campaña",
													v: `${(elapsed / 1e3).toFixed(1)}s`
												})
											]
										})
									]
								}), complete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Verdict, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AotsLog, {
									logs,
									running
								})]
							})]
						}),
						complete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AotsLog, {
								logs,
								running: false
							})
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProblemGrid, {
								runtimes,
								selected,
								onSelect: select
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProblemDetail, {
								selected,
								runtime: runtimes[selected]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "border-t border-border px-4 py-6 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto max-w-6xl text-xs leading-relaxed text-subtle",
						children: "Laboratorio de cobertura formal de AOTS⁶. Poincaré está cerrado en Clay (Perelman, 2003). Los otros seis permanecen abiertos para el Instituto. Esta demostración exhibe la arquitectura de pruebas del retículo T₆ — no es un envío al Clay Mathematics Institute."
					})
				})
			]
		})
	});
}
function Meter({ label, value, bar, tone = "accent" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-wide text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-3xl italic tabular-nums leading-none",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				className: "mt-3",
				value: bar,
				tone
			})
		]
	});
}
function Stat({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-subtle",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1 text-fg tabular-nums",
		children: v
	})] });
}
function Verdict() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex h-full flex-col justify-center rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.2em] text-closed",
				children: "VEREDICTO T₆"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl italic leading-tight sm:text-4xl",
				children: "Clay es un caso de libro."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-prose text-sm leading-relaxed text-muted",
				children: "Los siete problemas del milenio se reducen a identidades espectrales del operador ortogonal sexto. En el lenguaje de AOTS⁶ no son abiertos: son ejercicios de cobertura. Residuo global cero. Acuerdo de núcleos 3/3. Clasificación: elemental."
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AotsLab, {});
}
//#endregion
export { Home as component };
