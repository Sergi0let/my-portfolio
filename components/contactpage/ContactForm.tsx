'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <RevealWrapper className="flex flex-col justify-between gap-10">
            <div>
              <p className="mb-6 max-w-sm text-lg opacity-70">
                Open for freelance projects, full-time roles, and interesting collaborations. If you have an idea —
                let&apos;s talk.
              </p>
              <p className="max-w-sm opacity-50">I typically reply within 24 hours.</p>
            </div>

            <ul className="space-y-5">
              <li>
                <span className="mb-1 block text-xs font-bold uppercase tracking-[2px] opacity-40">Email</span>
                <Link href="mailto:contact@vashkevych.pro" className="text-lg transition-opacity hover:opacity-70">
                  contact@vashkevych.pro
                </Link>
              </li>
              <li>
                <span className="mb-1 block text-xs font-bold uppercase tracking-[2px] opacity-40">Telegram</span>
                <Link
                  href="https://t.me/serg_v6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg transition-opacity hover:opacity-70">
                  @serg_v6
                </Link>
              </li>
              <li>
                <span className="mb-1 block text-xs font-bold uppercase tracking-[2px] opacity-40">LinkedIn</span>
                <Link
                  href="https://www.linkedin.com/in/s-vashkevych"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg transition-opacity hover:opacity-70">
                  linkedin.com/in/svash
                </Link>
              </li>
            </ul>
          </RevealWrapper>

          {submitted ? (
            <RevealWrapper className="flex flex-col items-start justify-center gap-4 border p-10 dark:border-dark">
              <p className="text-2xl font-medium">Thanks, {formData.name}!</p>
              <p className="opacity-60">Your message has been sent. I&apos;ll get back to you shortly.</p>
            </RevealWrapper>
          ) : (
            <RevealWrapper as="form" onSubmit={handleSubmit} className="reveal-me grid grid-cols-1 gap-8">
              <div>
                <label
                  htmlFor="name"
                  className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark dark:text-dark-100"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark dark:text-dark-100"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi"
                  className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark dark:text-dark-100"
                  required
                />
              </div>

              <div>
                <button type="submit" className="rv-button rv-button-primary block w-full md:inline-block md:w-auto">
                  <div className="rv-button-top">
                    <span>Send Message</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span className="text-nowrap">Send Message</span>
                  </div>
                </button>
              </div>
            </RevealWrapper>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm
