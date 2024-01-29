import { defineField } from "sanity"

const user = {
    name: "user",
    title: "user",
    type: "document",
    fields: [
        defineField({
            name: "isAdmin",
            title: "Is Admin",
            type: "boolean",
            description: "CHECK IF THE USER IS ADMIN",
            initialValue: false,
            validation: Rule => Rule.required(),
            // readOnly: true,
            // hidden: true,
        }),
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            description: "NAME OF THE USER",
            readOnly: true,
            validation: Rule => Rule.required(), 
        }),
        defineField({
            name: "image",
            title: "Image",
            type:"url",
        }),

        defineField({
            name: "password",
            type: "string",
            hidden: true,
        }),

        defineField({
            name: "email",
            title: "Email",
            type: "string",
        }),
        defineField({
            name: "emailVerified",
            type: "datetime",
            hidden: true,
        }),
        defineField({
            name: "about",
            title: "About",
            type: "text",
            description: "A BRIEF DESCRIPTION ABOUT THE USER" 
        })
    ],
}

export default user