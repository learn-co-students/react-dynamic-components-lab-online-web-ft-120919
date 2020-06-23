//your code here
import React, { Component } from 'react'; 

export default class Comment extends Component {
    render() {
        commentText = () => {
            return (
            <div>
                "poop"
            </div>
            )
        }
        return (
        <div>
            { this.prop.commentText() }
        </div>
        );
    }
}
