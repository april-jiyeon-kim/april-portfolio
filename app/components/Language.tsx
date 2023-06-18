import { useTranslation } from "next-i18next";
import { languages } from "../i18n";

const Language: React.FC<{}> = () => {
  const { i18n } = useTranslation();

  const onChangeLanguage = (language: string) => () => {
    i18n.changeLanguage(language);
    // i18n.changeLanguage(language);
  };

  return (
    <>
      {languages.map(({ text, code }, index) => (
        <button
          type="button"
          className={`border ${"border-white"} p-2 focus:outline-none ${
            index === 0 ? "rounded-tl-xl rounded-bl-xl" : ""
          } ${
            index === languages.length - 1 ? "rounded-tr-xl rounded-br-xl" : ""
          } ${i18n.language?.indexOf(code) >= 0 ? "bg-white text-orange" : ""}`}
          onClick={onChangeLanguage(code)}
          key={code}
        >
          {text}
        </button>
      ))}
    </>
  );
};

export default Language;
