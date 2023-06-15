import { Button, Modal, Paper, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  employeeType: Yup.string().required("Employee Type is required"),
});

const EditUserModal = () => {
  const [view, setView] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(
        "http://59.152.62.177:8085/api/Employee/EmployeeData"
      );
      const data = await res.json();

      setUsers(data.readEmployeeData);
    };
    fetchUsers();
  }, []);
  const { id } = useParams();
  const user = users.find((user) => user.empID === Number(id));

  const handleSubmit = async (values) => {
    await fetch(
      `http://59.152.62.177:8085/api/UpdateEmployeeInformation/${id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin":
            "http://59.152.62.177:8085/api/SaveEmployeeInformation",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
  };

  if (!user) {
    return null;
  }

  return (
    <div>
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
            <Formik validationSchema={validationSchema} onSubmit={handleSubmit}>
              <Form>
                <div style={{ marginBottom: "25px" }}>
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
                <div style={{ marginBottom: "25px" }}>
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
                <div style={{ marginBottom: "25px" }}>
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
                  <Button type="submit" variant="contained" color="primary">
                    Update
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
    </div>
  );
};

export default EditUserModal;
