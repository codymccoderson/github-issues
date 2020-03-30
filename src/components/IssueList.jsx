import React, { Component } from 'react';
import Issue from './Issue';

class IssueList extends Component {
    state = {
        githubData: [],
        title: "Github Issues"
    }

    loadData = async () => {
        const response = await fetch("https://api.github.com/repos/facebook/create-react-app/issues");
        const data = await response.json();
        return data;
    }

    handleClick = async () => {
        const newGithubData = await this.loadData();

        this.setState({
            githubData: newGithubData
        })
    }

    async componentDidMount() {
        const githubData = this.loadData();
    
        this.setState({
          githubData: githubData
        })
    }

    githubData(issue) {
        return (
          <ul className="IssueListMap">
            {issue.length > 0 ? (
              issue.map(issue => (
                <li className="IssueListLi" key={issue.node_id}>
                  <Issue issue={issue} />
                </li>
              ))
            ) : (
              <li>No Issue Data</li>
            )}
          </ul>
        );
    };
    
    render() {
        const { issue } = this.state;
    
        return (
          <div className= "IssueList">
            <Issue issue = { issue } />
          </div>
        );
    }

}

export default IssueList;