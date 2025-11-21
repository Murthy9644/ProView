

export default function Logo(){

    return (
        <a className="flex items-center gap-2" href="#">
            <svg
                className="logoIcon"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M2.2 12.89a11.95 11.95 0 0 1 19.6-2.21"></path>
                <path d="M21.8 11.11A11.95 11.95 0 0 1 2.2 13.32"></path>
                <path d="M12 2a10 10 0 0 0-9.04 14.13"></path>
                <path d="M12 22a10 10 0 0 0 9.04-14.13"></path>
            </svg>
        </a>
    );
}