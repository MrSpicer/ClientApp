import logo from './logo.svg';
import './App.css';
import 'bulma'

function App() {
  return (
    <div className="App">
      <section class="hero is-medium is-primary">
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-8-desktop is-offset-2-desktop">
                <h1 class="title is-2 is-spaced">
                  Bulma
              </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-8-desktop is-offset-2-desktop">
              <div class="content">
                Content goes here
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer has-text-centered">
        <div class="container">
          <div class="columns">
            <div class="column is-8-desktop is-offset-2-desktop">
              Feet
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


