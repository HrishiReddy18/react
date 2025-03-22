{
  /* <div id="parent">
  <div id="child1">
    <h1></h1>
    <h2></h2>
  </div>
  <div id="child2">
    <h1></h1>
    <h2></h2>
  </div>
</div>; */
}
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "1st h1"),
    React.createElement("h2", {}, "1st h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "2nd h1"),
    React.createElement("h2", {}, "2nd h2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root1"));
console.log(parent);
root.render(parent);
