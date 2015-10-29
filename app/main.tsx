/// <reference path="../typings/tsd.d.ts" />
import * as React from 'react';
import * as ReactDOM  from 'react-dom';
import * as _ from 'lodash';
interface MyFirstProps {
  name: string;
  zip: number;
}
class MyFirst extends React.Component<MyFirstProps,{}>{
  render (){
    return <div> Hello {this.props.name} {this.props.zip}
    <div>steps to get this going: <br/>
    sudo npm i tsd typescript serve -g<br/>
    npm init<br/>
    npm i jspm --save-dev<br/>
    <br/>
    jspm init (choose typescript as transpiler)<br/>
    jspm install react react-dom<br/>

    <br/>
    tsd init<br/>
    tsd install react react-dom --save<br/>

    <br/>
    create : index.html app/main.tsx tsconfig.json<br/>
    transpile main.tsx<br/>
    serve and open localhost:3000<br/>
    <br/>

    </div></div>
  }
}
ReactDOM.render(<MyFirst name="hans" zip={424242}/> , document.getElementById("targetreact"));
