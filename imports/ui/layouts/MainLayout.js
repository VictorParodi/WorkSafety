import { Meteor } from 'meteor/meteor';
import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export const MainLayout = ({topContent, content, bottomContent}) => (
    <div>
        <heder>
            {topContent}
        </heder>

        <main>
            {content}
        </main> 

        <footer>
            {bottomContent}
        </footer>
    </div>
)