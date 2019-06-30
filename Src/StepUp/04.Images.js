import  React,{Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    Button,
    Text,
    ImageBackground,
} from 'react-native'


export  default  class Images extends  Component{
    constructor(props){
        super(props);
        this.state  = { isActive : 'true' }
    }

    static  navigationOptions  = ({navigation}) => ({
        headerTitle: `${navigation.state.params.title}`,
        headerRight:(
            <Button
                title = "点击切换"
                onPress = { navigation.getParam('getIsActive') }
                //this直接调用是不行的哟(详见：https://reactnavigation.org/docs/zh-Hans/header-buttons.html)
            />
        )
    });

    componentDidMount() {
        //将参数赋值为一个函数 ，此时再次点击按钮的时候就会调用这个函数了
        this.props.navigation.setParams({ getIsActive: this._makeIsActive });
    }

    _makeIsActive =  ()=>{
        this.setState(previousState => {
            return { isActive: !previousState.isActive };
        });
    };

    render() {
        const iconSource = this.state.isActive? require('../../Assets/zhanwei.jpg') :  require('../../Assets/MineTabIcon.png');
        return(
            /*背景图片与嵌套写法*/
                <ImageBackground source={{ uri:'http://www.jituwang.com/uploads/allimg/111230/2257-11123011404089.jpg'}} style={{width: '100%', height: '100%'}}>

                    <Image
                    style={styles.image1}
                    source={require('../../Assets/zhanwei.jpg')} />

                    <Image
                        style={styles.image1}
                        source = { iconSource } />

                    {/*网络图片:需要手动指定图片的尺寸*/}
                    <Image source={{uri: 'http://img.mp.itc.cn/upload/20160507/bc2167591044462f9d4f9cc2ce54299a_th.jpg'}}
                           style={{width: 120, height: 120,  alignSelf: 'center'}} />


                    {/*网络图片的请求参数 */}
                    <Image
                        source={{
                            uri: 'https://facebook.github.io/react/logo-og.png',
                            method: 'POST',
                            headers: {
                                Pragma: 'no-cache',
                            },
                            body: 'Your Body goes here',
                        }}
                        style={{width: 120, height: 120,  alignSelf: 'center'}}
                    />

                    {/*Uri 数据图片:可能拿到的是图片的 base64 数据,需要手动指定图片的尺寸*/}
                    <Image
                        style={{
                            width: 51,
                            height: 51,
                            resizeMode: 'contain',
                            alignSelf: 'center',
                        }}
                        source={{
                            uri:
                                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                        }}
                    />

                    {/*缓存控制（仅 iOS）*/}
                    {/*default: 使用原生平台默认策略。*/}
                    {/*reload: URL 的数据将从原始地址加载。不使用现有的缓存数据。*/}
                    {/*force-cache: 现有的缓存数据将用于满足请求，忽略其期限或到期日。如果缓存中没有对应请求的数据，则从原始地址加载。*/}
                    {/*only-if-cached: 现有的缓存数据将用于满足请求，忽略其期限或到期日。如果缓存中没有对应请求的数据，则不尝试从原始地址加载，并且认为请求是失败的。*/}

                    <Image
                        source={{
                            uri: 'http://pic13.nipic.com/20110409/7119492_114440620000_2.jpg',
                            cache: 'default',
                        }}
                        style={{width: 120, height: 120,alignSelf:'center',marginTop: 10}}
                    />

                </ImageBackground>
        )
    }
}

const  styles = StyleSheet.create({
    image1:{
        marginTop:20,
        alignSelf:'center',
        height:120,
        width:120,
    }
})
