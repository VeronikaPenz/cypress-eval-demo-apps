import Calculator from "@/components/calculator/Calculator.vue";
import {MathController} from "@/shared/MathController";

describe('MathController.unit.cy.ts', () => {
  it('mc.add(1, 1) === 2', () => {
    const mc = new MathController();
    expect(mc.add(1, 1)).to.equal(2);
  });
  it('mc.add(-1, 1) === 0', () => {
    const mc = new MathController();
    expect(mc.add(-1, 1)).to.equal(0);
  });
  it('mc.add(1, -1) === 0', () => {
    const mc = new MathController();
    expect(mc.add(1, -1)).to.equal(0);
  });
  it('mc.add(-1, -1) === -2', () => {
    const mc = new MathController();
    expect(mc.add(-1, -1)).to.equal(-2);
  });
});