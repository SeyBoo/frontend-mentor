import { useLocation } from 'react-router-dom'
import {  } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Nav from '../nav/index';
import './style.css'

export default function CardDetails(props:any) {

    interface Curriences {
        code:string;
        name:string;
        symbol:string;
    }

    interface Languages {
        name:string;
        nativeName:string;
    }

    interface borderCountry {
        acronym:string;
        name:string;
    }

    interface Country {
        status: string;
        name: string;
        flag: string;
        nativeName: string;
        population: string;
        region: string;
        subregion: string;
        topLevelDomain: string;
        currencies: Array<Curriences>;
        languages: Array<Languages>;
        regionalBlocs: Array<borderCountry>;
    }

    
    const [Data, setData] = useState<Country[]>([]);
    
    const location = useLocation();
    const name = location.pathname.substr(9);

    useEffect(() => {
        fetch("https://restcountries.com/v2/name/" + name)
          .then(res => res.json())
          .then(
            (result) => {
                setData(result)
            },
          )
      }, [name]
      )

    return (    
        <div className="card_details">
           <Nav setTheme={props.setTheme}/>
           <div className="container">
            <a href="/" className='back'>
                <i className="fas fa-long-arrow-alt-left"></i>
                <span>Back</span>
            </a>
            {Data.map(r => <section key={r.name}>
                <aside className='flag'>
                    <img src={r.flag} alt={r.name}></img>
                </aside>
                <aside className='content'>
                        <div>
                            <h2>{r.name}</h2>
                            <span className='content-variableData.dataMore'>
                                <span>
                                    <p><strong>Native Name: {r.nativeName}</strong> </p>
                                    <p><strong>Population: {r.population}</strong> </p>
                                    <p><strong>Region:</strong> {r.region}</p>
                                    <p><strong>Sub Region:</strong> {r.subregion}</p>
                                </span> 
                                <span>
                                    <p><strong>Top Level Domain:</strong> {r.topLevelDomain}</p>
                                    <ol className="list-container">
                                        <p><strong>Currencies:</strong></p>
                                        {r.currencies.map(rc => <p key={rc.code}>{rc.code}</p>)}
                                    </ol>
                                    <ol className="list-container">
                                        <p><strong>Languages:</strong></p>
                                        {r.languages.map(rl => <p key={rl.name}  className="language-item">{rl.name}</p>)}
                                    </ol>
                                    
                                </span>
                            
                            </span>
                        </div>
                        <span className='countries'>
                            
                            {r.regionalBlocs != null ? 
                            <>
                            <h3>Borders Countries:</h3>
                            {r.regionalBlocs.map(r => <p key={r.name}>{r.name}</p>)}
                            </>: null}
                        </span>
                </aside>
            </section> )}
           </div>
        </div>
    )
}