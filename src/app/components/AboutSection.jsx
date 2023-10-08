"use client"
import React,{useTransition,useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA =[
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Django</li>
                <li>Django Rest</li>
                <li>JavaScript</li>
                <li>MySQL</li>
                <li>PHP</li>
                <li>React</li>
                <li>Python</li>
                <li>Next.js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id :"education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Central University College</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] =useState("skills")
    const [isPending, startTransition] =useTransition()

    const handleTabChange = (id)=> {
        startTransition(() => {
            setTab(id)
        }

        )
    }
  return (
    <section id="about" className='text-white'><div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/Images/about--me.jpg" alt="" width={800} height={800} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base md:text-lg'> I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Next.js, Python, PHP, MySQL,
            Django, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing web applications.
            </p>
            <div className='flex flex-row  mt-8'>
                <TabButton selectTab={() => handleTabChange("skills")}
                active={tab=== "skills"} > 
                {" "}
                Skills{" "}
                </TabButton>
                 <TabButton selectTab={() => handleTabChange("education")}
                active={tab=== "education"} > 
                {" "}
                Education{" "}
                </TabButton>
            </div>
            <div className='mt-8'>{TAB_DATA.find((t)=> t.id === tab ).content }</div>
        </div>
    </div>
    </section>
  )
}

export default AboutSection