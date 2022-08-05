console.group('Užduotys');
{
  console.group('1. Užduoties Atsakymas');
  {
    const numbers: number[] = [1, -8, -6, 7, 5, 1];

    const positiveNums = (arr:number[]) => {
      const reduceNums = (sum:number, num:number) => (num > 0 ? sum + num : sum);

      return arr.reduce(reduceNums, 0);
    };
    console.log({
      numbers,
      sumOfPositiveNumbers: positiveNums(numbers),
    });
  }
  console.groupEnd();

  console.group('2. Užduoties Atsakymas');
  {
    const getFirstLetters = (arr: string[]) => {
      const firstLetter:String[] = [];
      arr.map((word) => {
        firstLetter.push(word.charAt(0));
      });
      return firstLetter.toString().replaceAll(',', '');
    };
    console.log(getFirstLetters(['Lietuviškas', 'Nepriklausomas', 'Kanalas']));
    console.log(getFirstLetters(['Lietuvos', 'Respublikos', 'Televizija']));
    console.log(getFirstLetters(['Loughing', 'Out', 'Loud']));
  }
  console.groupEnd();

  console.group('3. Užduoties Atsakymas');
  {
    const multiplyArr = (arr:number[]) => {
      const nums = arr.reduce((prevNum, currNum) => prevNum * currNum);
      return nums;
    };
    console.log(multiplyArr([1, 7, 8]));
    console.log(multiplyArr([98, 74, 5, 0]));
    console.log(multiplyArr([17, 10, 5]));
    console.groupEnd();
  }
  console.groupEnd();
}
