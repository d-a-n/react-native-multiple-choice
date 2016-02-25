import React from 'react-native';

export default React.StyleSheet.create({
    list: {},

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    optionLabel: {
        flex: 1,
    },

    optionIndicator: {
        width: 40,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    optionIndicatorIcon: {
        width: 20,
        height: 20
    },

    separator: {
        height: 1,
        marginTop: 4,
        marginBottom: 4,
        backgroundColor: '#efefef',
    }
});