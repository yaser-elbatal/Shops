import React, { useCallback } from 'react'
import { Container, Header, List, ProductCard, Slider, SText } from '@components'
import { homeGallery, Products } from '@common'
import { styles } from './styles'
import i18n from '@locale'
import { BellSVG } from '@SVG'

export const Home = () => {


    const renderItem = useCallback(({ item, index }) => {
        return (
            <ProductCard
                item={item}
            />)
    }, [])

    return (
        <Container header={true} >
            <Header
                center={<SText
                    title={i18n.t("Shopps")}
                    style={styles.title}
                />}
                end={<BellSVG />}
            />

            <List
                data={Products}
                renderItem={renderItem}
                refreshing={false}
                numColumns={3}
                ListHeaderComponent={<Slider items={homeGallery} />}

            />
        </Container>
    )
}

