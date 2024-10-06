import { describe, it, expect } from "vitest";

const processArgs = require("../lib/processArgs");

describe("processArgs", () => {
  it("url", () => {
    const args = ["url"];
    const result = processArgs(args);
    expect(result).toEqual({
      id: expect.any(String),
      url: "url",
      width: "85%",
      args: [],
    });
  });

  it("url width", () => {
    const args = ["url", "100%"];
    const result = processArgs(args);
    expect(result).toEqual({
      id: expect.any(String),
      url: "url",
      width: "100%",
      args: [],
    });
  });

  it("url width arg1", () => {
    const args = ["url", "100%", "arg1"];
    const result = processArgs(args);
    expect(result).toEqual({
      id: expect.any(String),
      url: "url",
      width: "100%",
      args: ["arg1"],
    });
  });

  it("url arg1", () => {
    const args = ["url", "arg1"];
    const result = processArgs(args);
    expect(result).toEqual({
      id: expect.any(String),
      url: "url",
      width: "85%",
      args: ["arg1"],
    });
  });
});
