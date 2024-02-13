import { createContext } from "react";

import type { SetStateAction, Dispatch } from "react";

export interface ILanguage {
  lang: {
    attr: string;
    name: string;
  };
  pages: {
    home: string;
  };
  components: {
    header: {
      langSwitch: Array<{
        attr: string;
        name: string;
      }>;
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
      home: "",
    },
    components: {
      header: {
        langSwitch: [],
        nav: [],
      },
    },
  },
  setLanguage: function () {},
};

export default createContext<ILanguageContext>(defaultContextValue);
