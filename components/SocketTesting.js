import React from 'react'
import openSocket from 'socket.io-client'
import { View, Text, Button } from 'react-native'
const socket = openSocket('http://192.168.1.62:4000')


class SocketTesting extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: ['Hi there', 'This is a chat', 'Oh no']
        }
    }

    componentDidMount() {
        console.log('------------ SocketTesting has mounted', socket)
        socket.on('message', (message) => {
            console.log('------------ message', message)
            let newArr = []
            newArr.push(message.text)
            this.setState({ messages: newArr })
        })
    }

    sayHiToServer = () => {
        socket.emit('greeting', 'Hello there server')
    }

    render() {
        const chats = this.state.messages.map(message => <Text>{message}</Text>)
        return(
            <View>
                {chats}
                <Button onPress={this.sayHiToServer} title='Say hi to server' />
            </View>
        )
    }
}

export default SocketTesting