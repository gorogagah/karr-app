import Image from 'next/image';
import Link from "next/link";
import Form from './form';

export const metadata = { title: 'Masuk' };

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen pt:mt-0">
            <Link href="/" className="flex items-end justify-center mb-8 lg:mb-10 dark:text-white">
                <Image src="/logo-mini.svg" className="h-11 mb-1.5 mr-1.5" width={44} height={44} alt="KARR Logo" />
                <span className='text-5xl font-semibold'>arr</span>
            </Link>
            <Form />
        </div>
    );
}