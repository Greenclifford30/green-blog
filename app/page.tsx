'use client'
// pages/index.tsx

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Home: React.FC = () => {
  // Default dark mode enabled (you can adjust or persist this preference)
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <Head>
          <title>Clifford Green | Cloud Engineer & Developer</title>
          <meta
            name="description"
            content="Clifford Green's personal portfolio and resume highlighting his career, projects, and accomplishments as a Cloud Engineer and Developer."
          />
        </Head>

        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="container mx-auto py-6 px-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Clifford Green
            </h1>
            <button
              onClick={toggleDarkMode}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded"
            >
              Toggle {darkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to My Portfolio
            </h2>
            <p className="text-lg md:text-xl mb-8">
            Engineering Cloud Solutions That Empower Business Innovation.
            </p>
            <a
              href="#contact"
              className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {/* About Me Section */}
          <section className="mb-12">
  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
    About Me
  </h2>
  <div className="flex flex-col md:flex-row items-center">
    <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg flex-shrink-0">
    <Image
                  src="/profile.jpg"
                  alt="Profile photo of Clifford Green"
                  layout="fill"
                  objectFit="cover"
                />
    </div>
    <p className="mt-6 md:mt-0 md:ml-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
    As a Cloud Engineer, I am passionate about building innovative solutions that empower businesses to meet their evolving needs. Over the course of my career, I have worn many hats—from working with legacy systems using COBOL to leading enterprise transitions to SaaS-based tools like Salesforce. I've collaborated on designing and building APIs that deliver critical data consistently, and I have played a key role in establishing microservice architectures that enable teams to access legacy data in a modern, scalable way.

As technology evolved and cloud computing became integral to daily operations, I shifted my focus to crafting robust infrastructure solutions for enterprises. Recently, I have been instrumental in lifting and shifting DevOps tools into containerized environments using AWS EKS and ECS, all while honing cost-effective management strategies. I have also led the development of internal tools designed to streamline business processes, working closely with architects to build modern cloud solutions from the ground up.

My journey—from legacy systems to cutting-edge cloud technologies—demonstrates my ability to adapt, innovate, and drive digital transformation. I am dedicated to leveraging my diverse experience to create scalable, efficient solutions that empower businesses to thrive in today’s digital-first world.
    </p>
  </div>
</section>

          {/* Professional Experience Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {/* Cloud Engineer Role */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Ameren, St. Louis
                </h3>
                <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                  Cloud Engineer | Jan 2022 – Present
                </p>
                <ul className="space-y-2">
                  {[
                    "Performed enterprise migrations of DevOps tools across multiple AWS accounts—transforming infrastructure from classic EC2s to containerized deployments in EKS using Helm and managing state with Terraform.",
                    "Migrated tools including JFrog Artifactory (serving over 500k artifacts) and implemented processes for seamless upgrades.",
                    "Successfully migrated CloudBees Core Jenkins—with multiple controllers and legacy data—to a new AWS account.",
                    "Transformed Atlassian products into two containerized deployments on EKS for Confluence and Jira, serving an enterprise of 10,000+ users.",
                    "Migrated SonarQube to an ECS Fargate solution.",
                    "Consolidated RDS databases into an Aurora Cluster, reducing overall costs by up to 20–30%.",
                    "Upgraded and migrated GitHub Enterprise.",
                    "Implemented Grafana monitoring for EKS applications with alerting.",
                    "Reduced costs and increased performance across the new infrastructure."
                  ].map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-xl text-blue-500 mr-3">•</span>
                      <span className="text-lg text-gray-700 dark:text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mulesoft Developer Role */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Mulesoft Developer
                </h3>
                <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                  Jan 2017 – Dec 2022
                </p>
                <ul className="space-y-2">
                  {[
                    "Designed RAML specs and built APIs using API kit.",
                    "Developed reusable DataWeave scripts to streamline common use cases.",
                    "Defined CI/CD processes using Jenkins, Maven, and GitHub.",
                    "Managed APIs with Anypoint API Manager and implemented OAuth policies.",
                    "Led API design meetings and collaborated on requirements gathering.",
                    "Created Pub/Sub APIs supporting CRUD operations in Salesforce.",
                    "Upgraded Mule APIs from 3.8.4 to 4.x.x runtime.",
                    "Developed batch processes to migrate on-premise data to Salesforce.",
                    "Migrated APIs from on-premise Mulesoft instances to CloudHub."
                  ].map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-xl text-blue-500 mr-3">•</span>
                      <span className="text-lg text-gray-700 dark:text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Software Developer Role */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Software Developer I
                </h3>
                <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                  2015 – 2017
                </p>
                <ul className="space-y-2">
                  {[
                    "Developed applications to support Meter-to-Cash workflows, processing large volumes of data.",
                    "Migrated legacy applications from VB.NET to C#.",
                    "Participated in server upgrade projects from Microsoft 2008 to 2012.",
                    "Assisted in migrating and validating applications for new server environments."
                  ].map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-xl text-blue-500 mr-3">•</span>
                      <span className="text-lg text-gray-700 dark:text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>


          {/* Skills & Certifications Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Skills & Certifications
            </h2>
            <div className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                <strong>Skills:</strong> Mulesoft, Jenkins, Splunk, C#, C, PHP, HTML5, CSS, JavaScript, Object-Oriented Programming, PostgreSQL, SQL, MySQL, Python, Terraform
              </p>
              <p>
                <strong>Certifications:</strong> AWS Cloud Practitioner, Mulesoft Certified Developer
              </p>
            </div>
          </section>

          {/* Certifications & Proficiencies Badges Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Certifications & Proficiencies
            </h2>
            <div className="flex flex-wrap">
              {[
                { label: "AWS Cloud Practitioner", bg: "bg-blue-500" },
                { label: "Mulesoft Certified Developer", bg: "bg-green-500" },
                { label: "Jenkins", bg: "bg-red-500" },
                { label: "Splunk", bg: "bg-yellow-500" },
                { label: "Terraform", bg: "bg-purple-500" }
              ].map((badge, i) => (
                <span key={i} className={`${badge.bg} text-white px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2`}>
                  {badge.label}
                </span>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer id="contact" className="bg-white dark:bg-gray-800 shadow mt-12">
          <div className="container mx-auto py-4 px-4 text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Clifford Green. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};


export default Home;
