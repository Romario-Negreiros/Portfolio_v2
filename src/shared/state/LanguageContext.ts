import { createContext } from "react";

import type { SetStateAction, Dispatch } from "react";

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
          txt: string;
        };
      };
      about: {
        title: string;
        paragraphs: string[];
        link: {
          href: string;
          txt: string;
        };
      }
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
      nav: string[];
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
            txt: ""
          },
        },
        about: {
          title: "",
          paragraphs: [],
          link: {
            href: "",
            txt: ""
          },
        }
      },
    },
    components: {
      header: {
        langSwitch: [],
        search: {
          placeholder: ""
        },
        nav: [],
      },
    },
  },
  setLanguage: function () {},
};

export default createContext<ILanguageContext>(defaultContextValue);
