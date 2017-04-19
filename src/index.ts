/* -----------------------------------------------------
    Index.ts

    Code below is taken from:
      https://www.typescriptlang.org/docs/handbook/classes.html
    Remove at will.

    Start writing your code in this file.
    Happy coding, have fun!
-------------------------------------------------------- */
class Greeter {
  private greeting: string;

  /**
   * Greeter constructor
   * @param  {string} message [description]
   */
  constructor(message: string) {
    this.greeting = message;
  }

  /**
   * Generate greeeting string text
   * @return {string} Return full greeting text
   */
  public greet(): string {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
if (typeof document !== "undefined") {
  document.body.innerHTML = `<div>${greeter.greet()}</div>`;
}
