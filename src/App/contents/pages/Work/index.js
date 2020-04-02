import React, { Fragment, useState } from 'react'

import MainTitle from '../../../components/MainTitle'
import Card from '../../../components/Card'
import CardContainer from '../../../components/CardContainer'
import CardsGrid from '../../../components/CardsGrid'
import Image from '../../../components/Image'
import {allCategory, categories, works} from '../../../routes/Work'
import Navigation from "../../../components/Navigation";
import cs from "classnames";

const workPageBaseUrl = '/work/'

export default ({selectedCategory}) => {
    const categoryToShow = selectedCategory || allCategory
    const [currentCategory, setCurrentCategory] = useState(categoryToShow)

    // for making the browser's back button work properly, i.e. update the page content (in addition to the URL)
    window.onpopstate = () => {
        setCurrentCategory(categoryToShow)
    }

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
                        onClick={() => {
                            // Fake page transition to the selected work category.
                            // Below there's a link for search engines to follow but changing the content and
                            // the URL in browser's navigation bar really happens here (without reloading the page)
                            const categoryUrl = workPageBaseUrl + (category === allCategory ? '' : category)
                            history.pushState('', '', categoryUrl)
                            setCurrentCategory(category)
                        }}
                    >
                        <a href={workPageBaseUrl + category}
                           onClick={(event) => { event.preventDefault() }}>
                            {category}
                        </a>
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