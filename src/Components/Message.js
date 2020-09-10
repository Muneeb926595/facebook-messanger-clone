import React, { forwardRef } from 'react';
import './message.css'
import { Card, CardContent, Typography } from '@material-ui/core';

const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__user__card" : "message__guest__card"}>
                <CardContent>
                    <Typography
                        color='white'
                        varient='h5'
                        component='h2'
                    >
                        {!isUser && `${message.username || 'Unknown User'} :`} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message;