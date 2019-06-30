import React from 'react';
import {
    Animated,
    Text,
    View,
    ScrollView
} from 'react-native';


//Animated
class FadeInView extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),  // 透明度初始值设为0
    }

    componentDidMount() {
        Animated.timing(                   // 随时间变化而执行动画
            this.state.fadeAnim,            // 动画中的变量值
            {
                toValue: 1,                   // 透明度最终变为1，即完全不透明
                duration: 3000,              // 让动画持续一段时间
            }
        ).start();                        // 开始执行动画
    }

    render() {
        let { fadeAnim } = this.state;
        return (
            <Animated.View                 // 使用专门的可动画化的View组件
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,         // 将透明度指定为动画变量值
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}



//组合动画
/*
* 多个动画可以通过parallel（同时执行）、sequence（顺序执行）、stagger和delay来组合使用。
* 它们中的每一个都接受一个要执行的动画数组，并且自动在适当的时候调用start/stop
* */
class ConbineAnimation  extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            ani1: new Animated.Value(200),
            ani2:new Animated.Value(0)
        }
    }

    /*
    * decay: 以一个初始值开始逐渐减慢至停止，它亦包括两个参数:
    *        velocity:起始速度，不可缺省哦！,
    *        deceleration:速度递减比例，默认值为0.997
    *
    * spring: 弹跳动画，它包括两个参数
    *        friction：摩擦力默认值为7,
    *         tension：张力，默认值为40
    *
    * timing: 渐变动画,它有三个可配置参数
    *        duration:动画持续的时间，默认值为500毫秒,
    *        easing: 定义曲线渐变函数。iOS中默认为Easing.inOut(Easing.ease),
    *        delay: 延迟多少毫秒后执行，默认为0
    * */

    componentDidMount() {
        Animated.sequence([
            Animated.decay(this.state.ani1, {
                velocity: 200,
                deceleration: 0.997,
            }),
            Animated.parallel([
                Animated.spring(this.state.ani1, {
                    toValue: 80,
                }),
                Animated.timing(this.state.ani2, {
                    toValue: 120,
                    delay:1000,
                    duration: 5000
                })
            ])
        ]).start();
    }

    render() {
        let { ani1, ani2} = this.state;
        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    marginTop:ani1,
                    marginLeft:ani2,
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}


//插值动画
//当透明度从0～1时 y的值从150 到 0
class InterpolateAni extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 3000,
            }
        ).start();
    }

    render() {
        let { fadeAnim } = this.state;
        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,
                    transform: [{
                        translateY: this.state.fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
                        }),
                    }],
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}



export  default class AnimationDemo1 extends React.Component{
    static  navigationOptions  = ({navigation}) => ({
        headerTitle: `${navigation.state.params.title}`,
    });

    render() {
        return (
            <ScrollView>
                <View>
                    <InterpolateAni style={{ height: 50, backgroundColor: 'powderblue'}}>
                        <Text style={{fontSize: 28, textAlign: 'center',margin:12}}>InterpolateAnimation</Text>
                    </InterpolateAni>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue',marginTop:50}}>
                        <Text style={{fontSize: 28, textAlign: 'center',margin:12}}>Fading in</Text>
                    </FadeInView>
                </View>
                <View>
                    <ConbineAnimation style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                        <Text style={{fontSize: 28, textAlign: 'center',margin:12}}>conbineAnimation</Text>
                    </ConbineAnimation>
                </View>
                <Text style={{ marginTop:80, fontSize:28 ,padding:15 }}>
                    里面还有很多，可回头细看，写demo，可参考官方demo
                </Text>
            </ScrollView>
        )
    }
}