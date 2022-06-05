import { rest } from "msw";

export const handlers = [
  //Handles a POST /login
  // rest.post("/login", (req, res, ctx) => {
  //   sessionStorage.setItem("is-authenticated", "true");

  //   return res(ctx.status(200));
  // }),

  //Handles a GET /user
  rest.get("/user", (req, res, ctx) => {
    return res({
      username: "amdin",
    });
    // const isAuthenticated = sessionStorage.getItem("is-authenticated");
    // if (!isAuthenticated) {
    //   return res(
    //     ctx.status(403),
    //     ctx.json({
    //       errorMessage: "Not authorized",
    //     })
    //   );
    // }
    // // If authenticated return a mocked user details
    // return res(
    //   ctx.status(200),
    //   ctx.json({
    //     username: "admin",
    //   })
    // );
  }),
];
