class BasicStructure {
  constructor(hitpoints, level) {
    this.hitpoints = hitpoints;
    this.level = level;
  }
}

class Defences extends BasicStructure {
  constructor(hitpoints, level, damage, range, dtype, target, tFavorite) {
    super(hitpoints, level);
    this.damage = damage;
    this.range = range;
    this.dtype = dtype;
    this.target = target;
    this.tFavorite = tFavorite;
  }
}

class Storage extends BasicStructure {
  constructor(hitpoints, level, capacity) {
    super(hitpoints, level);
    this.capacity = capacity;
  }
}

class Collectors extends BasicStructure {
  constructor(hitpoints, level, productionRate) {
    super(hitpoints, level);
    this.productionRate = productionRate;
  }
}

class Laboratory extends BasicStructure {
  constructor(hitpoints, level, troopLevel) {
    super(hitpoints, level);
    this.troopLevel = troopLevel;
  }
}

class Troops extends Defences {
  constructor(
    hitpoints,
    level,
    damage,
    range,
    dtype,
    target,
    tFavorite,
    housingSpace
  ) {
    super(hitpoints, level, damage, range, dtype, target, tFavorite);
    this.housingSpace = housingSpace;
  }
}

let archer = new Troops(
  (hitpoints = 30),
  (level = 4),
  (damage = 10),
  (range = 1),
  (dtype = "s"),
  (target = "b"),
  (tFavorite = "a"),
  (housingSpace = 1)
);
let dragon = new Troops(
  (hitpoints = 100),
  (level = 1),
  (damage = 10),
  (range = 1),
  (dtype = "s"),
  (target = "b"),
  (tFavorite = "a"),
  (housingSpace = 20)
);
let goblin = new Troops(
  (hitpoints = 30),
  (level = 1),
  (damage = 10),
  (range = 1),
  (dtype = "s"),
  (target = "g"),
  (tFavorite = "s"),
  (housingSpace = 1)
);

class Attack {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }
  attack() {
    let hitpoints1 = this.player1.hitpoints;
    let hitpoints2 = this.player2.hitpoints;
    let damage1 = this.player1.damage;
    let damage2 = this.player2.damage;
    console.log(`player1: \nhitpoints: ${hitpoints1}\nDamage: ${damage1}`);
    console.log(`player2: \nhitpoints: ${hitpoints2}\nDamage: ${damage2}`);
    while (true) {
      hitpoints1 = hitpoints1 - damage2;
      hitpoints2 = hitpoints2 - damage1;
      if (hitpoints1 <= 0) {
        console.log("player two won");
        return 0;
      } else if (hitpoints2 <= 0) {
        console.log("player one won");
        return 0;
      }
    }
  }
}

results = new Attack(dragon, archer);
results.attack();
