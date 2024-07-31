import Image from 'next/image'
export default function Why() {
    return(
        <section className="why py-20 max-md: py-10" id="approach">
            <div className="container">
                <h2 className="title-m m-0">Why choose us?</h2>
                <div className="features grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 md:gap-10 lg:gap-20 lg:mt-24">
                    <div className="features-item">
                        <div className="icon">
                            <Image src="/why-1.svg"
                                   width={88}
                                   height={88}
                                   alt="icon"/>
                        </div>
                        <div className="content">
                            <div className="title-sm title">Advanced Automation</div>
                            <div className="text">
                                Leverage the power of AI to automate complex security tasks, reducing manual effort and
                                minimizing human error.
                            </div>
                        </div>
                    </div>

                    <div className="features-item">
                        <div className="icon">
                            <Image src="/why-2.svg"
                                   width={88}
                                   height={88}
                                   alt="icon"/>
                        </div>
                        <div className="content">
                            <div className="title-sm title">Leveraging Large Language
                                Models (LLM)
                            </div>
                            <div className="text">
                                Our automated frameworks ensure your organization remains compliant with the latest
                                regulations, mitigating risks and safeguarding your reputation.
                            </div>
                        </div>
                    </div>

                    <div className="features-item">
                        <div className="icon">
                            <Image src="/why-3.svg"
                                   width={88}
                                   height={88}
                                   alt="icon"/>
                        </div>
                        <div className="content">
                            <div className="title-sm title">SAST/DAST Scanning</div>
                            <div className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>

                    <div className="features-item">
                        <div className="icon">
                            <Image src="/why-4.svg"
                                   width={88}
                                   height={88}
                                   alt="icon"/>
                        </div>
                        <div className="content">
                            <div className="title-sm title">Compliance Governance</div>
                            <div className="text">
                                Our automated frameworks ensure your organization remains compliant with the latest
                                regulations, mitigating risks and safeguarding your reputation.
                            </div>
                        </div>
                    </div>

                    <div className="features-item">
                        <div className="icon">
                            <Image src="/why-5.svg"
                                   width={88}
                                   height={88}
                                   alt="icon"/>
                        </div>
                        <div className="content">
                            <div className="title-sm title">DevSecOps</div>
                            <div className="text">
                                Integrate security seamlessly into your development lifecycle with our DevSecOps
                                approach, enhancing collaboration and delivering robust, secure applications faster.
                            </div>
                        </div>
                    </div>

                    <div className="features-item">
                        <div className="icon">
                            <Image src="/why-6.svg"
                                   width={88}
                                   height={88}
                                   alt="icon"/>
                        </div>
                        <div className="content">
                            <div className="title-sm title">Vulnerability Management</div>
                            <div className="text">
                                Proactively manage and remediate vulnerabilities with our comprehensive solution, ensuring your systems remain secure and resilient against emerging threats.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}