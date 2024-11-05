type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Yas",
    fullName: "Yasmen Abosanoga",
    email: "yasmen.khaled2000@gmail.com",
  },

  
  hero: {
    name: "Yasmen",
    p: ["Iam testing this website and  i have no idea if i can do somthing diffrent  and more creative "],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact",
    form: {
      name: {
        span: "Name",
        placeholder: "What's your name?",
      },
      email: { span: "Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What's your message? ",
      },
    },
  },
  sections: {
    about: {
      p: "who am i ?",
      h2: "Hi i'm Yasmen",
      content: `I'm a creative developer who blends technology and artistry to craft engaging web experiences and interactive 3D models. I thrive on continuous learning, collaboration, and attention to detail, always aiming to bring innovative ideas to life.`,
    },
    experience: {
      p: "",
      h2: "",
    },

    works: {
      p: "My work",
      h2: "Projects.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis 
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu`,
    },
  },
};
