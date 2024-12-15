'use client';

export default function Button() {
    return (
        <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#"
            onClick={(e) => {
                e.preventDefault();
                const info = {
                    hello: 'world'
                }
                console.log(info);
            }}
        >
            Trigger debugger
        </a>
    )
}
