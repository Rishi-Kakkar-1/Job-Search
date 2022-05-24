import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Job Search</h1>
      <h3>Search the company you want jobs for</h3>
      <form>
        <label>
          Company:&nbsp;
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
