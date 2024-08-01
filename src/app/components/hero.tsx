import Image from 'next/image';
export default function Hero() {
    return(
        <div className="hero h-dvh">
            <div className="container h-full relative z-10 flex flex-col justify-center items-center">
                <h1 className="hero-title text-center m-0">
                    Efficiency comes with<br/>
                    <strong>automation</strong>
                </h1>
                <div className="hero-subtitle text-center mt-4">
                    In today's dynamic digital landscape, efficient security operations are crucial for organizational success and resilience. Cutting-edge automation transforms compliance governance and risk assessment.
                </div>
                <div className="hero-bottom flex flex-col justify-center items-center gap-3 mt-10">
                    <a className="btn flex justify-center items-center h-14" href="#contact">
                        Get started
                    </a>
                    <div className="hero-since flex flex-row justify-center items-center gap-2">
                        <p>Pushing the limits since 2013</p>
                        <Image src="/icon-since.svg" alt="since" width={18} height={14}/>
                    </div>
                </div>
            </div>
        </div>
    )
}