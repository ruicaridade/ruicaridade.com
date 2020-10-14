import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Resume from "../components/resume";
import Footer from "../components/footer";

const jobs = [
  {
    title: "Junior Server Programmer",
    employer: "Kwalee",
    country: "🇬🇧",
    website: "https://www.kwalee.com/",
    startDate: new Date(2018, 2),
    endDate: "Present",
    achievements: [],
    technologies: ["Python", "Flask", "ElasticSearch", "Couchbase", "AWS"],
  },
];

const freelance = [
  {
    title: "Stand Carvalho",
    employer: "standcarvalho.pt",
    country: "🇵🇹",
    website: "https://standcarvalho.pt",
    startDate: new Date(2020, 4),
    endDate: new Date(2020, 5),
    achievements: [],
    technologies: ["React", "Gatsby", "Strapi", "Netlify", "PostgreSQL"],
  },
];

const IndexPage = () => (
  <Layout>
    <Hero />
    <Resume items={jobs} className="lg:mt-10" title="Experience" />
    <Resume items={freelance} className="lg:mt-40" title="Freelance" />
    <Footer />
  </Layout>
);

export default IndexPage;
