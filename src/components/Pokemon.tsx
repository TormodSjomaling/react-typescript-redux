import React, { FC } from 'react'
import { Pokemon as d} from '../store/types'

interface PokemonProps {
    data: d[]
}

const Pokemon: FC<PokemonProps> = ({ data }) => {
    return(
        <section className="section">
            <div className="container">
                <div className="level" style={{alignItems: 'flex-start'}}>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">{data.map(a => {
                                return <li>{a.category} + {a.title}</li>
                            })}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pokemon