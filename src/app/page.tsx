"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const [lang, setLang] = useState(() => {
    const langCached = getCookie("lang");

    if (langCached) {
      return langCached;
    } else {
      return "br";
    }
  });

  const t = useTranslations("Index");

  function handleChangeLan(languageChosen: string) {
    setLang(languageChosen);

    setCookie("lang", languageChosen);

    window.location.reload();
  }
 
  return (
    <>
      <h1>{t("title")}</h1>

      <Select defaultValue={lang} onValueChange={handleChangeLan}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={t("select.description")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{t("select.label")}</SelectLabel>
            <SelectItem value="br">Português BR</SelectItem>
            <SelectItem value="en">Inglês</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
