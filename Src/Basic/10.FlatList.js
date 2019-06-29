import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    SectionList,
    Button,
} from 'react-native';

export default class FlatListBasics extends Component {
    constructor(props){
       super(props);
       this.state = { isShowFlatList : 'true' }
    };

    static  navigationOptions  = ({navigation}) => ({
        headerTitle: `${navigation.state.params.title}`,
        headerRight:(
            <Button
                title = "点击切换"
                onPress = { navigation.getParam('getIsShowFlatList') }
                //this直接调用是不行的哟(详见：https://reactnavigation.org/docs/zh-Hans/header-buttons.html)
            />
        )
    });

    componentDidMount() {
        //将参数赋值为一个函数 ，此时再次点击按钮的时候就会调用这个函数了
        this.props.navigation.setParams({ getIsShowFlatList: this._makeIsShowFlatList });
    }


    _makeIsShowFlatList =  ()=>{
        this.setState(previousState => {
            return { isShowFlatList: !previousState.isShowFlatList };
        });
    };

    render() {
        if(this.state.isShowFlatList){
            return (
                <View style={styles.container}>
                    {/*分组*/}
                    <SectionList
                        sections={[
                            {title: 'D', data: ['Devin']},
                            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        ]}
                        renderItem={({item}) =>
                            <View>
                                <Text style={styles.item}>{item}</Text>
                                <View style={styles.line}></View>
                            </View>
                        }
                        renderSectionHeader={({section}) =>
                            <Text style={styles.sectionHeader}>{section.title}</Text>
                        }
                        keyExtractor={(item, index) => index}
                    />
                </View>
            )
        }else{
            return (
                <View style={styles.container}>
                    <FlatList
                        data={[
                            {key: 'Devin'},
                            {key: 'Jackson'},
                            {key: 'James'},
                            {key: 'Joel'},
                            {key: 'John'},
                            {key: 'Jillian'},
                            {key: 'Jimmy'},
                            {key: 'Julie'},
                        ]}
                        renderItem={({item}) =>
                            <View>
                                <Text style={styles.item}>{item.key}</Text>
                                <View style={styles.line}></View>
                            </View>
                        }
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 64,
        justifyContent:'center',
        lineHeight:44,
    },
    line:{
        paddingBottom:0,
        paddingLeft:0,
        paddingRight:0,
        height:0.5,
        backgroundColor:'lightgray',
    },
    sectionHeader: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
})

