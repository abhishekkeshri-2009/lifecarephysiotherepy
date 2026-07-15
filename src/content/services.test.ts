import { expect, it } from "vitest";
import { services } from "@/src/content/services";

it("service slugs are unique", () => {
  const slugs = services.map((service) => service.slug);
  expect(new Set(slugs).size).toBe(slugs.length);
});
