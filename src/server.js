import { createServer, Model } from "miragejs";
export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    models: {
      students: Model,
    },
    seeds(server) {
      server.create("student", {
        name: "Student1",
        dob: "01/01/1999",
        city: "Riverwoods",
        state: "Illinois",
        zip: "60001",
      });
      server.create("student", {
        name: "Student1",
        dob: "01/01/1999",
        city: "Riverwoods",
        state: "Illinois",
        zip: "60001",
      });
      server.create("student", {
        name: "Student1",
        dob: "01/01/1999",
        city: "Riverwoods",
        state: "Illinois",
        zip: "60001",
      });
    },
    routes() {
      this.namespace = "";
      this.get("/getStudents", (schema, request) => {
        return schema.students.all();
      });
      this.get("/:id", (schema, request) => {
        let id = request.params.id;
        return schema.students.find(id);
      });
      this.post("/", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.students.create(attrs);
      });
      this.patch("/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let student = schema.students.find(id);
        return student.update(newAttrs);
      });
      this.delete("/:id", (schema, request) => {
        let id = request.params.id;
        return schema.students.find(id).destroy();
      });
    },
  });
  return server;
}
