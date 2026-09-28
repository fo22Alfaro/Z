import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  brute3Sat,
  probeKnownZeros,
  probeOffLineControl,
  projectivePlaneHodge11,
  riemannZeta,
  runKernelReport,
  SAT_NO,
  SAT_YES,
  sphere3EulerCharacteristic,
  zetaMagnitudeOnCriticalLine,
} from "./math.ts";

describe("AOTS⁶ kernel numérico", () => {
  it("anula ζ en los cinco primeros ceros de la línea crítica", () => {
    const probes = probeKnownZeros(900, 0.04);
    for (const p of probes) {
      assert.equal(p.passed, true, `|ζ(1/2 + ${p.t}i)| = ${p.magnitude}`);
    }
  });

  it("no anula ζ fuera de Re = 1/2 a la altura del primer cero", () => {
    const off = probeOffLineControl(900);
    assert.equal(off.passed, true, `|ζ(0.7 + 14.13i)| = ${off.magnitude}`);
  });

  it("mantiene |ζ| orden uno lejos de ceros en la línea crítica", () => {
    const mag = zetaMagnitudeOnCriticalLine(16, 900);
    assert.ok(mag > 0.4, `unexpectedly small magnitude ${mag}`);
  });

  it("respeta ζ(s̄) = ζ(s)̄", () => {
    const z = riemannZeta({ re: 0.6, im: 4 }, 400);
    const c = riemannZeta({ re: 0.6, im: -4 }, 400);
    assert.ok(Math.abs(z.re - c.re) < 1e-9);
    assert.ok(Math.abs(z.im + c.im) < 1e-9);
  });

  it("resuelve 3-SAT SAT y rechaza UNSAT", () => {
    assert.equal(brute3Sat(3, SAT_YES), true);
    assert.equal(brute3Sat(3, SAT_NO), false);
  });

  it("fija χ(S³) = 0", () => {
    assert.equal(sphere3EulerCharacteristic(), 0);
  });

  it("fija h^{1,1}(ℙ²) = 1", () => {
    assert.equal(projectivePlaneHodge11(), 1);
  });

  it("cierra el informe completo del núcleo", () => {
    const report = runKernelReport();
    assert.equal(report.allPassed, true);
    assert.equal(report.satYes, true);
    assert.equal(report.satNo, false);
  });
});
