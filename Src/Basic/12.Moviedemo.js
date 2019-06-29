import React, { Component } from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";

import ImageView from '../../Tools/ImageView'

var REQUEST_URL =
    "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export  default class movieDemo extends  Component {
    static  navigationOptions = ({navigation}) => ({
        headerTitle: `${navigation.state.params.title}`
    })


    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    data: this.state.data.concat(responseData.movies),
                    loaded: true
                });
            });


        //打印请求的结果（自己看的）
        fetch(REQUEST_URL).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
        }).catch(function(e) {
            console.log("Oops, error");
        });

    }


    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <FlatList
                data={this.state.data}
                renderItem={this.renderMovie}
                style={styles.list}
                keyExtractor={item => item.id}
            />
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <ActivityIndicator/>
                <Text>Loading movies...</Text>
            </View>
        );
    }

    renderMovie({ item }) {
        // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
        // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
        return (
                <TouchableOpacity>
                    <View style={styles.container}>
                        <ImageView
                            source={{ uri: item.posters.thumbnail }}
                            style={styles.thumbnail}
                            placeholderSource={require("../../Assets/zhanwei.jpg")}
                        />

                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.year}>{item.year}</Text>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        padding:15,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 10,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: "left",
    },
    year: {
        textAlign: "left"
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    list: {
        paddingTop: 5,
        paddingBottom:5,
        backgroundColor: "white",
    },
    line:{
        paddingBottom:0,
        paddingLeft:0,
        paddingRight:0,
        height:0.5,
        backgroundColor:'lightgray',
    },
});