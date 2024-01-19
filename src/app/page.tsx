'use client'
import Layout from '@/components/layout/layout'
import { useEffect } from 'react'
import HomeComponent from '@/components/home'


export default function Home() {

  useEffect(() => {
    if (localStorage.theme === "dark"){
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <Layout>
      <HomeComponent />
    </Layout> 
  )
}
