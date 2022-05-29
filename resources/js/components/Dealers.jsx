import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';

function Dealers(props) {
    const [filterTerm, setFilterTerm] = useState("0");
    let countries = filterDealersByCountry();

    function filterDealersByCountry() {
        if (filterTerm != "0") {
            return JSON.parse(props.countries).filter((country) => country.ID == filterTerm);
        }
        else {
            return JSON.parse(props.countries);
        }
    }

    function updateFilterHandler(event) {
        setFilterTerm(event.target.value);
    }

    useEffect (() => {
        countries = filterDealersByCountry();
    }, []);

    return (
        <div>
            <div id='dealers'>
                <h1>DEALERS</h1>
            
                <select name="country_filter" id="country_filter" defaultValue="0" onChange={updateFilterHandler}>
                    <option value="0">- All Countries -</option>
                    {
                        JSON.parse(props.countries).map((country) => 
                            <option key={country.ID} value={country.ID}>{country.country}</option>
                        )
                    }
                </select>
            
                <div>
                    {
                        countries.map((country) => 
                            <div className='country_dealers'>
                                <h2 key={country.ID}>{country.country}</h2>
                                {
                                    JSON.parse(props.dealers).map((dealer) => {
                                        if (dealer.countryID == country.ID) {
                                            return (
                                                <div key={dealer.ID} className='dealer'>
                                                    <h3>{dealer.name}</h3>
                                                    <span>{dealer.adress}</span>
                                                    <span>{dealer.phone}</span>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            
                
            </div>

            <style jsx='true'>{`
                div#dealers {
                    overflow-y: overlay;
                    width: 25vw;
                    height: calc(100vh - 80px);
                    user-select: none;
                }
            
                div#dealers h1 {
                    margin: 32px 0 8px 0;
                    text-align: center;
                    font-family: var(--font-3);
                    font-size: 2em;
                    font-weight: 700;
                    color: var(--color-dark-grey);
                }
            
                div#dealers select {
                    display: block;
                    width: 220px;
                    height: 40px;
                    margin: 0 auto;
                    padding: 5px 45px 5px 10px;
                    font-family: var(--font-3);
                    font-size: 15px;
                    color: var(--color-light-grey);
                    border-radius: 0;
                }
            
                div#dealers div .country_dealers {
                    position: relative;
                    margin: 24px 7% 4px 4%;
                }
            
                div#dealers div .country_dealers::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 104%;
                    height: 1.4px;
                    background-color: var(--color-light-grey);
                }
            
                div#dealers div .country_dealers h2 {
                    font-family: var(--font-3);
                    font-size: 1.2em;
                    font-weight: 300;
                    text-transform: uppercase;
                }
            
                div#dealers div .country_dealers h3 {
                    font-family: var(--font-3);
                    font-size: 1.2em;
                    font-weight: 700;
                    text-transform: uppercase;
                }
                    
                div#dealers div .country_dealers span {
                    display: block;
                    font-family: var(--font-3);
                    font-size: 1em;
                    font-weight: 400;
                }
        
                div#dealers div .country_dealers .dealer {
                    margin: 5px 0 0 5px;
                }
            `}</style>
        </div>
    );
}

if (document.getElementById('dealers')) {
    const element = document.getElementById('dealers');
    const props = Object.assign({}, element.dataset);
    ReactDOM.createRoot(element).render(<Dealers {...props}/>);
}
