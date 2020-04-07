import React, { Fragment, useState } from 'react'

import MainTitle from '../../../components/MainTitle'
import Card from '../../../components/Card'
import CardContainer from '../../../components/CardContainer'
import CardsGrid from '../../../components/CardsGrid'
import Image from '../../../components/Image'
import {allCategory, categories, works} from '../../../routes/Work'
import Navigation from "../../../components/Navigation";
import cs from "classnames";

export default () => {
    const [currentCategory, setCurrentCategory] = useState(allCategory)

    return (
        <Fragment>
            <MainTitle narrow>We help companies and communities succeed</MainTitle>
            <Navigation>
                {categories.map(category => (
                    <li
                        className={cs(
                            category === currentCategory && 'Selected'
                        )}
                        key={category}
                        onClick={() => setCurrentCategory(category)}>
                        {category}
                    </li>
                ))}
            </Navigation>
            <CardsGrid disharmony>
                {works
                    .filter(w => currentCategory === allCategory || w.categories.includes(currentCategory))
                    .map(({id, title, client, image}, i) => (
                        <CardContainer key={i}>
                            <Card type="work" key={id} to={`/work/${id}`}>
                                <Image src={image} alt={title}/>
                                <h4>{title}</h4>
                                <p>{client}</p>
                            </Card>
                        </CardContainer>
                    ))}
            </CardsGrid>
        </Fragment>
    )
}