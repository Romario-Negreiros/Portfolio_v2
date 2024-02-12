import { createContext } from "react";

import type { SetStateAction, Dispatch } from "react";

export interface ILanguage {
  lang: string;
  pages: {
    home: string;
  };
  components: {
    header: {
      nav: string[];
    };
  };
}

export interface ILanguageContext {
  language: ILanguage | null;
  setLanguage: Dispatch<SetStateAction<ILanguage | null>>;
}

const defaultContextValue = {
  language: {
    lang: "",
    pages: {
      home: "",
    },
    components: {
      header: {
        nav: [],
      },
    },
  },
  setLanguage: function () {},
};

export default createContext<ILanguageContext>(defaultContextValue);
