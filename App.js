const heading2 = React.createElement(
    "h1", 
    {id: "heading"}, 
    "Hello World from React!"
);
console.log(heading2); //object
const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(heading2);



/**
 * 
 * <div id="Parent">
 *      <div id="child">
 *          <h1>I am H1 tag!</h1>
 *      </div>  
 * </div>
 * 
 */
    const parent = 
    React.createElement(
        "div", {id: "parent"}, 
            [React.createElement("div", {id: "child"}, 
                [
                    React.createElement("h1", {id: "child1", key: "h1"}, "I am H1 tag."),
                    React.createElement("h2", {id: "child2", key: "h2"}, "I am H2 tag.")
                ]
            ),
            React.createElement("div", {id: "child"}, 
                [
                    React.createElement("h1", {id: "child1", key: "h1"}, "I am H1 tag."),
                    React.createElement("h2", {id: "child2", key: "h2"}, "I am H2 tag.")
                ]
            )]
    );


    rootReact.render(parent);