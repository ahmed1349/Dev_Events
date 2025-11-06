import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>

        <nav>
            <Link href="/" className="logo">
            <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
            <p>DevEvent</p>
            </Link>
            <ul>
            <Link href="/" className="about-link">Home</Link>
            <Link href="/" className="about-link">Events</Link>
            <Link href="/" className="about-link">Create Events</Link>
            </ul>
        </nav>
      
    </header>
  )
}

export default Navbar
