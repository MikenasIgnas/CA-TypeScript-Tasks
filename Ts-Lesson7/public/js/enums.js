"use strict";
console.group('Enums - užduotys');
{
    let LargestCitiesLT;
    (function (LargestCitiesLT) {
        LargestCitiesLT["Vilnius"] = "Vilnius";
        LargestCitiesLT["Kaunas"] = "Kaunas";
        LargestCitiesLT["Klaipeda"] = "Klaip\u0117da";
        LargestCitiesLT["Siauliai"] = "\u0160iauliai";
        LargestCitiesLT["Panevezys"] = "Paneve\u017Eys";
    })(LargestCitiesLT || (LargestCitiesLT = {}));
    let BiggestPopulations;
    (function (BiggestPopulations) {
        BiggestPopulations[BiggestPopulations["China"] = 0] = "China";
        BiggestPopulations[BiggestPopulations["UnitedStates"] = 1] = "UnitedStates";
        BiggestPopulations[BiggestPopulations["Indonesia"] = 2] = "Indonesia";
        BiggestPopulations[BiggestPopulations["Pakistan"] = 3] = "Pakistan";
        BiggestPopulations[BiggestPopulations["Brazil"] = 4] = "Brazil";
    })(BiggestPopulations || (BiggestPopulations = {}));
    let BiggestGDP;
    (function (BiggestGDP) {
        BiggestGDP[BiggestGDP["UnitedStates"] = 1] = "UnitedStates";
        BiggestGDP[BiggestGDP["China"] = 2] = "China";
        BiggestGDP[BiggestGDP["Japan"] = 3] = "Japan";
        BiggestGDP[BiggestGDP["Germany"] = 4] = "Germany";
        BiggestGDP[BiggestGDP["UnitedKingdom"] = 5] = "UnitedKingdom";
    })(BiggestGDP || (BiggestGDP = {}));
    const manpFunction = (arr) => arr.map((el) => console.log([el]));
    console.group('1. ENUMS Užduoties Atsakymas');
    {
        const city1 = LargestCitiesLT.Vilnius;
        const city2 = LargestCitiesLT.Kaunas;
        const city3 = LargestCitiesLT.Klaipeda;
        const city4 = LargestCitiesLT.Siauliai;
        const city5 = LargestCitiesLT.Panevezys;
        const allCities = [city1, city2, city3, city4, city5];
        manpFunction(allCities);
    }
    console.groupEnd();
    console.group('2. ENUMS Užduoties Atsakymas');
    {
        const countryPopulation1 = BiggestPopulations.China;
        const countryPopulation2 = BiggestPopulations.UnitedStates;
        const countryPopulation3 = BiggestPopulations.Indonesia;
        const countryPopulation4 = BiggestPopulations.Pakistan;
        const countryPopulation5 = BiggestPopulations.Brazil;
        const allPopulations = [countryPopulation1, countryPopulation2, countryPopulation3, countryPopulation4, countryPopulation5];
        manpFunction(allPopulations);
    }
    console.groupEnd();
    console.group('3. ENUMS Užduoties Atsakymas');
    {
        const countryGDP1 = BiggestGDP.UnitedStates;
        const countryGDP2 = BiggestGDP.China;
        const countryGDP3 = BiggestGDP.Japan;
        const countryGDP4 = BiggestGDP.Germany;
        const countryGDP5 = BiggestGDP.UnitedKingdom;
        const allCountriesGDP = [countryGDP1, countryGDP2, countryGDP3, countryGDP4, countryGDP5];
        manpFunction(allCountriesGDP);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=enums.js.map