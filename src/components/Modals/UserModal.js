import { Button, Modal, Paper, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  employeeType: Yup.string().required("Employee Type is required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  employeeType: "",
  districtID: 0,
};

export default function UserModal({ view, setView }) {
  const handleSubmit = async (values) => {
    const res = await fetch(
      "http://59.152.62.177:8085/api/SaveEmployeeInformation",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin":
            "http://59.152.62.177:8085/api/SaveEmployeeInformation",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    console.log(await res,values);
  };
  return (
    <>
      <Modal open={view} onClose={() => setView((m) => !m)}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Paper sx={{ padding: "2rem", width: "600px" }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Add User
            </Typography>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div style={{ marginBottom: "1rem" }}>
                  <Field
                    name="firstName"
                    label="First Name"
                    as={TextField}
                    fullWidth
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    style={{ color: "red" }}
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <Field
                    name="lastName"
                    label="Last Name"
                    as={TextField}
                    fullWidth
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    style={{ color: "red" }}
                  />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <Field
                    name="employeeType"
                    label="Employee Type"
                    as={TextField}
                    fullWidth
                  />
                  <ErrorMessage
                    name="employeeType"
                    component="div"
                    style={{ color: "red" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                  }}
                >
                  <Button type="submit" variant="contained">
                    Save
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    color="error"
                    onClick={() => setView((m) => !m)}
                  >
                    Close
                  </Button>
                </div>
              </Form>
            </Formik>
          </Paper>
        </div>
      </Modal>
    </>
  );
}
