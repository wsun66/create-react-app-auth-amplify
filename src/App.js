import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth, Storage } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isDownloaded: false};

        this.downloadFile = this.downloadFile.bind(this);
    }

  downloadFile(){
        const key = "inboundFax/2020-11-4/fax_attachment_8768251004.pdf";
        Storage.get(key).then(function (data) {
            console.log(`The signed URL: ${data}`);
            const a = document.createElement('a');
            a.href = data;

        }, function (err) {
            console.error(`Got error: ${err}`);
        });// get key from Storage.list

    console.log("download file is called");
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button onClick={this.downloadFile}>
            {this.state.downloadFile ? 'YES' : 'NOT YET'}
        </button>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
