'use strict';

import React, { PropTypes } from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ListView
} from 'react-native';

import BaseComponent from './BaseComponent'
import Styles from './styles'

const propTypes = {
    options: React.PropTypes.array.isRequired,
    selectedOptions: React.PropTypes.array,
    maxSelectedOptions: React.PropTypes.number,
    onSelection: React.PropTypes.func,
    renderIndicator: React.PropTypes.func,
    renderSeparator: React.PropTypes.func,
    renderRow: React.PropTypes.func,
    renderText: React.PropTypes.func,
    style: View.propTypes.style,
    optionStyle: View.propTypes.style,
    disabled: PropTypes.bool
};
const defaultProps = {
    options: [],
    selectedOptions: [],
    onSelection(option){},
    style:{},
    optionStyle:{},
    disabled: false
};

class MultipleChoice extends BaseComponent {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true});
        this.ds = ds;

        this.state = {
            dataSource: ds.cloneWithRows(this.props.options),
            selectedOptions: this.props.selectedOptions || [],
            disabled: this.props.disabled
        };

        this._bind(
            '_renderRow',
            '_selectOption',
            '_isSelected',
            '_updateSelectedOptions'
        );
    }

    componentWillReceiveProps(nextProps) {
        this._updateSelectedOptions(nextProps.selectedOptions);
        this.setState({
            disabled: nextProps.disabled
        });
    }
    _updateSelectedOptions(selectedOptions) {
        this.setState({
            selectedOptions,
            dataSource: this.ds.cloneWithRows(this.props.options)
        });
    }

    _validateMaxSelectedOptions() {
        const maxSelectedOptions = this.props.maxSelectedOptions;
        const selectedOptions = this.state.selectedOptions;

        if (maxSelectedOptions && selectedOptions.length > 0 && selectedOptions.length >= maxSelectedOptions) {
            selectedOptions.splice(0, 1);
        }

        this._updateSelectedOptions(selectedOptions);
    }

    _selectOption(selectedOption) {

        let selectedOptions = this.state.selectedOptions;
        const index = selectedOptions.indexOf(selectedOption);

        if (index === -1) {
            this._validateMaxSelectedOptions();
            selectedOptions.push(selectedOption);
        } else {
            selectedOptions.splice(index, 1);
        }

        this._updateSelectedOptions(selectedOptions);

        //run callback
        this.props.onSelection(selectedOption);
    }

    _isSelected(option) {
        return this.state.selectedOptions.indexOf(option) !== -1;
    }

    _renderIndicator(option) {
        if (this._isSelected(option)) {
            if(typeof this.props.renderIndicator === 'function') {
                return this.props.renderIndicator(option);
            }

            return (
                <Image
                    style={Styles.optionIndicatorIcon}
                    source={require('./assets/images/check.png')}
                />
            );
        }
    }

    _renderSeparator(option) {

        if(typeof this.props.renderSeparator === 'function') {
            return this.props.renderSeparator(option);
        }

        return (<View style={Styles.separator}></View>);
    }

    _renderText(option) {

        if(typeof this.props.renderText === 'function') {
            return this.props.renderText(option);
        }

        return (<Text>{option}</Text>);
    }

    _renderRow(option) {

        if(typeof this.props.renderRow === 'function') {
            return this.props.renderRow(option);
        }

        const disabled = this.state.disabled;
        return (

            <View style={this.props.optionStyle}>
                <TouchableOpacity
                    activeOpacity={disabled ? 1 : 0.7}
                    onPress={!disabled ? ()=>{this._selectOption(option)} : null}
                >
                    <View>
                        <View
                            style={Styles.row}
                        >
                            <View style={Styles.optionLabel}>{this._renderText(option)}</View>
                            <View style={Styles.optionIndicator}>{this._renderIndicator(option)}</View>
                        </View>
                    </View>
                </TouchableOpacity>
                {this._renderSeparator(option)}
            </View>
        );
    }

    render() {
        return (
            <ListView
                style={[Styles.list, this.props.style]}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            />
        );
    }
};

MultipleChoice.propTypes = propTypes;
MultipleChoice.defaultProps = defaultProps;

module.exports = MultipleChoice;
