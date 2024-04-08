import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-80 mx-auto flex-grow">
        {/* Displaying PDF */}
        <object
          data="/Resume-BishnuPoudel-20240226.pdf"
          type="application/pdf"
          className="w-full h-full"
        >
          <p>
            Your browser does not support viewing PDF files. <a href="/Resume-BishnuPoudel-20240226.pdf">Download the PDF file</a> instead.
          </p>
        </object>
        </div>
      <div className="w-80 mx-auto">
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center">
            <Image src="/linkedin-icon.png" width={20} height={20} alt="LinkedIn logo"/>
            <a href="https://www.linkedin.com/in/bishnu-poudel" className="underline ml-2">
              LinkedIn
            </a>
          </div>
          <div className="flex items-center">
            <Image src="/github-icon.jpg" width={20} height={20} alt="GitHub logo"/>
            <a href="https://github.com/vsnupoudel" className="underline ml-2">
              GitHub
            </a>
          </div>
          <div className="flex items-center">
            <Image src="/dockerhub-icon.png" width={20} height={20} alt="DockerHub logo"/>
            <a href="https://hub.docker.com/u/bishnupoudel" className="underline ml-2">
              DockerHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}