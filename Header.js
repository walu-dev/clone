import Image from 'next/image';

function Header() {
    return (
        <header>
           <h1>This is header </h1>
           <Image 
           className='object-contain'
           src= "https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
           width = {200}
           height={100}
           />
        </header>
    )
}

export default Header
//https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg