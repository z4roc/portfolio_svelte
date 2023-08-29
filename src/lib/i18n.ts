import { derived, writable } from "svelte/store";
import translations from "./translations";

export const locale = writable("de");
export const locales = Object.keys(translations);

function translate(locale: any, key: any, vars: any) {
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${key}"`);

  let tr: any = translations; // Grab the translation from the translations object.
  let text = tr[locale][key];

  if (!text) throw new Error(`no translation found for ${locale}.${key}`);

  // Replace any passed in variables in the translation string.
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const t = derived(
  locale,
  ($locale) =>
    (key: any, vars = {}) =>
      translate($locale, key, vars)
);
