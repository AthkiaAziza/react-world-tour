

const CountryData = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    console.log('inside country data', country, handleVisitedCountry, handleVisitedFlags)
    return (
        <div>
            <p><small>Country data: {country.name.common}</small></p>
        </div>
    );
};

export default CountryData;