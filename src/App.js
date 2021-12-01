import { Route, Switch, Link, BrowserRouter as Router, useParams } from 'react-router-dom'
import { Books } from './components/Books';
import { Movie } from './components/Movie';
import { MovieQuote } from './components/MovieQuote';
import { Character } from './components/Character';
import {Movies} from './components/MovieFilter'
function App() {

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/MovieFilter'>MovieFilter</Link>
                        </li>
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
                <Route path='/MovieFilter'>
                        <Movies />
                    </Route>
                    <Route path='/Books'>
                        <Books />
                    </Route>

                    <Route path='/Movie'>
                        <Movie />
                    </Route>
                    <Route path='/MovieQuote/:id'>
                        <MovieQuote />
                    </Route>
                    <Route path='/Character'>
                        <Character />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
