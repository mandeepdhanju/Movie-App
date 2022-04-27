import { getYear } from '../utilities/utilities';
function Footer() {
    return (
        <footer className="footer">
        <p className="playing-movies">&copy; {getYear()} Created by Mandy Dhanju</p>
    </footer>
    )
}

export default Footer
