import React from "react"
import Link from "./link"
import PropTypes from "prop-types"
import Pill from "./pill"
import Section from "./section"

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const formatDate = (date) => {
  if (typeof date === "string") {
    return date
  }

  const index = date.getMonth() - 1
  const year = date.getFullYear()

  return months[index] + " " + year
}

// TODO: Fetch this from a CMS.
const jobs = [
  {
    title: "Junior Server Programmer",
    employer: "Kwalee",
    country: "🇬🇧",
    website: "https://www.kwalee.com/",
    startDate: new Date(2018, 2),
    endDate: "Present",
    achievements: [
      "Built a BI tool from the ground up allowing the business to scale from thousands to 20M+ MAU",
      "Developed and maintained the infrastructure serving over 2M concurrent players worldwide",
      "Shipped over 10 games both on Android and iOS",
    ],
    technologies: [
      "Python",
      "Flask",
      "ElasticSearch",
      "Couchbase",
      "AWS",
    ],
  },
]

const Resume = ({ title, className }) => {
  return (
    <Section className={`container ${className}`}>
      <h1 className="text-gray-600 text-sm lg:text-lg mb-3 lg:mb-10">{title}</h1>
      {jobs.map((job, index) => {
        return (
          <article key={index} className="text-white">
            <h1 className="text-lg lg:text-xl font-semibold">{job.title}</h1>
            <h2 className="text-base lg:text-lg mb-4">
              <Link to={job.website} openNewTab={true}>
                {job.country} {job.employer}
              </Link>
            </h2>
            <ul>
              {job.achievements.map((achievement, index) => {
                return <li className="border-solid border-l-2 text-sm lg:text-base pl-2 my-2"
                           key={index}>{achievement}</li>
              })}
            </ul>
            <p
              className="text-gray-600 text-sm lg:text-base">{formatDate(job.startDate)} - {formatDate(job.endDate)}</p>
            <div className="flex flex-wrap mt-6">
              {job.technologies.map((technology, index) => {
                return (
                  <Pill key={index} className="text-xs my-1 lg:my-0 mr-2">
                    <span>
                      {technology}
                    </span>
                  </Pill>
                )
              })}
            </div>
          </article>
        )
      })}
    </Section>
  )
}

Resume.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Resume
