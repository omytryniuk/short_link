import React from 'react';
import { Links } from '../api/links';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';

export default class LinksList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      links: [],
    };

  }

  renderLinksListItems(){
      return this.state.links.map((link)=>{
        return <p key={link._id}>{link.url} </p>
      })


    this.state.links.map((link)=>{
      return <p key={link._id}>link</p>
    })
  }

  componentDidMount() {
    this.linksTracker = Tracker.autorun(() =>{
        Meteor.subscribe('links');      
        let links = Links.find().fetch();
        this.setState({links});
    });

  }

  componentWillUnmount() {
      this.linksTracker.stop();
  }

  render() {
    return(
      <div>
        <p> Links List </p>
        {this.renderLinksListItems()}
      </div>
    )
  }
}
