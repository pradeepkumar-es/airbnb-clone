import airBnblogo from '../image/airbnb-logo.png'
export default function Navabar () {
    return (
        <nav>
            <img className='nav-logo' src={airBnblogo} alt="airbnb logo" />
        </nav>
    )
}