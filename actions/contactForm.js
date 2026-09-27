"use server"

import { redirect } from "next/navigation"
import { connectDB } from "../lib/db";
import contact from "../lib/models/contact"


export async function createContact(formData) {
    await connectDB()
    const username=formData.get('username')
    const email=formData.get('email')
    const message= formData.get('message')
    const subject= formData.get('subject')
    await contact.create({
        username,email,subject,message
    })
    console.log("Data Saved successfully")
    redirect('/dashboard')
}