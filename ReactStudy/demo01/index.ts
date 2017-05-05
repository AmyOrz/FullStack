import * as React from "react";
import * as ReactDOM from "react-dom";

export class HelloWorld extends React.Component<any,any>{
    render(){
        return <h1>hello from {this.prop.compiler}</h1>
    }
}

