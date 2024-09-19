import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import { Header } from "../../components";
import { Formik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const Form = () => {
  const [loginUser, setLoginUser] = useState(null);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // console.log(loginUser)
  const initialValues = {
    firstName: loginUser?.firstName || "",
    lastName: loginUser?.lastName || "",
    contact: loginUser?.contact || "",
    address1: loginUser?.address1 || "",
    address2: loginUser?.address2 || "",
  };

  const handleFormSubmit = async (values, actions) => {
    try {
      const localData = JSON.parse(localStorage.getItem("token"));
      if (!localData || !localData.token) {
        console.error("No token found");
        return;
      }
  
      const response = await axios.put(
        "http://localhost:8080/api/userUpdate",
        {
          firstName: values.firstName,
          lastName: values.lastName,
          contact: values.contact,
          address1: values.address1,
          address2: values.address2,
        },
        {
          headers: {
            Authorization: `Bearer ${localData.token}`,
          },
        }
      );
  
      // console.log(values);
      // console.log(response.data);
      actions.resetForm({
        values: initialValues,
      });
      window.location.reload();
    } catch (error) {
      console.error("Error updating user", error);
    }
  };
  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const localData = (JSON.parse(localStorage.getItem("token")))
        
        if (localStorage.getItem("token") === null) {
          window.location.href = "/login";
        } else {
          const response = await axios.get("http://localhost:8080/api/getUser", {
            headers: {
              Authorization: `Bearer ${localData.token}`,
            },
          });
          setLoginUser(response.data?.user);
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Box m="20px">
      <Header title="UPDATE USER" subtitle="Update User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        enableReinitialize={true}
        initialValues={{
          firstName: loginUser?.firstName || "",
          lastName: loginUser?.lastName || "",
          contact: loginUser?.contact || "",
          address1: loginUser?.address1 || "",
          address2: loginUser?.address2 || "",
        }}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 4",
                },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!(touched.lastName && errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!(touched.contact && errors.contact)}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!(touched.address1 && errors.address1)}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!(touched.address2 && errors.address2)}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="end"
              mt="20px"
            >
              <Button type="submit" color="secondary" variant="contained">
                Update User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
