import React from 'react';
import { createBottomTabNavigator, createNavigationContainer } from 'react-navigation';
import { Button, Icon, Footer, FooterTab } from 'native-base';
//LOCAL
import config from '../../../config';
import Buy from './Buy';
import Sell from './Sell';
import Orders from './Orders';

const bottomTabNavigator = createBottomTabNavigator(
    {
        Buy: {
            screen: Buy,
            navigationOptions: {
                tabBarIcon: ({ focused, tintColor }) => {
                    const iconName = `ios-cart${focused ? '' : '-outline'}`;
                    return <Icon name={iconName} color={tintColor} />;
                }
            }
        },
        Sell: {
            screen: Sell,
            navigationOptions: {
                tabBarIcon: ({ focused, tintColor }) => {
                    const iconName = `ios-cash${focused ? '' : '-outline'}`;
                    return <Icon name={iconName} color={tintColor} />;
                }
            }
        },
        Orders: {
            screen: Orders,
            navigationOptions: {
                tabBarIcon: ({ focused, tintColor }) => {
                    const iconName = focused?'md-list':'ios-list';
                    return <Icon name={iconName} color={tintColor} />;
                }
            }
        }
    },
    {
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName = 'ios-list';
                if (routeName === 'Buy') iconName = 'ios-cart';
                else if (routeName === 'Sell') iconName = 'ios-sell';
                else iconName = 'ios-list';
                return <Icon name={iconName} active={focused} color={tintColor} />;
            }
        },
        tabBarOptions: {
            showLabel: false,
            activeTintColor: config.COLOR_TEXT_DARK,
            inactiveTintColor: config.COLOR_TEXT_LIGHT,
            style: {
                backgroundColor: 'white',
                elevation: 16
            }
        }
    }
);

export default bottomTabNavigator;