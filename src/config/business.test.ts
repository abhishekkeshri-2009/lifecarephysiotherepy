import { expect, it } from "vitest";
import { business } from "@/src/config/business";

it("shows sunday closed and six opening days", () => {
  expect(business.sundayClosed).toBe(true);
  expect(business.openingHours).toHaveLength(6);
});
