import { Formik, Field, Form } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";

interface Values {
  name: string;
  birthDate: string;
  cpf: string;
  cep: string;
}

export const RegisterForm = () => {
  const [userCep, setUserCep] = useState<string>();
  const [fullAdress, setFullAdress] = useState();
  const [userAdress, SetUserAdress] = useState<string>();
  const [userCity, SetUserCity] = useState<string>();
  const [userState, SetUserState] = useState<string>();


  useEffect(() => (
    const [fullAdress, setFullAdress] = useState();

  ), [])

  // const maybe = axios
  //   .get(`https://ws.apicep.com/cep/${userCep}.json`)
  //   .then((response) => setFullAdress(response.data));

  console.log(fullAdress);

  function onSubmit(values: Values, actions: any) {
    setUserCep(values.cep);

    console.log("Submit", values.cep);
  }

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          birthDate: "",
          cpf: "",
          cep: "",
        }}
        onSubmit={onSubmit}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="You name here"></Field>

          <label htmlFor="birthDate">Birth date</label>
          <Field
            id="birthDate"
            name="birthDate"
            placeholder="1997-20-02"
          ></Field>

          <label htmlFor="cpf">CPF</label>
          <Field id="cpf" name="cpf" placeholder="000.000.000-00"></Field>

          <label htmlFor="cep">CEP</label>
          <Field id="cep" name="cep" placeholder="62160000"></Field>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
