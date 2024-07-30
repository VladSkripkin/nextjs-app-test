
export default function Expertise() {
    return(
        <section className="expertise py-20 max-md: py-10">
            <div className="section-header md:pl-20">
                <h2 className="title-m mt-0 mb-8">Our expertise in automation</h2>
                <div className="expertise-descr w-full">
                    We specialize in developing sophisticated automation frameworks using the latest GenAI technologies,
                    seamlessly integrating Splunk and Elastic.
                </div>
                <div className="partners mt-12 md:mt-24 md:pl-16 lg:pl-72">
                    <div className="partners-list grid grid-cols-2 gap-5 sm:grid-cols-4 md:gap-10 lg:gap-20">
                        <div className="logo-item flex justify-center items-center">
                            <Image src="/elastic.png" alt="logo"/>
                        </div>
                        <div className="logo-item flex justify-center items-center">
                            <Image src="/splunk.png" alt="logo"/>
                        </div>
                        <div className="logo-item flex justify-center items-center">
                            <Image src="/gcloud.png" alt="logo"/>
                        </div>
                        <div className="logo-item flex justify-center items-center">
                            <Image src="/aws.png" alt="logo"/>
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