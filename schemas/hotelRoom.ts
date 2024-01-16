import { defineField } from "sanity";


const roomTypes = [
    {title: "Basic", value: "basic"},
    {title: "Luxury", value: "luxury"},
    {title: "Suite", value: "suite"}
]
const hotelRoom = {
    name: "hotelRoom",
    title: "Hotel Room",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: Rule => Rule.required().max(50).error("MAXIMUM 50 CHARACTERS"), 
        }),

        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "name" 
            },
            validation: Rule => Rule.required(),        
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: Rule => Rule.required().min(100).error("MINIMUM 100 CHARACTERS"),
        }),

        defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: Rule => Rule.required().min(100).error("MINIMUM 100 CHARACTERS"),
        }),
        defineField({
            name: "discount",
            title: "Discount",
            type: "number",
            initialValue: 0,
            validation: Rule => Rule.min(0),
        }),

        defineField({
            name: "images",
            title: "Images",
            type: "array",
            of: [{
                type: "object", fields: [{
                    name: "url",
                    type: "url",
                    title: "URL"
                },
                {
                    name: "file",
                    type: "file",
                    title: "File",
                },
            ],
            },],
            validation: Rule => Rule.required().min(3).error("MINIMUM OF 3 IMAGES REQUIRED"),
        }),
        defineField({
            name: "coverImage",
            title: "Cover Image",
            type: "object",
            fields: [{
                name: "url", type: "url", title: "URL"
            },
            {name: "file", type: "file", title: "File"},
        ],
        validation: Rule => Rule.required().error("THE COVER IMAGE IS REQUIRED"),
        }),

        defineField({
            name: "type",
            title: "Room Type",
            type: "string",
            options: {
                list: roomTypes,
            },
            initialValue: "basic",
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: "specialNote",
            title: "Special Note",
            type: "text",
            initialValue: "CHECK-IN TIME IS 12:00PM, CHECK-OUT TIME IS 11:59AM. IF YOU LEAVE BEHIND ANY ITEMS, PLEASE CONTACT THE RECEPTIONIST.",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "dimension",
            title: "Dimension",
            type: "string",
            // validation: Rule => Rule.required(),
        }),
        defineField({
            name: "numberOfBeds",
            title: "Number Of Beds",
            type: "number",
            initialValue: 1,
            validation: Rule => Rule.min(1),
        }),
        defineField({
            name: "offeredAmenities",
            title: "Offered Amenities",
            type: "array",
            of: [{
                type: "object", fields: [{
                    name: "icon", title: "Icon", type: "string"
                },
                {name: "amenity", title: "Amenity", type: "string"},
            ],
            },],
            // validation: Rule => Rule.required(),
        }),

        defineField({
            name: "isBooked",
            title: "Is Booked",
            type: "boolean",
            initialValue: false,
        }),

        defineField({
            name: "isFeatured",
            title: "Is Featured",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "reviews",
            title: "Reviews",
            type: "array",
            of: [{
                type: "review"
            }],
        }),
    ]
}

export default hotelRoom;