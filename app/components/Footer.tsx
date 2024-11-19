import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        {/* Copyright Text */}
        <p className="text-sm text-white md:text-base">
          &copy; {new Date().getFullYear()} Minot State University CS Club. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4 md:mt-0">
          {/* GitHub */}
          <a
            href="https://github.com/MSUCSClub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.17-3.37-1.17-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.9 1.55 2.36 1.1 2.93.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.114 2.5.335 1.91-1.29 2.75-1.02 2.75-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.67.92.67 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/school/minot-state-university/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.5-.69-1.5-1.54 0-.861.546-1.54 1.53-1.54.984 0 1.5.679 1.5 1.54 0 .85-.516 1.54-1.53 1.54zm13.5 12.268h-3v-5.604c0-1.364-.487-2.295-1.707-2.295-.928 0-1.482.625-1.726 1.229-.089.216-.111.518-.111.822v5.848h-3s.04-9.495 0-10.5h3v1.49c.396-.611 1.104-1.481 2.688-1.481 1.964 0 3.456 1.28 3.456 4.035v6.456z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/msu_csclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <i className="fab fa-instagram w-6 h-6"></i>
          </a>

          {/* Discord */}
          <a
            href="https://discord.gg/WEdBaCeYsa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <i className="fab fa-discord w-6 h-6"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}