import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Hero from "../components/Hero/hero";
import Projects from "@/components/projects";
import PageContainer from "@/components/pageContainer";

export default function landingPage() {
  return (
    <div className="flex flex-row justify-center">
      <Head>
        <title>Home | Eason's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PageContainer>
        <Hero />
        <Projects />
      </PageContainer>
    </div>
  );
}
