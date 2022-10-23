/* Defining Pizza class */
class Pizza {
  /* All protected attributes */
  protected _extraChs: boolean;
  protected _ham: number;
  protected _pepp: number;
  protected _pnappl: number;
  protected _sizePrices: [number, number, number];

  /* The constructor sets the attributes */
  constructor(
    extraChs: boolean,
    ham: number,
    pepp: number,
    pnappl: number,
    sizePrices: [number, number, number]
  ) {
    this._extraChs = extraChs;
    this._ham = ham;
    this._pepp = pepp;
    this._pnappl = pnappl;
    this._sizePrices = sizePrices;
  }

  /* Getters and Setters for all attributes */
  public get extraChs(): boolean {
    return this._extraChs;
  }

  public set extraChs(v: boolean) {
    this._extraChs = v;
  }

  public get ham(): number {
    return this._ham;
  }

  public set ham(v: number) {
    this._ham = v;
  }

  public get pepp(): number {
    return this._pepp;
  }

  public set pepp(v: number) {
    this._pepp = v;
  }

  public get pnappl(): number {
    return this._pnappl;
  }

  public set pnappl(v: number) {
    this._pnappl = v;
  }

  public get sizePrices(): [number, number, number] {
    return this._sizePrices;
  }

  public set sizePrices(v: [number, number, number]) {
    this._sizePrices = v;
  }

  /* Public method that returns the total cost of the pizza */
  public genCost() {
    const price = this._extraChs
      ? this._sizePrices[0] +
        this._sizePrices[1] * (this._ham + this._pepp + this._pnappl) +
        this._sizePrices[2]
      : this._sizePrices[0] +
        this._sizePrices[1] * (this._ham + this._pepp + this._pnappl);

    return price;
  }
}

/* These classes extend Pizza and only make a little modification when passing price values */
class sPizza extends Pizza {
  constructor(extraChs: boolean, ham: number, pepp: number, pnappl: number) {
    super(extraChs, ham, pepp, pnappl, [10, 2, 2]);
  }
}

class mPizza extends Pizza {
  constructor(extraChs: boolean, ham: number, pepp: number, pnappl: number) {
    super(extraChs, ham, pepp, pnappl, [12, 2, 4]);
  }
}

class lPizza extends Pizza {
  constructor(extraChs: boolean, ham: number, pepp: number, pnappl: number) {
    super(extraChs, ham, pepp, pnappl, [14, 3, 6]);
  }
}

class xlPizza extends Pizza {
  constructor(extraChs: boolean, ham: number, pepp: number, pnappl: number) {
    super(extraChs, ham, pepp, pnappl, [18, 4, 6]);
  }
}

/* Testing the code :D */
/* NOTE: I understood that its part of the activity to leave our tests here as the indications say */
const order1 = new sPizza(true, 4, 1, 2); // 10 + 2 * (4 + 1 + 2) + 2 = 10 + 14 + 2 = 26
const order2 = new mPizza(false, 3, 1, 1); // 12 + 2 * (3 + 1 + 1) = 12 + 10 = 22
const order3 = new lPizza(true, 1, 3, 1); // 14 + 3 * (1 + 3 + 1) + 6 = 14 + 15 + 6 = 35
const order4 = new xlPizza(false, 6, 1, 1); // 18 + 4 * (6 + 1 + 1) = 18 + 32 = 50

console.log(order1.genCost());
console.log(order2.genCost());
console.log(order3.genCost());
console.log(order4.genCost());
