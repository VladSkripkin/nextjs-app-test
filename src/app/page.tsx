'use client';

import Hero from "@/app/components/hero";
import Expertise from "@/app/components/expertise";
import Why from "@/app/components/why";
import ElasticSearch from "@/app/components/elasticSearch";
import Modules from "@/app/components/modules";
import Slogan from "@/app/components/slogan";

export default function Page() {
    return (
        <div className="content-wrapper pl-4 pr-4">
            <Hero />
            <Expertise />
            <Why />
            <ElasticSearch />
            <Modules />
            <Slogan />
        </div>
    )
}