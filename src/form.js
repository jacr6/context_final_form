import React, { useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import Styles from "./Styles";
import { ParentContext } from "./context";
import { OnChange } from "react-final-form-listeners";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const FinalForm = props => {
  console.log("FinalForm props: ", props);
  const [getMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Styles>
      <Form
        onSubmit={
          getMounted
            ? async values => {
                await sleep(300);
                window.alert(JSON.stringify(values, 0, 2));
              }
            : () =>
                window.alert("You are incorrectly calling an outdated onSubmit")
        }
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>verificacion</label>
              <ParentContext get={["verificacion"]}>
                {verificacion => {
                  console.log("FinalForm verificacion: ", verificacion);
                  return (
                    <div>
                      <Field
                        name="verificacion"
                        component="input"
                        type="text"
                        placeholder="verificacion"
                      />
                      <OnChange name={"verificacion"}>
                        {(value, previous) => {
                          verificacion.set({
                            ...verificacion.get,
                            valor: true,
                            otroValor: true,
                            input: value
                          });
                        }}
                      </OnChange>
                    </div>
                  );
                }}
              </ParentContext>
            </div>
            <div>
              <label>digitacion</label>
              <ParentContext get={["digitacion"]}>
                {digitacion => {
                  console.log("FinalForm digitacion: ", digitacion);
                  return (
                    <div>
                      <Field
                        name="digitacion"
                        component="input"
                        type="text"
                        placeholder="digitacion"
                      />
                      <OnChange name={"digitacion"}>
                        {(value, previous) => {
                          digitacion.set({
                            ...digitacion.get,
                            valor: true,
                            otroValor: true,
                            input: value
                          });
                        }}
                      </OnChange>
                    </div>
                  );
                }}
              </ParentContext>
            </div>
            <div>
              <label>aprobacion</label>
              <ParentContext get={["aprobacion"]}>
                {aprobacion => {
                  console.log("FinalForm aprobacion: ", aprobacion);
                  return (
                    <div>
                      <Field
                        name="aprobacion"
                        component="input"
                        type="text"
                        placeholder="aprobacion"
                      />
                      <OnChange name={"aprobacion"}>
                        {(value, previous) => {
                          aprobacion.set({
                            ...aprobacion.get,
                            valor: true,
                            otroValor: true,
                            input: value
                          });
                        }}
                      </OnChange>
                    </div>
                  );
                }}
              </ParentContext>
            </div>
            <div>
              <label>documentos</label>
              <ParentContext get={["documentos"]}>
                {documentos => {
                  console.log("FinalForm documentos: ", documentos);
                  return (
                    <div>
                      <Field
                        name="documentos"
                        component="input"
                        type="text"
                        placeholder="documentos"
                      />
                      <OnChange name={"documentos"}>
                        {(value, previous) => {
                          documentos.set({
                            ...documentos.get,
                            valor: true,
                            otroValor: true,
                            input: value
                          });
                        }}
                      </OnChange>
                    </div>
                  );
                }}
              </ParentContext>
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify({ values, mounted: getMounted }, 0, 2)}</pre>
          </form>
        )}
      />
    </Styles>
  );
};
