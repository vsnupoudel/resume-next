"use client";
import Image from "next/image";
import EmailForm from "../components/EmailForm";
const resumeFileName = "Resume-BishnuPoudel-20240927-Long.pdf";
import Resume from "../components/resumeHtml";
import useDeviceType from "../components/deviceType";
import React, { useState } from "react";

export default function Home() {
  const isMobile = useDeviceType();

  return (
    <div className="h-screen flex flex-row">

      <div className="w-80 mx-auto flex-grow">
        { isMobile ? ( <Resume /> ) : (
        <object
          data={resumeFileName}
          type="application/pdf"
          className="w-full h-full"
        >
          <p>
            Your browser does not support viewing PDF files.
            <a
              href={resumeFileName}
              className="underline text-blue-600 font-bold"
            >
              Download the PDF file
            </a>{" "}
            instead.
          </p>
        </object>
        ) }
      </div>

    </div>
  );
}
