import Energy from '../Energy';

export interface SimpleFighter {
  lifePoints: number;
  strength: number;
  attack(enemy: Fighter | SimpleFighter): void;
  receiveDamage(attackPoints: number): number;
}

export interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;
  special?(enemy: Fighter | SimpleFighter): void;
  levelUp(): void;
}
