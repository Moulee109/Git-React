import Student from "./Components/Student";
function App() {
  var sname="Moulee"
  var sroll="109"
  return (
    <>
        <Student name = {sname} roll={sroll}/>
    </>
  );
}

export default App;