import './Header.css'

export default function Header() {
    return (
        <header>
            <span className="logo">Jobian</span>
            <nav>
                <ul className='navlist'>
                    <li>
                        <a href="" title="notification">
                            <img src="/images/bell.svg" alt="notification bell" />
                        </a>
                    </li>
                    <li>
                        <a href="" title="profile" className='profile'>
                            <img src="/src/assets/images/user-circle.svg" alt="user profile" />
                        </a>
                    </li>
                    <li>
                        <a href="" className="employer">
                            Employers
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

// export function Navbar() {
//     return (
//         <nav>
//             <ul className='navbar-list'>
//                 <li className='active'>Jobs</li>
//                 <li>Companies</li>
//                 <li>Create CV</li>
//             </ul>
//         </nav>
//     )
// }

// export function SearchBar() {
//     return (
//        <form action="" id='form'>
//             <div className='form-parent'>
//                 <label htmlFor="position">
//                     <input type="text" name="position" id="position" placeholder='Position' />
//                 </label>
//                 <label htmlFor="location">
//                     <input type="text" name="location" id="location" placeholder='Location' />
//                 </label>
//                 <button type="submit" title='Search'>
//                     <img src="/src/assets/images/search-bar.svg" alt="" />
//                 </button>
//             </div>
//        </form> 
//     )
// }