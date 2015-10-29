import * as React from 'react';
import * as ReactDOM from 'react-dom';
class MyFirst extends React.Component {
    render() {
        return React.createElement("div", null, " Hello ", this.props.name, " ", this.props.zip, React.createElement("div", null, "steps to get this going: ", React.createElement("br", null), "sudo npm i tsd typescript serve -g", React.createElement("br", null), "npm init", React.createElement("br", null), "npm i jspm --save-dev", React.createElement("br", null), React.createElement("br", null), "jspm init (choose typescript as transpiler)", React.createElement("br", null), "jspm install react react-dom", React.createElement("br", null), React.createElement("br", null), "tsd init", React.createElement("br", null), "tsd install react react-dom --save", React.createElement("br", null), React.createElement("br", null), "create : index.html app/main.tsx tsconfig.json", React.createElement("br", null), "transpile main.tsx", React.createElement("br", null), "serve and open localhost:3000", React.createElement("br", null), React.createElement("br", null)));
    }
}
ReactDOM.render(React.createElement(MyFirst, {"name": "hans", "zip": 424242}), document.getElementById("targetreact"));
