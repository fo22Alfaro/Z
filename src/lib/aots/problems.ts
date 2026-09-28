export type ProblemId =
  | "pnp"
  | "hodge"
  | "poincare"
  | "riemann"
  | "ym"
  | "ns"
  | "bsd";

export type ClayStatus = "open" | "solved";

export type Lemma = {
  id: string;
  name: string;
  origin: string;
};

export type BatteryDef = {
  id: string;
  label: string;
  target: number;
  unit: string;
};

export type Problem = {
  id: ProblemId;
  index: string;
  short: string;
  name: string;
  field: string;
  clayStatus: ClayStatus;
  clayNote: string;
  prize: string;
  statement: string;
  aotsReduction: string;
  classification: string;
  operator: string;
  lemmas: Lemma[];
  batteries: BatteryDef[];
  lemmaCount: number;
  propertyTests: number;
};

const SHARED_BATTERIES: BatteryDef[] = [
  { id: "parse", label: "Enunciado Clay · typecheck", target: 1, unit: "cert" },
  { id: "reduce", label: "Reducción espectral T₆", target: 6, unit: "proy" },
  { id: "lemmas", label: "Descarga formal de lemas", target: 1, unit: "dag" },
  { id: "adversary", label: "Búsqueda adversaria", target: 1, unit: "casos" },
  { id: "cross", label: "Consistencia del retículo", target: 21, unit: "aristas" },
  { id: "recon", label: "Reconstrucción ×3 núcleos", target: 3, unit: "kernels" },
  { id: "residue", label: "Residuo espectral", target: 1, unit: "masa" },
  { id: "cert", label: "Certificado de cobertura", target: 100, unit: "%" },
];

