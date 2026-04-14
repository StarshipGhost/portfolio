import React, { useState, type JSX } from "react";
import BracketWrapper from "../BracketWrapper";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import ClockIcon from "../icons/ClockIcon";

interface MailFormInputProps {
    id: string,
    type: string,
    label: string,
    placeholder: string,
    value: string,
    onChangeHandler: (event : React.ChangeEvent<HTMLInputElement>) => void;
}

const MailFormInput = ({id, type, label, placeholder, value, onChangeHandler} : MailFormInputProps) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-medium" htmlFor={id}>{label}</label>
            <input 
                className="text-white text-sm bg-black border border-solid border-purple-500/30 rounded-sm px-3 py-2 placeholder:text-neutral-500 focus:outline-purple-400"
                type={type}
                id={ id }
                placeholder={ placeholder }
                value={value}
                onChange={onChangeHandler}
                required>
            </input>
        </div>
    )
}

const MailFormInputFields = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    return (
        <form className="space-y-4">
            <MailFormInput id='name' type='text' label='Name' placeholder='Your name' value={name} onChangeHandler={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.currentTarget.value)}/>
            <MailFormInput id='email' type='email' label='Email' placeholder='your.email@example.com' value={email} onChangeHandler={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.currentTarget.value)}/>
            <MailFormInput id='subject' type='text' label='Subject' placeholder="What's this about?" value={subject} onChangeHandler={(event: React.ChangeEvent<HTMLInputElement>) => setSubject(event.currentTarget.value)}/>
            <div className="flex flex-col gap-2">
                <label className='text-white text-sm font-medium' htmlFor='message'>Message</label>
                <textarea className='w-full text-white text-sm bg-black backdrop-blur-3xl border border-solid border-purple-500/30 rounded-sm px-3 py-2 placeholder:text-neutral-500 focus:outline-purple-400' id='message' rows={5} placeholder='Your message...' value={message} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(event.currentTarget.value)}></textarea>
            </div>
            <a href={`mailto:saadk09@hotmail.com?subject=${subject}&body=${message}`}className="grid grid-cols-1 text-white text-sm text-center font-medium bg-linear-to-r from-cyan-500 hover:from-cyan-600 to-purple-500 hover:to-purple-600 rounded-md py-2 cursor-pointer" >Send Message</a>
        </form>
    )
}

const MailFormCard = () => {
    return (
        <div className="bg-black backdrop-blur-3xl space-y-6 border border-solid border-purple-500/30 rounded-lg px-6 py-4">
            <div className="space-y-1">
                <h3 className="text-white">Send a Message</h3>
                <p className="text-sm text-neutral-400">Fill out the form below and I'll get back to you as soon as possible</p>
            </div>
            <MailFormInputFields/>
        </div>
    )
}

const InfoCard = ({header, icon, text} : {header: string, icon: JSX.Element, text: string}) => {
    return (
        <div className="bg-black backdrop-blur-3xl border border-solid border-purple-500/30 hover:border-purple-400 rounded-lg p-4">
           <div className="flex gap-2 mb-6">
                <span className="text-purple-400">{icon}</span>
                <span className="text-white text-sm font-medium">{header}</span>
            </div> 
            <p className="text-neutral-400 text-sm">{text}</p>
        </div>
    )
}

const InfoCards = () => {
    return (
        <div className="space-y-4">
            <InfoCard header='Email' icon={<MailIcon/>} text='saad.kalyati.1@ens.etsmtl.ca'/>
            <InfoCard header='Phone' icon={<PhoneIcon/>} text='438-229-6003'/>
            <InfoCard header='Availability' icon={<ClockIcon/>} text='Available for internship opportunities'/>
        </div>
    )
}

const Contacts = () => {
    return (
        <section className="max-w-6xl mx-auto flex flex-col gap-4 items-center px-4 py-20">
            <BracketWrapper color={'text-purple-400'} className="text-3xl lg:text-4xl text-white text-center font-bold">Let's Work Together</BracketWrapper>
            <p className="max-w-xl text-neutral-400 text-sm lg:text-lg text-center mb-8">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                <InfoCards/>
                <MailFormCard/>
            </div>
        </section>
    )
}

export default Contacts