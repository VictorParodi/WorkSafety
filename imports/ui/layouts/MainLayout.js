import { Meteor } from 'meteor/meteor';
import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export const MainLayout = ({content}) => (
    <main>
        {content}
    </main> 
)