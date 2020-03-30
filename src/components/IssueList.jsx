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

    async componentDidMount() {
        const githubData = await this.loadData();
    
        this.setState({
          githubData: githubData
        })
    }
    
    render() {
        let issueArray = this.state.githubData;
        console.log("issueArray: ", issueArray);
        return (
          <ul className="IssueListMap">
            {issueArray.length > 0 ? (
              issueArray.map(issue => (
                <li className="IssueListLi" key={issue.user.node_id}>
                  <Issue issue={issue} />
                </li>
              ))
            ) : (
              <li>No Issue Data</li>
            )}
          </ul>
        );
      }
    }
export default IssueList;