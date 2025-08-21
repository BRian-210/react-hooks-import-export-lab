import { username, city, image } from "../data/user";

test("username, city, and image are all exported", () => {
  expect(username) ="Liza";
  expect(city) ="New York";
  expect(image) ="https://i.imgur.com/mV8PQxj.gif";
});
