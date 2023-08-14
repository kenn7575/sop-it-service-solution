class brainDamage {
  brain: any;
  iq: number;
  constructor(json: any) {
    this.brain = json;
  }
  getIQ() {
    return this.iq;
  }
  setIQ(iq: number) {
    this.iq = iq;
  }
  getBrain() {
    return this.brain;
  }
  setBrain(brain: any) {
    this.brain = brain;
  }
  damageBrain() {
    for (let i = 0; i < this.iq; i++) {
      this.iq--;
    }
  }
}
