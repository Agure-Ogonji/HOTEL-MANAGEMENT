import { defineField } from "sanity";

const review = {
  name: "review",
  title: "Review",
  type: "document",
  fields: [defineField({
    name: "user", title: "User", type: "reference", to: [{
        type: "user"
    }],
    validation: Rule => Rule.required(),
  }),
  defineField({
    name: "hotelRoom",
    title: "Hotel Room",
    type: "reference",
    to: [{
        type: "hotelRoom"
    }],
    validation: Rule => Rule.required(),
  }),
  defineField({
    name: "",
    title: "",
    type: "",
    validation: Rule => Rule.required(),
  }),
  defineField({
    name: "",
    title: "",
    type: "",
    validation: Rule => Rule.required(),
  }),

],
};

export default review