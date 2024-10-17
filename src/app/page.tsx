import Image from "next/image";
import EmailForm from '../components/EmailForm';
const resumeFileName = "../../public/Resume_BishnuPoudel_20240927-Long.pdf";

export default function Home() {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-80 mx-auto flex-grow">
        {/* Displaying PDF */}
        <object
          data={resumeFileName}
          type="application/pdf"
          className="w-full h-full">
          <p>
            Your browser does not support viewing PDF files. 
            <a href={resumeFileName}
            className="underline text-blue-600 font-bold" >Download the PDF file</a> instead.
          </p>
        </object>
      </div >

      <div className="pt-5 w-80 mx-auto">
        <div className="flex flex-col gap-2 mt-4">
          <div className="pt-2 flex items-center">
            <Image src="/linkedin-icon.png" width={20} height={20} alt="LinkedIn logo" />
            <a href="https://www.linkedin.com/in/bishnu-poudel" target="_blank" rel="noopener noreferrer" className="underline ml-2">
              LinkedIn
            </a>
          </div>
          <div className="pt-2 flex items-center">
            <Image src="/github-icon.jpg" width={20} height={20} alt="GitHub logo" />
            <a href="https://github.com/vsnupoudel" target="_blank" rel="noopener noreferrer" className="underline ml-2">
              GitHub
            </a>
          </div>
          <div className="pt-2 flex items-center">
            <Image src="/dockerhub-icon.png" width={20} height={20} alt="DockerHub logo" />
            <a href="https://hub.docker.com/u/bishnupoudel" target="_blank" rel="noopener noreferrer" className="underline ml-2">
              DockerHub
            </a>
          </div>
        </div>

        {/* EmailForm component */}

        <div className="pt-10 mt-4">
          <EmailForm />
        </div>


      </div>
    </div>
  );
}