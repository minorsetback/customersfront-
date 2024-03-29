import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useRouter } from "next/router";
import { Alert, IconButton, Snackbar } from "@mui/material";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ marginBottom: "50px" }}
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/minorsetback">
        Vladyslav Ievdokymov
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Form() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({
    name: "",
    email: "",
    descriprion: "",
    amount: "",
    kind_of_activity: "",
    target_audience: "",
    basic_colors: "",
    keywords: "",
    recommendations_for_site_structure: "",
    references: "",
    competitors: "",
    integrations: "",
    design: false,
  });
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await axios.post("https://customersback.vercel.app/form/create", {
      ...data,
    });

    setData({
      name: "",
      email: "",
      descriprion: "",
      amount: "",
      kind_of_activity: "",
      target_audience: "",
      basic_colors: "",
      keywords: "",
      recommendations_for_site_structure: "",
      references: "",
      competitors: "",
      integrations: "",
      design: false,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Form submitted successfully
        </Alert>
      </Snackbar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Tell us about your project
          </Typography>
          <Box
            component="form"
            id="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  value={data.name}
                  onChange={(e) => {
                    setData({ ...data, name: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  multiline
                  fullWidth
                  id="descriprion"
                  label="Describe your project"
                  name="descriprion"
                  autoComplete="email"
                  value={data.descriprion}
                  onChange={(e) => {
                    setData({ ...data, descriprion: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  fullWidth
                  id="amount"
                  label="What amount do you expect"
                  name="amount"
                  value={data.amount}
                  onChange={(e) => {
                    setData({ ...data, amount: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  fullWidth
                  id="kind_of_activity"
                  label="Kind of activity"
                  name="kind_of_activity"
                  value={data.kind_of_activity}
                  onChange={(e) => {
                    setData({ ...data, kind_of_activity: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  fullWidth
                  id="target_audience"
                  label="Target audiencet"
                  name="target_audience"
                  value={data.target_audience}
                  onChange={(e) => {
                    setData({ ...data, target_audience: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  fullWidth
                  id="basic_colors"
                  label="Basic colors"
                  name="basic_colors"
                  value={data.basic_colors}
                  onChange={(e) => {
                    setData({ ...data, basic_colors: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  fullWidth
                  id="keywords"
                  label="Keywords"
                  name="keywords"
                  value={data.keywords}
                  onChange={(e) => {
                    setData({ ...data, keywords: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  fullWidth
                  id="recommendations_for_site_structure"
                  label="Recommendations for site structure"
                  name="recommendations_for_site_structure"
                  value={data.recommendations_for_site_structure}
                  onChange={(e) => {
                    setData({ ...data, recommendations_for_site_structure: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  fullWidth
                  id="references"
                  label="References"
                  name="references"
                  value={data.references}
                  onChange={(e) => {
                    setData({ ...data, references: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  fullWidth
                  id="competitors"
                  label="Competitors"
                  name="competitors"
                  value={data.competitors}
                  onChange={(e) => {
                    setData({ ...data, competitors: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  fullWidth
                  id="integrations"
                  label="Integrations"
                  name="integrations"
                  value={data.integrations}
                  onChange={(e) => {
                    setData({ ...data, integrations: e.target.value });
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    id="design"
                    name="design"
                    color="primary"
                    value={data.design}
                    onChange={(e) => {
                      setData({ ...data, design: e.target.checked });
                    }}
                  />
                }
                label="Do you have design ?"
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleClick}
              sx={{ mt: 3, mb: 2 }}
            >
              SEND
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
