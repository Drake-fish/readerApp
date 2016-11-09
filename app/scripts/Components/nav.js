import React from 'react';
import Document from './Document';

export default React.createClass({
  render(){
    console.log(this.props);
    let docList=this.props.documents.map((doc,i)=>{
      return <li key={i}><a href={'#doc/'+ i}>{doc.name}</a></li>;
    });
    return(
      <ul>
        {docList}
      </ul>
    );
  }
});
