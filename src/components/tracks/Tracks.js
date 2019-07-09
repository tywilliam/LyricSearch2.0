import React, { Component } from 'react';
import { Consumer } from '../../context';

class Tracks extends Component {
    render() {
        return (    
           <Consumer>
               {
                   value => {
                       const { track_list } = value;
                       if(track_list === undefined || track_list.length === 0) {
                            return <Spinner />
                       } else {
                        return <h1>Tracks loaded</h1>
                       }
                   }
               }
            </Consumer>             
        );
    }
}

export default Tracks;