import { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import InputFiled from "./InputFiled";

const FlexedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Form = styled.form`
  width: 35vw;
  height: auto;
  background: #5b9a8b;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 1080px) {
    width: 50vw;
  }
  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const init = {
  name: "",
  email: "",
  phone: "",
  password: "",
};

function App() {
  const [state, setState] = useState({ ...init });
  const [errors, setErrors] = useState({ ...init });
  const [focus, setFocus] = useState({ ...init });

  const handleChange = (e) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });

    if (state.name !== "") {
      setErrors((prev) => {
        return {
          ...prev,
          name: "",
        };
      });
    }

    if (state.email !== "") {
      setErrors((prev) => {
        return {
          ...prev,
          email: "",
        };
      });
    }

    if (state.phone !== "") {
      setErrors((prev) => {
        return {
          ...prev,
          phone: "",
        };
      });
    }

    if (state.password !== "") {
      setErrors((prev) => {
        return {
          ...prev,
          password: "",
        };
      });
    }
  };

  const handleFocus = (e) => {
    setFocus((prev) => {
      return {
        ...prev,
        [e.target.name]: true,
      };
    });
  };

  const handleBlur = (e) => {
    if (focus.name === true && state.name === "") {
      setErrors((prev) => {
        return {
          ...prev,
          name: "Invalid Name",
        };
      });
    }

    if (focus.email === true && state.email === "") {
      setErrors((prev) => {
        return {
          ...prev,
          email: "Invalid email",
        };
      });
    }

    if (focus.phone === true && state.phone === "") {
      setErrors((prev) => {
        return {
          ...prev,
          phone: "Invalid phone",
        };
      });
    }

    if (focus.password === true && state.password === "") {
      setErrors((prev) => {
        return {
          ...prev,
          password: "Invalid password",
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.name && state.email && state.phone && state.password) {
      console.log(state);
    } else {
      if (state.name === "") {
        setErrors((prev) => {
          return {
            ...prev,
            name: "Invalid Name",
          };
        });
      }

      if (state.email === "") {
        setErrors((prev) => {
          return {
            ...prev,
            email: "Invalid email",
          };
        });
      }

      if (state.phone === "") {
        setErrors((prev) => {
          return {
            ...prev,
            phone: "Invalid phone",
          };
        });
      }

      if (state.password === "") {
        setErrors((prev) => {
          return {
            ...prev,
            password: "Invalid password",
          };
        });
      }

      alert("Please, fill all the input field properly.");
    }
  };

  const { name, email, phone, password } = state;
  return (
    <FlexedContainer>
      <Form onSubmit={handleSubmit}>
        <h1>React Form</h1>

        <InputFiled
          type="text"
          name="name"
          value={name}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          label={"Enter name:"}
          error={errors.name}
        />

        <InputFiled
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          label={"Enter email:"}
          error={errors.email}
        />

        <InputFiled
          type="phone"
          name="phone"
          value={phone}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          label={"Enter Phone:"}
          error={errors.phone}
        />

        <InputFiled
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          error={errors.password}
          label={"Enter password:"}
        />

        <Button text="Submit" />
      </Form>
    </FlexedContainer>
  );
}

export default App;
