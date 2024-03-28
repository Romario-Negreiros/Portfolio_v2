import { createContext } from "react";

import type { SetStateAction, Dispatch } from "react";

interface IProject {
  img: string;
  title: string;
  description: string;
  visit: {
    href: string;
    text: string;
  };
  stack: string[];
}

export interface ILanguage {
  lang: {
    attr: string;
    name: string;
  };
  pages: {
    home: {
      start: {
        title: string;
        link: {
          href: string;
          text: string;
        };
      };
      about: {
        title: string;
        paragraphs: string[];
        link: {
          href: string;
          text: string;
        };
      };
      projects: {
        title: string;
        projects: IProject[];
      };
    };
  };
  components: {
    header: {
      langSwitch: Array<{
        attr: string;
        name: string;
      }>;
      search: {
        placeholder: string;
      };
      nav: Array<{
        href: string;
        text: string;
      }>;
    };
  };
}

export interface ILanguageContext {
  language: ILanguage | null;
  setLanguage: Dispatch<SetStateAction<ILanguage | null>>;
}

const defaultContextValue: ILanguageContext = {
  language: {
    lang: {
      attr: "",
      name: "",
    },
    pages: {
      home: {
        start: {
          title: "",
          link: {
            href: "",
            text: "",
          },
        },
        about: {
          title: "",
          paragraphs: [],
          link: {
            href: "",
            text: "",
          },
        },
        projects: {
          title: "",
          projects: [],
        },
      },
    },
    components: {
      header: {
        langSwitch: [],
        search: {
          placeholder: "",
        },
        nav: [],
      },
    },
  },
  setLanguage: function () {},
};

export default createContext<ILanguageContext>(defaultContextValue);
