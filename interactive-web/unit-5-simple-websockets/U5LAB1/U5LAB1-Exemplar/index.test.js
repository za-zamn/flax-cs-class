import app from "./app"
import request from "supertest"

const expectOptions = {
  showPrefix: false,
  showStack: false,
}

test("index.html renders correctly", async () => {
  expect(
    typeof app,
    "Make sure app.js exports an Express app",
    expectOptions
  ).toBe("function")

  const { headers, text, status } = await request(app).get("/index.html")

  expect(
    headers["content-type"],
    "The response needs to be HTML",
    expectOptions,
  ).toBe("text/html; charset=UTF-8")

  expect(
    status,
    "Hrm, not getting the index.html page yet...",
    expectOptions
  ).toBe(200)

  expect(
    text,
    "Got the index.html file, but the page isn't quite right yet...",
    expectOptions
  ).toContain("You did it!")
})

