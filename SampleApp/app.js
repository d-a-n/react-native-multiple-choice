'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import MultipleChoice from 'react-native-multiple-choice'

class SampleApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MultipleChoice
                    options={[
                        'Lorem ipsum dolor sit',
                        'Lorem ipsum',
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                        'Lorem ipsum dolor sit amet, consetetur',
                        'Lorem ipsum dolor'
                        ]}
                    selectedOptions={['Lorem ipsum']}
                    maxSelectedOptions={2}
                    onSelection={(option)=>alert(option + ' was selected!')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        margin: 20
    },
});

export default SampleApp