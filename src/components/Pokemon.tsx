import React, { FC } from 'react'
import { PokemonData } from '../store/types'

interface PokemonProps {
    data: PokemonData
}

const Pokemon: FC<PokemonProps> = ({ data }) => {
    return(
        <section className="section">
            <div className="container">
                <div className="level" style={{alignItems: 'flex-start'}}>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">{data.results.map(a => {
                                return <li>{a.name} + {a.url}</li>
                            })}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pokemon