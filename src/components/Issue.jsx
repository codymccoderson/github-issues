import React from 'react';

const Issue = props => {

    const { issue } = props;

    return (
        <div className="Issue">
            <div className="IssueInfoHolder">
            <p>{issue.title}</p>
            <p>{issue.url}</p>
            <p>{issue.body}</p>
            </div>
        </div>
    );
}

export default Issue;