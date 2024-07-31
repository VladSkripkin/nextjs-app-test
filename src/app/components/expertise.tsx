import Image from 'next/image';

export default function Expertise() {
    return(
        <section className="expertise py-20 max-md: py-10">
            <div className="container">
                <h2 className="title-m mt-0 mb-8">Our expertise in automation</h2>
                <div className="expertise-descr w-full">
                    We specialize in developing sophisticated automation frameworks using the latest GenAI technologies,
                    seamlessly integrating Splunk and Elastic.
                </div>
                <div className="partners mt-12 md:mt-24 md:pl-16 lg:pl-64">
                    <div className="partners-list grid grid-cols-2 gap-5 sm:grid-cols-4 md:gap-10 lg:gap-20">
                        <div className="logo-item flex justify-center items-center">
                            <Image src="/elastic.png"
                                   width={224}
                                   height={76}
                                   alt="logo"/>
                        </div>
                        <div className="logo-item flex justify-center items-center">
                            <Image src="/splunk.png"
                                   width={226}
                                   height={66}
                                   alt="logo"/>
                        </div>
                        <div className="logo-item flex justify-center items-center">
                            <Image src="/gcloud.png"
                                   width={269}
                                   height={42}
                                   alt="logo"/>
                        </div>
                        <div className="logo-item flex justify-center items-center">
                            <Image src="/aws.png"
                                   width={118}
                                   height={71}
                                   alt="logo"/>
                        </div>
                    </div>
                    <div className="expertise-descr partners-descr w-full mt-12 md:mt-24">
                        Our solutions empower businesses to streamline their security operations, enhance efficiency,
                        and ensure robust compliance with ever-evolving regulatory requirements.
                    </div>
                </div>
            </div>
        </section>
    )
}