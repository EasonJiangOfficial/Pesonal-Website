import React,{ useState, useEffect} from 'react'
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import Hero from "../components/hero"
import NavBar from "../components/navbar"

export default function landingPage(){
    return (
        <>
            <Head>
                <title>Home | Eason's Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Hero />
        </>
    );
}