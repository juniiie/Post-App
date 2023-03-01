import { useForm } from "react-hook-form";
import * as yup from "yup";

export const CreateForm = () => {
  return (
    <form>
      <input placeholder="Title"></input>
      <input placeholder="Description"></input>
      <input type="submit"></input>
    </form>
  );
};
