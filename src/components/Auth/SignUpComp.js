import { useContext } from "react";
import { signupFields } from "./FormFields";
import FormAction from "./FormAction";
import Input from "./Input";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function SignupComp() {
  const navigate = useNavigate();
  const { createUser, signPopUpGoogle, updateUserProfile } =
    useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 7) {
      toast.error("Password should be at least 7 characters long.");
      return;
    }
    console.log(username, email, password);

    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      navigate("/login");
      console.log(loggedUser);

      updateUserProfile(username)
        .then(() => {
          const savedUser = {
            username: username,
            email: email,
            role: "customer",
          };
          fetch("https://restaurant-server-chi.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "New User Has Been Saved",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/login");
              }
            });
        })

        .catch((res) => {
          toast.error(res.message);
          console.log(res);
        });
    });
  };

  
  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="">
          {fields.map((field) => (
            <Input
              key={field.id}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
          <FormAction handleSubmit="" text="Signup" />
        </div>
   
      </form>
    </>
  );
}
