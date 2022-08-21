console.group('2. Eilės (Queue) duomenų struktūros kūrimas');
class Queue<T> {
  private index:number;

  [i: number]: T | undefined;

  constructor() {
    this.index = -1;
  }

  enqueue(data: T) {
    for (let i = this.index; i >= 0; i -= 1) {
      this[i + 1] = this[i];
    }
    this[0] = data;
    this.index += 1;
  }

  pop(): T | undefined {
    const returnVal = this[0];
    for (let i = 1; i <= this.index; i += 1) {
      this[i - 1] = this[i];
    }

    delete this[this.index];
    this.index -= 1;

    return returnVal;
  }
  get length() {
    return this.index + 1;
  }
}
  // ↑↑↑ klasė ↑↑↑

  // ↓↓↓ bendri kintamieji ↓↓↓
  const numberQueue = new Queue();
  const stringQueue = new Queue();
  // ↑↑↑ bendri kintamieji ↑↑↑

  // 5 min.
  console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
  {
    console.log('Numbers', numberQueue);
    console.log('String', stringQueue);
  }
  console.groupEnd();

  // 30 min
  console.groupCollapsed('1.2. Sukurkite metodą "enqueue", kuris pridėtų elementą į struktūros priekį. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
  {
    numberQueue.enqueue(1);
    numberQueue.enqueue(5);
    numberQueue.enqueue(23);
    numberQueue.enqueue(32);

    stringQueue.enqueue('get');
    stringQueue.enqueue('me');
    stringQueue.enqueue('some');
    stringQueue.enqueue('juice');

 
    console.log('Numbers', numberQueue);
    console.log('Strings', stringQueue);
  }
  console.groupEnd();

  // 30 min
  console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros priekio. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
  {
    const lastNumberEl = numberQueue.pop();
    const lastStringEl = stringQueue.pop();

    console.log(lastNumberEl);
    console.log(lastStringEl);
  }
  console.groupEnd();

  // 5 min
  console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
  {
    console.log('Number Elements Lengt', numberQueue.length,);
    console.log('String Elements Lengt', stringQueue.length);
  }
  console.groupEnd();
}
console.groupEnd();
