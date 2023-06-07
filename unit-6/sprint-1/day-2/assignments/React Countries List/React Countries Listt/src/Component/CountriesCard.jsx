function CountriesCard({ elem }) {
  return (
    <div data-testid="country-card">
      <div>
        Country: <b data-testid="country-card-name">{elem.country}</b>
      </div>
      <div>
        Population: <b data-testid="country-card-population">{elem.population}</b>
      </div>
    </div>
  );
}

export default CountriesCard;
