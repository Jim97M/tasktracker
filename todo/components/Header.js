import Button from './Button'
import {useLocation} from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ({ title, onAdd, showAdd }) => {

    const location = useLocation()

    return (
        <div>
            <header className='header'> 
                <h1>{title}</h1>
                {location.pathname ==='/' && (
                <Button color={showAdd ? 'red': 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} /> )}
            </header>
            
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',

}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// CSS IN JS
/* const HeadingStyle = {
    color: 'black',
    backgroundColor: 'blue',

} */

export default Header;
