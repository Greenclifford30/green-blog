'use client'
// pages/index.tsx

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../public/profile.jpg'

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
            content="Clifford Green's personal blog and resume highlighting his career, projects, and accomplishments as a Cloud Engineer and Developer."
          />
        </Head>

        {/* Header with Dark Mode Toggle */}
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

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* About Me Section with Profile Photo */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              About Me
            </h2>
            <div className="mt-4 flex flex-col md:flex-row items-center">
              <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={profilePic}
                  alt="Profile photo of Clifford Green"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="mt-4 md:mt-0 md:ml-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a Cloud Engineer with extensive experience migrating and managing cloud infrastructure,
                developing APIs, and automating workflows. My passion lies in building scalable, secure, and
                efficient cloud solutions using technologies such as AWS, Terraform, and Mulesoft.
              </p>
            </div>
          </section>

          {/* Professional Experience (Resume Highlights) Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Professional Experience
            </h2>
            <div className="mt-6 space-y-8">
              {/* Updated Cloud Engineer Role */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Ameren, St. Louis
                </h3>
                <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                  Cloud Engineer | Jan 2022 – Present
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Performed enterprise migrations of DevOps tools across multiple AWS accounts—transforming infrastructure from classic EC2s to containerized deployments in EKS using Helm and managing state with Terraform.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Migrated tools including JFrog Artifactory (serving over 500k artifacts) and implemented processes for seamless upgrades in the new environment.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Successfully migrated CloudBees Core Jenkins—with multiple controllers and legacy data—to a new AWS account.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Transformed Atlassian products into two containerized deployments on EKS for Confluence and Jira, serving an enterprise of 10,000+ users.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Migrated SonarQube to an ECS Fargate solution.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Consolidated RDS databases from the source account into an Aurora Cluster, reducing overall database costs by up to 20–30%.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Upgraded and migrated GitHub Enterprise.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Implemented Grafana monitoring for EKS applications and set up alerts to monitor tool performance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Reduced costs and increased performance of all tools on the new infrastructure.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Mulesoft Developer Role */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Mulesoft Developer
                </h3>
                <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                  Jan 2017 – Dec 2022
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Designed RAML specs and built APIs using API kit.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Developed reusable DataWeave scripts to streamline common use cases.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Defined CI/CD processes using Jenkins, Maven, and GitHub to optimize development.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Managed APIs with Anypoint API Manager and implemented OAuth policies.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Led API design meetings and collaborated on requirements gathering.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Created Pub/Sub APIs supporting CRUD operations in Salesforce.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Upgraded Mule APIs from 3.8.4 to 4.x.x runtime.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Developed batch processes to migrate on-premise data to Salesforce.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Migrated APIs from on-premise Mulesoft instances to CloudHub.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Software Developer Role */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Software Developer I
                </h3>
                <p className="italic text-gray-700 dark:text-gray-300 mb-4">
                  2015 – 2017
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Developed applications to support Meter-to-Cash workflows, processing large volumes of data.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Migrated legacy applications from VB.NET to C#.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Participated in server upgrade projects from Microsoft 2008 to 2012.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl text-blue-500 mr-3">•</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      Assisted in migrating and validating applications for new server environments.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              {/* Project Card 1: Internal Skills Evaluation Tool */}
              <div className="bg-white dark:bg-gray-800 rounded shadow overflow-hidden">
                <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-700 dark:text-gray-300">Image Placeholder</span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Internal Skills Evaluation Tool
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    As a contract engineer in a team of three, I led the infrastructure build for an internal single-page application designed to evaluate coworker skills to better align business project needs. I architected a stack comprising AWS API Gateway, RDS, CloudFront, and S3 static hosting, built Lambda functions in Python, and implemented AWS Step Functions to facilitate business processes.
                  </p>
                </div>
              </div>

              {/* Project Card 2: Cloud-Native Transformation for Architects' Tool */}
              <div className="bg-white dark:bg-gray-800 rounded shadow overflow-hidden">
                <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-700 dark:text-gray-300">Image Placeholder</span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Cloud-Native Transformation for Architects' Tool
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    I played a key role in transforming an internal tool used by Architects into a cloud-native solution. This involved setting up Temporal in EKS using Helm, configuring authentication via Azure, and building API Gateway along with Authorizers to authenticate traffic while collaborating with a UI team to integrate business processes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills & Certifications Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Skills & Certifications
            </h2>
            <div className="mt-4 text-gray-700 dark:text-gray-300">
              <p className="mb-2">
                <strong>Skills:</strong> Mulesoft, Jenkins, Splunk, C#, C, PHP, HTML5, CSS, JavaScript, Object-Oriented Programming, PostgreSQL, SQL, MySQL, Python, Terraform
              </p>
              <p>
                <strong>Certifications:</strong> AWS Cloud Practitioner, Mulesoft Certified Developer
              </p>
            </div>
          </section>

          {/* Certifications & Proficiencies Badges Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Certifications & Proficiencies
            </h2>
            <div className="mt-4 flex flex-wrap">
              <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">
                AWS Cloud Practitioner
              </span>
              <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">
                Mulesoft Certified Developer
              </span>
              <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">
                Jenkins
              </span>
              <span className="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">
                Splunk
              </span>
              <span className="inline-block bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">
                Terraform
              </span>
              {/* Add additional badges as needed */}
            </div>
          </section>
        </main>

        <footer className="bg-white dark:bg-gray-800 shadow mt-12">
          <div className="container mx-auto py-4 px-4 text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Clifford Green. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};


export default Home;
