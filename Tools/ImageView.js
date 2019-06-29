import React from 'react';
import {Image, StyleSheet, View, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';

class ImageView extends React.PureComponent {
    static propTypes = {
        source: PropTypes.object,
        style: ViewPropTypes.style,
        placeholderSource: PropTypes.number.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    render() {
        // onLoad(function）:当图片加载成功后，回调该方法
        // onLoadStart（function）:当图片开始加载的时候调用该方法
        // onLoadEnd(function）:当图片加载失败回调该方法，不会管图片加载成功还是失败
        // onLayout（function）:当 Image 布局发生变化会调用该方法，调用代码
        return (
            <View style={this.props.style}>
                <Image style={[this.props.style, styles.imageStyle]} source={this.props.source} onLoad={() => this.setState({loading: false})}/>
                {this.state.loading ? <Image style={[this.props.style, styles.imageStyle]} source={this.props.placeholderSource}/> : null}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    imageStyle: {position: 'absolute', top: 0, right: 0, left: 0, bottom: 0}
});

export default ImageView;