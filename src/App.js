import { Route,Switch, Link, BrowserRouter as Router ,useParams} from 'react-router-dom'
import { Books } from './components/Books';
import { Movie } from './components/Movie';
import { MovieQuote } from './components/MovieQuote';
import { Character } from './components/Character';

//import './App.css';

function App() {
  return (
    <Router>
        <div>

            <nav>
                <ul>
                    <li>
                        <Link to='/Books'>Books</Link>
                    </li>
                    <li>
                        <Link to='/Movie'>Movies</Link>
                    </li>
                    <li>
                        <Link to='/MovieQuote/:id'>MovieQuote</Link>
                    </li>
                    <li>
                        <Link to='/Character'>Characters</Link>
                    </li>

                </ul>

            </nav>
         <Switch>



             <Route path='/Books'>
                       <Books/>
                  </Route>
                
                <Route path='/Movie'>
                    <Movie/>
                </Route>
                <Route path='/Movie/:id/quotes'>
                   <MovieQuote/>
                </Route>
                <Route path='/Character'>
                    <Character/>
                </Route>
                

         </Switch>

        </div>
    </Router>

) 
}

export default App;
