import { Formik, Field, Form } from "formik";
import { FormStructure } from "./styles";

interface User {
  nome: string;
  cpf: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export function RegisterForm() {
  function onSubmit(values: any, actions: any) {
    const user = {
      nome: values.nome,
      cpf: values.cpf,
      cep: values.cep,
      lagradouro: values.lagradouro,
      numero: values.numero,
      bairro: values.bairro,
      cidade: values.cidade,
      uf: values.uf,
    };

    alert("Obrigado por realiar o cadastro, entraremos em contato em breve");
    console.log("NEW USER", user);
  }

  function validetCpf(ev: any, setFieldValue: any) {
    const { value } = ev.target;
    const cpf = value?.replace(/[^0-9]/g, "");

    setFieldValue("cpf", cpf);
  }

  function onBlurCep(ev: any, setFieldValue: any) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue("logradouro", data.logradouro);
        setFieldValue("bairro", data.bairro);
        setFieldValue("cidade", data.localidade);
        setFieldValue("uf", data.uf);
      });
  }

  return (
    <FormStructure>
      <Formik
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          nome: "",
          cpf: "",
          cep: "",
          logradouro: "",
          numero: "",
          complemento: "",
          bairro: "",
          cidade: "",
          uf: "",
        }}
        render={({ isValid, setFieldValue }) => (
          <Form>
            <div className="form-control-group">
              <label>Nome</label>
              <Field name="nome" type="text" />
            </div>

            <div className="form-control-group">
              <label>Data de nascimento</label>
              <Field name="data-de-nascimento" type="text" />
            </div>

            <div className="form-control-group">
              <label>CPF</label>
              <Field
                name="cpf"
                type="text"
                onBlur={(ev: any) => validetCpf(ev, setFieldValue)}
              />
            </div>

            <div className="form-control-group">
              <label>Cep</label>
              <Field
                name="cep"
                type="text"
                onBlur={(ev: any) => onBlurCep(ev, setFieldValue)}
              />
            </div>
            <div className="form-control-group">
              <label>Logradouro</label>
              <Field name="logradouro" type="text" />
            </div>
            <div className="form-control-group">
              <label>Número</label>
              <Field name="numero" type="text" />
            </div>
            <div className="form-control-group">
              <label>Complemento</label>
              <Field name="complemento" type="text" />
            </div>
            <div className="form-control-group">
              <label>bairro</label>
              <Field name="bairro" type="text" />
            </div>
            <div className="form-control-group">
              <label>Cidade</label>
              <Field name="cidade" type="text" />
            </div>
            <div className="form-control-group">
              <label>Estado</label>
              <Field type="text" name="uf"></Field>
            </div>
            <button type="submit" disabled={!isValid}>
              Register
            </button>
          </Form>
        )}
      />
    </FormStructure>
  );
}
