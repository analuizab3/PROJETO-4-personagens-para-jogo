const hero = new Character('Hero', 100, 10, 5);
const thief = new Thief('Ladrão', 80, 15, 3);
const mage = new Mage('Mago', 70, 5, 20, 10);
const warrior = new Warrior('Guerreiro', 120, 12, 8, 5);

hero.attack(thief);
thief.attack(mage);
mage.heal(hero);
warrior.changeStance();
warrior.attack(thief);