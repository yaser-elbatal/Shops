import { KeyboardAvoidingView, Platform, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Container, Header, List, OrdersCard, ShimmerCard, SText } from '@components'
import i18n from '@locale'
import { STabView } from 'src/components/STabView'
import { fonts, ordersStore } from '@common'

export const MyOrders = () => {

    const [Sindex, setSelectedIndex] = useState(0);
    const [spinner, setSpinner] = useState(false);

    let routes = [
        { title: i18n.t("pendingOrders"), key: "new" },
        { title: i18n.t("ProcessedOrder"), key: "finished" },
    ];

    const renderItem = useCallback(({ item, index }) => {
        return (<OrdersCard item={item} />)
    }, [])


    const renderScene = ({ route, jumpTo }) => {

        return <List
            data={ordersStore[route?.key]}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            removeClippedSubviews={false}
            onEndReachedThreshold={0.1}
            keyboardShouldPersistTaps="handled"
        // loadMore={orederPageLoading}
        // onEndReached={onEndReached}
        // ListEmptyComponent={
        //     <SpinnerLottie
        //         lottie={Lotties.noList}
        //         message={i18n.t("message.NoOrders")}
        //         style={{ marginTop: moderateScale(35) }}
        //     />}
        />

    };


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{ flex: 1 }}
        >
            <Header
                center={<SText title={i18n.t("myOrders")} style={{ fontFamily: fonts.bold, }} />}

            />
            <Container
                header={true}
            >
                <STabView
                    selectedIndex={Sindex}
                    tabs={routes}
                    renderScene={({ route, jumpTo }) =>
                        spinner ?
                            (<ShimmerCard />)
                            :
                            (renderScene({ route, jumpTo }))}
                    scrollEnabled={false}
                    indexSelected={(e) => setSelectedIndex(e)}

                />
            </Container>
        </KeyboardAvoidingView>
    )
}


