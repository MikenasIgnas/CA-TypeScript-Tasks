console.group('Enums - užduotys');
{
    enum LargestCitiesLT {
        Vilnius = 'Vilnius',
        Kaunas = 'Kaunas',
        Klaipeda = 'Klaipėda',
        Siauliai = 'Šiauliai',
        Panevezys = 'Panevežys',
      }
      enum BiggestPopulations {
        China,
        UnitedStates,
        Indonesia,
        Pakistan,
        Brazil,
      }

      enum BiggestGDP {
        UnitedStates = 1,
        China,
        Japan,
        Germany,
        UnitedKingdom,
      }

      const manpFunction = (arr:string[]|number[]) => arr.map((el) => console.log([el]));

      console.group('1. ENUMS Užduoties Atsakymas');
      {
        const city1: LargestCitiesLT = LargestCitiesLT.Vilnius;
        const city2: LargestCitiesLT = LargestCitiesLT.Kaunas;
        const city3: LargestCitiesLT = LargestCitiesLT.Klaipeda;
        const city4: LargestCitiesLT = LargestCitiesLT.Siauliai;
        const city5: LargestCitiesLT = LargestCitiesLT.Panevezys;
        const allCities: string[] = [city1, city2, city3, city4, city5];
        manpFunction(allCities);
      }
      console.groupEnd();

      console.group('2. ENUMS Užduoties Atsakymas');
      {
        const countryPopulation1:BiggestPopulations = BiggestPopulations.China;
        const countryPopulation2:BiggestPopulations = BiggestPopulations.UnitedStates;
        const countryPopulation3:BiggestPopulations = BiggestPopulations.Indonesia;
        const countryPopulation4:BiggestPopulations = BiggestPopulations.Pakistan;
        const countryPopulation5:BiggestPopulations = BiggestPopulations.Brazil;
        const allPopulations: number[] = [countryPopulation1, countryPopulation2, countryPopulation3, countryPopulation4, countryPopulation5];
        manpFunction(allPopulations);
      }
      console.groupEnd();

      console.group('3. ENUMS Užduoties Atsakymas');
      {
        const countryGDP1: BiggestGDP = BiggestGDP.UnitedStates;
        const countryGDP2: BiggestGDP = BiggestGDP.China;
        const countryGDP3: BiggestGDP = BiggestGDP.Japan;
        const countryGDP4: BiggestGDP = BiggestGDP.Germany;
        const countryGDP5: BiggestGDP = BiggestGDP.UnitedKingdom;
        const allCountriesGDP:number[] = [countryGDP1, countryGDP2, countryGDP3, countryGDP4, countryGDP5];
        manpFunction(allCountriesGDP);
      }
      console.groupEnd();
}
console.groupEnd();
