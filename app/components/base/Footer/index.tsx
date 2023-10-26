import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-10 bg-black text-base-content">
        <div>
          <Link
            href={'#top'}
            className="inline-flex justify-center items-center"
          >
            <span className="text-white text-xs" aria-hidden={true}>
              ©2023 All right reserved MSK1206
            </span>
          </Link>
        </div>
      </footer>
    </>
  );
}
