import { expect, it } from "vitest";
import { absoluteUrl, buildMetadata } from "@/src/lib/metadata";

it("builds absolute urls", () => {
  expect(absoluteUrl("/faq/")).toBe("https://lifecarephysiotherepy.com/faq/");
});

it("builds canonical metadata", () => {
  const metadata = buildMetadata({
    title: "FAQ",
    description: "Answers",
    path: "/faq/",
  });

  expect(metadata.alternates?.canonical).toBe(
    "https://lifecarephysiotherepy.com/faq/",
  );
});
