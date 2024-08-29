class Character {
    constructor(name, lifepoints, attackPts, defensePts) {
      this.name = name;
      this.lifepoints = lifepoints;
      this.attackPts = attackPts;
      this.defensePts = defensePts;
    }
  
    attack(target) {
      const damage = this.attackPts - target.defensePts;
      target.lifepoints -= damage;
      console.log(`${this.name} atacou ${target.name} e causou ${damage} de dano.`);
    }
  }
  
  class Thief extends Character {
    attack(target) {
      const damage = 2 * (this.attackPts - target.defensePts);
      target.lifepoints -= damage;
      console.log(`${this.name} atacou furtivamente e causou ${damage} de dano.`);
    }
  }
  
  class Mage extends Character {
    constructor(name, lifepoints, attackPts, defensePts, magicPts) {
      super(name, lifepoints, attackPts, defensePts);
      this.magicPts = magicPts;
    }
  
    attack(target) {
      const damage = this.attackPts + this.magicPts - target.defensePts;
      target.lifepoints -= damage;
      console.log(`${this.name} lançou um feitiço e causou ${damage} de dano.`);
    }
  
    heal(target) {
      const healAmount = 2 * this.magicPts;
      target.lifepoints += healAmount;
      console.log(`${this.name} curou ${target.name} em ${healAmount} pontos de vida.`);
    }
  }
  
  class Warrior extends Character {
    constructor(name, lifepoints, attackPts, defensePts, shieldPts) {
      super(name, lifepoints, attackPts, defensePts);
      this.shieldPts = shieldPts;
      this.position = 'attack';
    }
  
    attack(target) {
      if (this.position === 'attack') {
        const damage = this.attackPts - target.defensePts;
        target.lifepoints -= damage;
        console.log(`${this.name} atacou ${target.name} e causou ${damage} de dano.`);
      } else {
        console.log(`${this.name} está em posição de defesa e não pode atacar.`);
      }
    }
  
    changeStance() {
      this.position = this.position === 'attack' ? 'defense' : 'attack';
      console.log(`${this.name} mudou para a posição de ${this.position}.`);
    }
  }