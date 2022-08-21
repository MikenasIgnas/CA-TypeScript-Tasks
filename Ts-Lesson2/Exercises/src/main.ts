console.group('1. Užduoties Atsakymas');
{
  type Drink = {
    name: string,
    price: number,
  };

  const drinksPriceAsc = (drink1: Drink, drink2: Drink): number => drink1.price - drink2.price;

  const sortedPrice = (drinks: Drink[]): Drink[] => [...drinks].sort(drinksPriceAsc);

  const drinks: Drink[] = [
    { name: 'juice', price: 1.5 },
    { name: 'water', price: 1 },
    { name: 'cola', price: 2 },
  ];

  const sortedDrinks: Drink[] = sortedPrice(drinks);

  console.log({
    sortedDrinks,
  });
}
console.groupEnd();

console.group('2.  Užduoties Atsakymas');
{
  type ItemObj = {
    [key: string]: number,
  };

  const solution = (itemObj: ItemObj, itemName: string, itemValue: number): ItemObj => ({
    ...itemObj,
    [itemName]: itemValue,
  });

  type SolutionArgs = [ItemObj, string, number];

  const solutionArgs1: SolutionArgs = [{}, 'Brutus', 300];
  const solutionArgs2: SolutionArgs = [{ piano: 500 }, 'Brutus', 400];
  const solutionArgs3: SolutionArgs = [{ piano: 500, stereo: 300 }, 'Caligula', 440];

  const result1: ItemObj = solution(...solutionArgs1);
  const result2: ItemObj = solution(...solutionArgs2);
  const result3: ItemObj = solution(...solutionArgs3);

  console.log(solutionArgs1, result1);
  console.log(solutionArgs2, result2);
  console.log(solutionArgs3, result3);
}
console.groupEnd();
