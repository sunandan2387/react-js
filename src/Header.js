import React, { Component } from "react";
import ReactSearchBox from "react-search-box";


function header() {
return (
      <div className="header">
        <ReactSearchBox
        placeholder="customer name"
        value="Doe"
        data={this.data}
        callback={(record) => console.log(record)}
      />
      </div>
  );
  }
  
  export default header;