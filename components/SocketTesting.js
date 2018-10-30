import React from 'react'
import SocketIOClient from 'socket.io-client'
import { View, Text} from 'react-native'

class SocketTesting extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: ['Hi there', 'This is a chat', 'Oh no']
        }
        this.socket = SocketIOClient('http://localhost:3000')
    }

    componentDidMount() {
        this.socket.on('message', (message) => {
            this.setState({ messages: message})
        })
        this.socket.emit('New user joined', null)
    }

    render() {
        const chats = this.state.messages.map(message => <Text>{message}</Text>)
        return(
            <View>
                {chats}
            </View>
        )
    }
}

export default SocketTesting