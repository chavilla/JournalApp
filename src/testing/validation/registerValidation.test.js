import { registerValidation } from "../../validation/registerValidation";

describe("validation/registerValidator testing", () => {
  test("should to return isValid like true", () => {
    const values = {
      email: "jacv00@hotmail.com",
      displayName: "Jesus",
      password: "chavilla",
      confirmPassword: "chavilla",
    };

    const  error = registerValidation(values);
    expect(error).toEqual({});
  });

  test("should to return isValid like a false and 1 error has an email attribute", () => {
    const values = {
      email: "jacv00hotmail.com",
      displayName: "Jesus",
      password: "chavilla",
      confirmPassword: "chavilla",
    };

    const  error = registerValidation(values);
    expect(error).toEqual({ email: "Email is not valid" });
  });

  
  test("should to return isValid like a false and 1 error has an password attribute", () => {
      const values = {
          email: "jacv00@hotmail.com",
          displayName: "Jesus",
          password: "chav",
          confirmPassword: "chav",
        };
        
        const  error = registerValidation(values);
        expect(error).toEqual({
            password: "Password should be at least 8 characters",
        });
    });

  test("should to return 1 error in confirmPassword attribute", () => {
    const values = {
      email: "jacv00@hotmail.com",
      displayName: "Jesus",
      password: "chavilla",
      confirmPassword: "chavillas",
    };

    const  error = registerValidation(values);
    expect(error).toEqual({ 
        confirmPassword: "Passwords should match each other" 
    });
  });
});
