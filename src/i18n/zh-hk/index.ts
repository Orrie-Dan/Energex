import type { ContentTranslation } from "../content";
import { companyZhHk } from "./company";
import { equipmentZhHk } from "./equipment";
import { industriesZhHk } from "./industries";
import { siteZhHk } from "./site";
import { solutionsZhHk } from "./solutions";

/** Complete zh-HK overlay. The type requires every translatable English key. */
export const contentZhHk: ContentTranslation = {
  ...siteZhHk,
  ...solutionsZhHk,
  ...companyZhHk,
  ...industriesZhHk,
  ...equipmentZhHk,
};
