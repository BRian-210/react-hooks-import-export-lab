import { username, city, image } from "../data/user";

test("username, city, and image are all exported", () => {
  expect(username).toBe("Liza");
  expect(city).toBe("New York");
  expect(image).toBe("https://i.imgur.com/mV8PQxj.gif");
});
