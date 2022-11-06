import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation } from './auth-navigation';
import { navigationRef } from './routes/RootNavigationHelper';
import { useSelector } from 'react-redux';
import { AppNavigation } from './app-navigation';




export const RootNavigation = () => {

    const { user } = useSelector((state) => state.auth)

    return (
        <NavigationContainer ref={navigationRef}>
            {
                user ?
                    <AppNavigation />
                    :
                    <AuthNavigation />
            }
        </NavigationContainer>
    )
}


