import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Main from "../../components/Main/Main"
import VideoSection from '../../components/VideoSection/VideoSection'
import Proses from '../../components/Proses/Proses'
import Goal from '../../components/Goal/Goal'
import Service from '../../components/Services/Service'

export default function Home() {
  return (
    <>
    <NavBar/>
    <Main/>
    <VideoSection/>
    <Proses/>
    <Goal/>
    <Service/>
    </>
  )
}