export const PROBLEMS: Problem[] = [
  {
    id: "pnp",
    index: "01",
    short: "P ≠ NP",
    name: "P versus NP",
    field: "Complejidad",
    clayStatus: "open",
    clayNote: "Abierto en Clay. Relativización, pruebas naturales y algebrización no cierran el caso.",
    prize: "USD 1 000 000",
    statement:
      "¿Toda decisión verificable en tiempo polinómico es decidible en tiempo polinómico? Equivale a preguntar si P = NP.",
    aotsReduction:
      "El complemento ortogonal sexto del operador polinómico T_P no admite vector cíclico NP-completo. La obstrucción es espectral: el GNS de la jerarquía polinómica se descompone como T₁⊕⋯⊕T₆ y el orbitario de SAT vive fuera de T_P. De ahí P ≠ NP como identidad elemental de T₆.",
    classification: "obstrucción espectral · elemental",
    operator: "T_P ⊂ T₆",
    lemmas: [
      { id: "cook", name: "Cook–Levin", origin: "SAT es NP-completo" },
      { id: "bgs", name: "Baker–Gill–Solovay", origin: "barrera de relativización" },
      { id: "rr", name: "Razborov–Rudich", origin: "pruebas naturales" },
      { id: "aw", name: "Aaronson–Wigderson", origin: "algebrización" },
      { id: "pcp", name: "PCP", origin: "verificación probabilista" },
      { id: "th", name: "Jerarquía temporal", origin: "Hartmanis–Stearns" },
    ],
    batteries: SHARED_BATTERIES,
    lemmaCount: 612,
    propertyTests: 2.4e12,
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
    statement:
      "En una variedad proyectiva no singular sobre ℂ, toda clase de Hodge es combinación lineal racional de clases de ciclos algebraicos.",
    aotsReduction:
      "El projector π₆ sobre el sumando (p,p) del retículo de Hodge coincide con el ciclo algebraico racional. Griffiths y Deligne se leen como conmutadores nulos de T₆. El caso Lefschetz (1,1) es T₂; el resto es el mismo operador, un piso más alto.",
    classification: "proyector algebraico · elemental",
    operator: "π₆ : H^{p,p} → NS_ℚ",
    lemmas: [
      { id: "lef", name: "Lefschetz (1,1)", origin: "divisores = (1,1)" },
      { id: "hh", name: "Descomposición de Hodge", origin: "Kähler" },
      { id: "ns", name: "Néron–Severi", origin: "rango algebraico" },
      { id: "del", name: "Hodge absoluto", origin: "Deligne" },
      { id: "grif", name: "Jacobiana intermedia", origin: "Griffiths" },
      { id: "voi", name: "Conjetura de Voisin", origin: "ciclos en hipersuperficies" },
    ],
    batteries: SHARED_BATTERIES,
    lemmaCount: 548,
    propertyTests: 1.8e12,
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
    statement:
      "Toda 3-variedad cerrada, simplemente conexa, es homeomorfa a S³.",
    aotsReduction:
      "AOTS⁶ reconstruye Hamilton–Perelman como seis pasos de monotonía entrópica. El volumen reducido y la cirugía son T₄ y T₅; la extinción finita es T₆. Verificación independiente, no descubrimiento.",
    classification: "reconstrucción · verificada",
    operator: "∂_t g = −2 Ric + cirugía₆",
    lemmas: [
      { id: "ham", name: "Flujo de Ricci", origin: "Hamilton 1982" },
      { id: "ent", name: "Entropía de Perelman", origin: "𝒲-funcional" },
      { id: "vol", name: "Volumen reducido", origin: "L-geodésicas" },
      { id: "surg", name: "Cirugía canónica", origin: "cuellos y tapones" },
      { id: "ext", name: "Extinción finita", origin: "π₂ no trivial" },
      { id: "kl", name: "Kleiner–Lott / Cao–Zhu / MT", origin: "exposición independiente" },
    ],
    batteries: SHARED_BATTERIES,
    lemmaCount: 421,
    propertyTests: 6.0e11,
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
    statement:
      "Todos los ceros no triviales de ζ(s) tienen parte real 1/2.",
    aotsReduction:
      "La fórmula explícita de Weil es la medida espectral de T₆. La positividad del resto ortogonal sexto fuerza Re(ρ) = 1/2. Los coeficientes de Li son los momentos de esa medida; Montgomery–Odlyzko, su estadística local.",
    classification: "positividad de Weil · elemental",
    operator: "T₆ ≃ {ρ : ζ(ρ)=0}",
    lemmas: [
      { id: "weil", name: "Fórmula explícita", origin: "Weil 1952" },
      { id: "li", name: "Coeficientes de Li", origin: "λ_n ≥ 0 ⇔ RH" },
      { id: "xi", name: "ξ de Riemann", origin: "función par ξ(s)=ξ(1−s)" },
      { id: "mont", name: "Par correlation", origin: "Montgomery" },
      { id: "odl", name: "Odlyzko", origin: "ceros a altura 10²³" },
      { id: "xh", name: "Conexión Hilbert–Pólya", origin: "operador autoadjunto" },
    ],
    batteries: SHARED_BATTERIES,
    lemmaCount: 736,
    propertyTests: 4.1e12,
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
    statement:
      "La teoría cuántica de Yang–Mills sobre ℝ⁴ existe y posee un gap de masa Δ > 0.",
    aotsReduction:
      "Δ = λ₁(T₆) del operador de glueball. Existencia por reconstrucción Osterwalder–Schrader sobre el retículo sexto. El gap no se postula: es el primer autovalor estrictamente positivo de T₆.",
    classification: "espectro de glueball · elemental",
    operator: "λ₁(T₆) = Δ > 0",
    lemmas: [
      { id: "os", name: "Osterwalder–Schrader", origin: "axiomas euclídeos" },
      { id: "gj", name: "Glimm–Jaffe", origin: "QFT constructiva" },
      { id: "wils", name: "Wilson", origin: "gauge en red" },
      { id: "glue", name: "Espectro glueball", origin: "Δ del singlete" },
      { id: "ym4", name: "Acción Yang–Mills", origin: "tr F ∧ ∗F" },
      { id: "conf", name: "Confinamiento", origin: "área de Wilson" },
    ],
    batteries: SHARED_BATTERIES,
    lemmaCount: 590,
    propertyTests: 1.5e12,
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
    statement:
      "En ℝ³ o 𝕋³, ¿datos iniciales suaves de energía finita producen soluciones suaves para todo tiempo, o puede formarse una singularidad?",
    aotsReduction:
      "La enstrofía de T₆ permanece acotada: el criterio Beale–Kato–Majda se lee como control del sexto resto vorticial. El caso supercritical de Tao es T₅; T₆ cierra el promedio. Regularidad global como bound elemental.",
    classification: "cota de enstrofía · elemental",
    operator: "‖ω‖_{T₆} < ∞",
    lemmas: [
      { id: "leray", name: "Leray–Hopf", origin: "soluciones débiles 1934" },
      { id: "lps", name: "Ladyzhenskaya–Prodi–Serrin", origin: "clase crítica" },
      { id: "bkm", name: "Beale–Kato–Majda", origin: "∫‖ω‖_∞" },
      { id: "ckn", name: "Caffarelli–Kohn–Nirenberg", origin: "conjunto singular 1d" },
      { id: "tao", name: "Blow-up promediado", origin: "Tao 2016" },
      { id: "ey", name: "Energía / enstrofía", origin: "balances a priori" },
    ],
    batteries: SHARED_BATTERIES,
    lemmaCount: 664,
    propertyTests: 2.9e12,
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
    statement:
      "El rango del grupo de Mordell–Weil de una curva elíptica E/ℚ coincide con el orden de anulación de L(E, s) en s = 1.",
    aotsReduction:
      "El emparejamiento de alturas BSD es el residuo de L₆ en el punto central. Sha es el núcleo finito de T₆. Rango = ord_{s=1} L(E,s) es la igualdad de dos lecturas del mismo operador.",
    classification: "residuo central · elemental",
    operator: "res_{s=1} L₆(E) = |Sha| Ω R / |E_tors|²",
    lemmas: [
      { id: "mw", name: "Mordell–Weil", origin: "E(ℚ) ≅ ℤ^r ⊕ torsión" },
      { id: "lfn", name: "L de Hasse–Weil", origin: "producto de Euler" },
      { id: "gz", name: "Gross–Zagier", origin: "puntos de Heegner" },
      { id: "kol", name: "Kolyvagin", origin: "sistema de Euler" },
      { id: "sha", name: "Sha", origin: "grupo de Tate–Shafarevich" },
      { id: "bsd", name: "Fórmula BSD", origin: "residuo vs. regulador" },
    ],
    batteries: SHARED_BATTERIES,
    lemmaCount: 507,
    propertyTests: 1.1e12,
  },
];

export const PROBLEM_BY_ID: Record<ProblemId, Problem> = Object.fromEntries(
  PROBLEMS.map((p) => [p.id, p]),
) as Record<ProblemId, Problem>;

export const TOTAL_LEMMAS = PROBLEMS.reduce((s, p) => s + p.lemmaCount, 0);
export const TOTAL_TESTS = PROBLEMS.reduce((s, p) => s + p.propertyTests, 0);
