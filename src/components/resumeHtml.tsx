import React from "react";

const Resume = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="bg-blue-600 text-white p-6">
        <h1 className="text-4xl font-bold">BISHNU POUDEL</h1>
        <p className="text-lg">Data/ML Engineer, DevOps Engineer, Software Engineer</p>
        <p className="text-sm">replytobishnu@gmail.com | +977-9823-143414 | Kathmandu, Nepal</p>
        <p className="text-sm">bishnu-poudel | vsnupoudel</p>
        <p className="text-sm">
          <a
            href="https://www.linkedin.com/in/bishnu-poudel"
            className="text-blue-300 hover:text-blue-100 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://www.github.com/vsnupoudel"
            className="text-blue-300 hover:text-blue-100 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://hub.docker.com/u/bishnupoudel"
            className="text-blue-300 hover:text-blue-100 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            DockerHub
          </a>
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row p-6">
        {/* Left Column (Wider) */}
        <div className="w-full lg:w-2/3 lg:pr-6">
          {/* Summary Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">SUMMARY</h2>
            <p className="text-gray-700">
              I have a strong background and experience in SQL, ML/AI, Python-Dev, Cloud Infra (GCP), and Data Operations. I have completed one year of Master's Degree Credits in Data Science.
            </p>
            <p className="text-gray-700 mt-2">
              For finance, retail, pharma, and social-media clients, I have provided optimal solutions to data quality issues, machine learning applications, and data operations automation. Accurate communication and minimal consumption of time/resources for delivery of solutions are my priorities.
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">EXPERIENCE</h2>

            {/* IBM Experience */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Senior Data Engineer, Python Backend Developer | IBM</h3>
              <p className="text-gray-600">Mar 2023 – Sep 2023 | Bangalore, India</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Improved code quality and recommended better quality-check and architecture strategies for a database migration project in GCP-Big Query.</li>
                <li>Debugged inconsistent data-types and anomalies missed due to lack of attention to detail.</li>
                <li>Added additional test-cases to test business rules and discovered undocumented inserts in fact/dimension tables.</li>
                <li>Recommended architecture changes to ELT pipeline in GCP.</li>
                <li>Delivered enhancements accurately and quickly on API development/deployment efforts in GCP server-less.</li>
                <li>Proactively acquired information/knowledge from offshore developers and took ownership of development/enhancement efforts.</li>
                <li>Helped inexperienced folks get unstuck by closely guiding them and improving documentation of codes/processes.</li>
                <li>Analysed technical and project-management challenges.</li>
                <li>Analysed gaps in knowledge transfer sessions and asked onshore developers for further documentation and clarity.</li>
                <li>Updated management on the number and quality of personnel required to own/manage the transferred projects.</li>
                <li>Tools: Python-Flask, FastApi, SQL, GCP server-less infra, Git</li>
              </ul>
            </div>

            {/* Ugam Solutions Experience */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Lead Analyst, DevOps Engineer | Ugam Solutions</h3>
              <p className="text-gray-600">Mar 2022 – Sep 2022 | Bangalore, India</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Deployed/Monitored around 50 data pipelines, Spark Jobs, and analytical queries on an on-site cluster daily.</li>
                <li>Communicated accurately in real-time with developers/testers and acted as a bridge between developers and the production environment.</li>
                <li>Solved problems in real-time and on an urgent basis in a high-pressure environment.</li>
                <li>Decreased daily manual efforts by 75% by automating routine tasks.</li>
                <li>Took initiative to convert remote VMs into GUI from CLI, leading to increased productivity.</li>
                <li>Managed requests quicker and made communication transparent among 15+ requestors per day.</li>
                <li>Learned the source code and recommended better approaches to code the pipeline.</li>
                <li>Tools: Git, Hadoop, Python, Shell, REST API, Spark, Hive</li>
              </ul>
            </div>

            {/* Verisk Analytics Experience */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Software Engineer, Data Operations Engineer | Verisk Analytics</h3>
              <p className="text-gray-600">May 2015 – Feb 2019</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Provided technical support in the form of data analysis, reports automation, and daily operational support to 5 notable banks in the USA.</li>
                <li>Made sure all servers were up and confirmed the arrival of 500+ daily files.</li>
                <li>Automated data back-end and ETL operations in M5-SQL and .NET stack.</li>
                <li>Extracted key metrics from several unstructured text files, avoiding daily data entry efforts for 50 files (1 million lines of text) per day.</li>
                <li>Automated daily generation of critical XML files and several Excel Dashboards.</li>
                <li>Documented common troubleshooting techniques and shared solutions with adjacent teams.</li>
                <li>Tools used: TSQL, COBOL, SSIS, Excel, Python, Shell, .NET</li>
              </ul>
            </div>

            {/* Mu Sigma Experience */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Decision Scientist, Data QA Engineer | Mu Sigma</h3>
              <p className="text-gray-600">Jul 2013 – Mar 2015</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>ETL migration, Data Quality assurance, and Business-rules validation.</li>
                <li>Conducted thorough quantitative checks and data validation, providing a roadmap for the rest of the team to follow.</li>
                <li>Tools used: SQL, Informatica, Excel, SAS, R, QlikView</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column (Narrower) */}
        <div className="w-full lg:w-1/3 lg:pl-6">
          {/* Tech Stack Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">TECH STACK</h2>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p>SQL</p>
              <p>NoSQL</p>
              <p>Linux</p>
              <p>Python</p>
              <p>Flask</p>
              <p>GCP</p>
              <p>Data-Operations</p>
              <p>Git</p>
              <p>Machine and Deep Learning</p>
              <p>Kubernetes</p>
              <p>Docker</p>
              <p>React</p>
              <p>Language Agnostic DevOps</p>
              <p>Distributed Computing</p>
            </div>
          </div>

          {/* Learning Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">LEARNING</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Software Architecture</li>
              <li>Distributed Applications</li>
              <li>React</li>
              <li>Django</li>
            </ul>
          </div>

          {/* Languages Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">LANGUAGES</h2>
            <p className="text-gray-700">English: Native</p>
            <p className="text-gray-700">Scandinavian: B1</p>
          </div>

          {/* Education Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">EDUCATION</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Masters in Data Science</h3>
              <p className="text-gray-600">Norwegian University of Life Sciences</p>
              <p className="text-gray-600">Jul 2019 – Oct 2020 | Ås, Norway</p>
              <p className="text-gray-700">GPA: 3.80</p>
              <p className="text-gray-700">
                Relevant courses: Data Science and Statistics, Machine and Deep Learning, Image Analysis, Advanced Python Programming, Data Structures and Algorithms
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold">Bachelor of Technology in Electronics and Communication</h3>
              <p className="text-gray-600">NIT Durgapur</p>
              <p className="text-gray-600">Jul 2009 – May 2013 | West Bengal, India</p>
              <p className="text-gray-700">GPA: 8.28 out of 10</p>
              <p className="text-gray-700">
                Relevant courses: C, C++, OOP, Operating System, Data Structures and Algorithms
              </p>
            </div>
          </div>

          {/* Service of Technology Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">Certifications </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>25+ courses, 7+ specializations on Machine and Deep Learning using Tensorflow/Python.</li>
              <li>10 Course Data Science Specialization using R.</li>
              <li>Google Cloud certifications, Labs.</li>
              <li>Web development back-end (Flask, FastApi), Web development frontend.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;