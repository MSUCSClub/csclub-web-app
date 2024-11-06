import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <html lang="eng">
      
        
          <link rel="icon" href="CSimage.jpg" />
          <header className="text-center row-start-1 text-5xl font-bold my-4">
            Welcome to CS Club Website!
          </header>

          <nav>
      <ul>
        <li>
          <Link href="/about">
              About Us
          </Link>
        </li>
      </ul>
    </nav>
        

        
          
          

          
    </html>
  );
}
