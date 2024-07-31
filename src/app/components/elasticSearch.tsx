import Image from 'next/image'
export default function ElasticSearch() {
    return(
        <section className="elastic-search relative py-20 max-md: py-10" id="services">
            <div className="container elastic-search-content relative z-1 flex flex-col flex-wrap gap-10 md:gap-20">
                <h2 className="title-l text-center">
                    Elastic Search and LLM<br/>
                    <strong>— a powerful combination</strong>
                </h2>
                <div className="title-sm section-descr w-full">
                    Elastic Search's robust data indexing and search capabilities combined with the analytical power of
                    Large Language Models (LLM) offer unparalleled insights into your security data. This combination
                    allows for:
                </div>
                <div className="allows-list grid gap-10 grid-cols-1 md:grid-cols-3">
                    <div className="allows-list-item flex flex-col gap-4 p-4 sm:gap-10 md:p-8">
                        <div className="number">1</div>
                        <div className="title">
                            Real-Time Threat Detection
                        </div>
                        <div className="descr">
                            Quickly identify and respond to security incidents with real-time data analysis.
                        </div>
                    </div>
                    <div className="allows-list-item flex flex-col gap-4 p-4 sm:gap-10 md:p-8">
                        <div className="number">2</div>
                        <div className="title">
                            Enhanced Data Interpretation
                        </div>
                        <div className="descr">
                            LLMs provide deep understanding and context, making sense of complex data patterns and
                            correlations.
                        </div>
                    </div>
                    <div className="allows-list-item flex flex-col gap-4 p-4 sm:gap-10 md:p-8">
                        <div className="number">3</div>
                        <div className="title">
                            Scalable Solutions
                        </div>
                        <div className="descr">
                            Both Elastic Search and LLMs are designed to scale with your business, ensuring consistent
                            performance as your data grows.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}