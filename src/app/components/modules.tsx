
export default function Modules() {
    return(
        <section className="modules py-20 max-md: py-10">
            <div className="modules-content">
                <h2 className="title-l text-center">
                    GenAI Modules<br/>
                    <strong>in security and process automation</strong>
                </h2>
                <div className="title-sm section-descr w-full mt-8 md:mt-16">
                    Our GenAI modules are at the forefront of security and process automation, providing innovative solutions tailored to your needs. Key features include:
                </div>

                <div className="modules-list mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                    <div className="modules-list-item flex flex-col py-5 px-4 md:py-10 px-8">
                        <div className="icon">
                            <Image src="/module-icon-1.png" alt="modules icon"/>
                        </div>
                        <div className="title-sm mt-6">
                            AI-Driven Security Monitoring
                        </div>
                        <div className="descr mt-8">
                            Our GenAI modules continuously monitor and analyze network traffic, detecting suspicious
                            activities and potential threats with unprecedented accuracy.
                        </div>
                    </div>
                    <div className="modules-list-item flex flex-col py-5 px-4 md:py-10 px-8">
                        <div className="icon">
                            <Image src="/module-icon-2.png" alt="modules icon"/>
                        </div>
                        <div className="title-sm mt-6">
                            Automated Incident Respons
                        </div>
                        <div className="descr mt-8">
                            GenAI-powered automation enables rapid incident response, executing predefined actions to
                            mitigate threats and minimize damage.
                        </div>
                    </div>
                    <div className="modules-list-item flex flex-col py-5 px-4 md:py-10 px-8">
                        <div className="icon">
                            <Image src="/module-icon-3.png" alt="modules icon"/>
                        </div>
                        <div className="title-sm mt-6">
                            Predictive Analysis
                        </div>
                        <div className="descr mt-8">
                            Utilize GenAI to predict potential security breaches and vulnerabilities, allowing proactive
                            measures to strengthen your defenses.
                        </div>
                    </div>
                    <div className="modules-list-item flex flex-col py-5 px-4 md:py-10 px-8">
                        <div className="icon">
                            <Image src="/module-icon-4.png" alt="modules icon"/>
                        </div>
                        <div className="title-sm mt-6">
                            Process Optimization
                        </div>
                        <div className="descr mt-8">
                            Automate routine processes and workflows, freeing up valuable resources and enhancing
                            overall operational efficiency.
                        </div>
                    </div>
                    <div className="modules-list-item flex flex-col py-5 px-4 md:py-10 px-8">
                        <div className="icon">
                            <Image src="/module-icon-5.png" alt="modules icon"/>
                        </div>
                        <div className="title-sm mt-6">
                            Dynamic Threat Intelligence
                        </div>
                        <div className="descr mt-8">
                            GenAI modules aggregate and analyze threat intelligence from multiple sources, providing real-time updates and actionable insights to stay ahead of emerging threats.
                        </div>
                    </div>
                    <div className="modules-list-item py-5 px-4 md:py-10 px-8 flex items-center justify-center">
                        <div className="modules-decor">
                            <Image src="/circle-decor.svg" alt="decor"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}