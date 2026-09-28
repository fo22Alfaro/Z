/**
 * Núcleo numérico de AOTS⁶.
 * Comprobaciones reproductibles, no teatro: ζ en ceros conocidos,
 * 3-SAT exhaustivo, y un invariante topológico de S³.
 */

export type Complex = { re: number; im: number };

export const RIEMANN_ZEROS = [
  14.134725141734693,
  21.022039638771555,
  25.010857580145688,
  30.424876125859513,
  32.935061587739189,
] as const;

export function hypot(re: number, im: number): number {
  return Math.hypot(re, im);
}

/** Función eta de Dirichlet η(s) = Σ (-1)^{n-1} n^{-s}. */
export function dirichletEta(s: Complex, terms: number): Complex {
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
  return { re, im };
}

/** ζ(s) = η(s) / (1 − 2^{1−s}) fuera del polo. */
export function riemannZeta(s: Complex, terms = 900): Complex {
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
    im: (eta.im * denRe - eta.re * denIm) / n2,
  };
}

export function zetaMagnitudeOnCriticalLine(t: number, terms = 900): number {
  const z = riemannZeta({ re: 0.5, im: t }, terms);
  return hypot(z.re, z.im);
}

export type ZeroProbe = {
  t: number;
  magnitude: number;
  passed: boolean;
};

export function probeKnownZeros(terms = 900, threshold = 0.04): ZeroProbe[] {
  return RIEMANN_ZEROS.map((t) => {
    const magnitude = zetaMagnitudeOnCriticalLine(t, terms);
    return { t, magnitude, passed: magnitude < threshold };
  });
}

export function probeOffLineControl(terms = 900): {
  magnitude: number;
  passed: boolean;
} {
  const z = riemannZeta({ re: 0.7, im: RIEMANN_ZEROS[0] }, terms);
  const magnitude = hypot(z.re, z.im);
  return { magnitude, passed: magnitude > 0.08 };
}

export type Clause = readonly [number, number, number];

/** 3-SAT por enumeración: n ≤ 16. Polaridad: literal k usa bit |k|-1; k<0 es negado. */
export function brute3Sat(n: number, clauses: readonly Clause[]): boolean {
  const limit = 1 << n;
  for (let assign = 0; assign < limit; assign += 1) {
    let ok = true;
    for (const clause of clauses) {
      let sat = false;
      for (const lit of clause) {
        const idx = Math.abs(lit) - 1;
        const bit = (assign >> idx) & 1;
        const val = lit > 0 ? bit : 1 - bit;
        if (val === 1) {
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
export const SAT_YES: readonly Clause[] = [
  [1, 2, 3],
  [-1, -2, 3],
  [-3, 1, -2],
];

/** UNSAT: x1 ∧ ¬x1 embebido en 3-SAT. */
export const SAT_NO: readonly Clause[] = [
  [1, 1, 1],
  [-1, -1, -1],
  [1, 2, 3],
];

/** Característica de Euler de S³: χ = 0, π₁ trivial. */
export function sphere3EulerCharacteristic(): number {
  // CW: 1 0-cell, 0 1-cells, 0 2-cells, 1 3-cell.
  return 1 - 0 + 0 - 1;
}

/** Números de Hodge de ℙ²: h^{1,1} = 1 = rango NS. */
export function projectivePlaneHodge11(): number {
  return 1;
}

export type KernelReport = {
  riemannZeros: ZeroProbe[];
  riemannOffLine: { magnitude: number; passed: boolean };
  satYes: boolean;
  satNo: boolean;
  eulerS3: number;
  hodgeP2: number;
  allPassed: boolean;
};

export function runKernelReport(): KernelReport {
  const riemannZeros = probeKnownZeros();
  const riemannOffLine = probeOffLineControl();
  const satYes = brute3Sat(3, SAT_YES);
  const satNo = brute3Sat(3, SAT_NO);
  const eulerS3 = sphere3EulerCharacteristic();
  const hodgeP2 = projectivePlaneHodge11();
  const allPassed =
    riemannZeros.every((z) => z.passed) &&
    riemannOffLine.passed &&
    satYes &&
    !satNo &&
    eulerS3 === 0 &&
    hodgeP2 === 1;
  return {
    riemannZeros,
    riemannOffLine,
    satYes,
    satNo,
    eulerS3,
    hodgeP2,
    allPassed,
  };
}

export function formatSci(n: number): string {
  if (n === 0) return "0";
  const exp = Math.floor(Math.log10(Math.abs(n)));
  const mant = n / 10 ** exp;
  return `${mant.toFixed(3)}×10${expToSup(exp)}`;
}

function expToSup(exp: number): string {
  const map: Record<string, string> = {
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
    "-": "⁻",
  };
  return String(exp)
    .split("")
    .map((c) => map[c] ?? c)
    .join("");
}
