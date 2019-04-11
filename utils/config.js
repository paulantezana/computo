module.exports = {
    app : {
        name: 'Chat',
        key: 'Chat',
        description: 'Sistema de mensajería.',
        version: '0.1.5',
        uri: 'https://iestpvilcanota.com',
        facebook: 'https://www.facebook.com/Paulantezana-764145183607069/inbox',
        youtube: 'https://www.youtube.com/channel/UCwnGqfqlVjDxRZJ-pFjP2oQ?view_as=subscriber',
        twitter: 'https://twitter.com/paulantezana',
    
        author: 'PaulAntezana',
        authorUri: 'https://paulantezana.com',
    
        // Certification
        // name: 'Certificación',
        // key: 'certificate',
        // description: 'Sistema de emición de certificaciones modulares',
    },
    
    service : {
        path: 'http://localhost:1323',
        api_path: 'http://localhost:1323/api/v1/public',
        socket: 'ws://localhost:1323/ws',
    },
    
    // export const service = {
    //     path: 'https://institutional-server.herokuapp.com',
    //     api_path: 'https://institutional-server.herokuapp.com/api/v1',
    //     socket: 'wss://institutional-server.herokuapp.com/ws',
    // };
    
    // export const service = {
    //     path: 'https://api.iestpvilcanota.com',
    //     api_path: 'https://api.iestpvilcanota.com/api/v1',
    //     socket: 'wss://api.iestpvilcanota.com/ws',
    // };
}


