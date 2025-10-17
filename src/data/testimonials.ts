import { TestimonialContent } from "../interfaces/testimonialType";

export const testimonials: Array<TestimonialContent> = [
    {
      id: 1,
      title: "Very easy this was to integrate",
      text: "If you care for your time, I hands down would go with this.",
      person: {
        id: 1,
        name: "Bonnie Green",
        title: "Developer at Open AI",
        icon: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      }
    },
    {
      id: 2,
      title: "Solid foundation for any project",
      text: "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!",
      person: {
        id: 2,
        name: "Roberta Casas",
        title: "Lead designer at Dropbox",
        icon: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
      }
    },
  ];