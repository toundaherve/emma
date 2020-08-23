import React, { useState } from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import Button from "../components/Button";
import Divider from "../components/Divider";
import { Input, Select } from "../components/Inputs";
import {
  SimpleActionTemplate,
  WithCTAActionTemplate,
} from "../layouts/ActionTemplate";

const Method = ({ img, name, onClick }) => {
  return (
    <Grid item container alignItems="center" onClick={onClick}>
      <Grid item>
        <Box
          height="56px"
          width="56px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img style={{ width: "22px" }} src={img} />
        </Box>
      </Grid>

      <Grid item>
        <Typography variant="body2">{name}</Typography>
      </Grid>
    </Grid>
  );
};

const AddPaymentMethod = ({ onAddCreditCardClick, onPaypalClick }) => {
  return (
    <SimpleActionTemplate title="Add Payment Method">
      <Box>
        <Method
          name="Credit or debit card"
          img="https://d3i4yxtzktqr9n.cloudfront.net/web-payments-experience/c60c8b82319cdae367fbda262219d47e.svg"
          onClick={onAddCreditCardClick}
        />
        <Method
          name="Paypal"
          img="https://d3i4yxtzktqr9n.cloudfront.net/web-payments-experience/0efa900c7a49d597f23b4168defed2d0.svg"
          onClick={onPaypalClick}
        />
      </Box>
    </SimpleActionTemplate>
  );
};

const AddCreditCardOrDebitCard = ({ onAddCardClick }) => {
  return (
    <WithCTAActionTemplate
      title="Add credit or debit card"
      ctaText="Add card"
      onButtonClick={onAddCardClick}
    >
      <Box mb={12}>
        <Grid item container spacing={2}>
          <CardDetail title="Card Number" />
          <CardDetail title="Exp. Date" placeholder="MM / YY" cols={6} />
          <CardDetail title="Security Code" cols={6} />
          <CardDetail title="Country" select />
          <CardDetail title="Zip Code" />
        </Grid>
      </Box>
    </WithCTAActionTemplate>
  );
};

const CardDetail = ({ title, cols = 12, select, placeholder = "" }) => {
  return (
    <Grid item xs={cols} container direction="column" spacing={1}>
      <Grid item>
        <Typography variant="body1">{title}</Typography>
      </Grid>
      <Grid item>
        {select ? (
          <Select fullWidth />
        ) : (
          <Input fullWidth placeholder={placeholder} />
        )}
      </Grid>
    </Grid>
  );
};

const AddPaypal = () => {
  return (
    <SimpleActionTemplate title="Add Paypal">
      <Box>
        <Grid container direction="column" spacing={5}>
          <Grid item>
            <Typography variant="body2">
              You will be re-directed to PayPal to verify your account.
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" fullWidth>
              <span style={{ display: "flex" }}>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNCAzMiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCIgeG1sbnM9Imh0dHA6JiN4MkY7JiN4MkY7d3d3LnczLm9yZyYjeDJGOzIwMDAmI3gyRjtzdmciPjxwYXRoIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuNyIgZD0iTSAyMC45MjQgNy4xNTcgQyAyMS4yMDQgNS4wNTcgMjAuOTI0IDMuNjU3IDE5LjgwMSAyLjM1NyBDIDE4LjU4MyAwLjk1NyAxNi40MyAwLjI1NyAxMy43MTYgMC4yNTcgTCA1Ljc1OCAwLjI1NyBDIDUuMjkgMC4yNTcgNC43MjkgMC43NTcgNC42MzQgMS4yNTcgTCAxLjM1OCAyMy40NTcgQyAxLjM1OCAyMy44NTcgMS42MzkgMjQuMzU3IDIuMTA3IDI0LjM1NyBMIDYuOTc1IDI0LjM1NyBMIDYuNjk0IDI2LjU1NyBDIDYuNiAyNi45NTcgNi44ODEgMjcuMjU3IDcuMjU1IDI3LjI1NyBMIDExLjM3NSAyNy4yNTcgQyAxMS44NDQgMjcuMjU3IDEyLjMxMSAyNi45NTcgMTIuNDA1IDI2LjQ1NyBMIDEyLjQwNSAyNi4xNTcgTCAxMy4yNDcgMjAuOTU3IEwgMTMuMjQ3IDIwLjc1NyBDIDEzLjM0MSAyMC4yNTcgMTMuODA5IDE5Ljg1NyAxNC4yNzcgMTkuODU3IEwgMTQuODQgMTkuODU3IEMgMTguODY0IDE5Ljg1NyAyMS45NTQgMTguMTU3IDIyLjg5IDEzLjE1NyBDIDIzLjM1OCAxMS4wNTcgMjMuMTcyIDkuMzU3IDIyLjA0OCA4LjE1NyBDIDIxLjc2NyA3Ljc1NyAyMS4yOTggNy40NTcgMjAuOTI0IDcuMTU3IEwgMjAuOTI0IDcuMTU3Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC43IiBkPSJNIDIwLjkyNCA3LjE1NyBDIDIxLjIwNCA1LjA1NyAyMC45MjQgMy42NTcgMTkuODAxIDIuMzU3IEMgMTguNTgzIDAuOTU3IDE2LjQzIDAuMjU3IDEzLjcxNiAwLjI1NyBMIDUuNzU4IDAuMjU3IEMgNS4yOSAwLjI1NyA0LjcyOSAwLjc1NyA0LjYzNCAxLjI1NyBMIDEuMzU4IDIzLjQ1NyBDIDEuMzU4IDIzLjg1NyAxLjYzOSAyNC4zNTcgMi4xMDcgMjQuMzU3IEwgNi45NzUgMjQuMzU3IEwgOC4yODYgMTYuMDU3IEwgOC4xOTIgMTYuMzU3IEMgOC4yODYgMTUuNzU3IDguNzU0IDE1LjM1NyA5LjMxNSAxNS4zNTcgTCAxMS42NTUgMTUuMzU3IEMgMTYuMjQzIDE1LjM1NyAxOS44MDEgMTMuMzU3IDIwLjkyNCA3Ljc1NyBDIDIwLjgzMSA3LjQ1NyAyMC45MjQgNy4zNTcgMjAuOTI0IDcuMTU3Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZD0iTSA5LjUwNCA3LjE1NyBDIDkuNTk2IDYuODU3IDkuNzg0IDYuNTU3IDEwLjA2NSA2LjM1NyBDIDEwLjI1MSA2LjM1NyAxMC4zNDUgNi4yNTcgMTAuNTMyIDYuMjU3IEwgMTYuNzExIDYuMjU3IEMgMTcuNDYxIDYuMjU3IDE4LjIwOCA2LjM1NyAxOC43NzIgNi40NTcgQyAxOC45NTggNi40NTcgMTkuMTQ2IDYuNDU3IDE5LjMzMyA2LjU1NyBDIDE5LjUyIDYuNjU3IDE5LjcwNyA2LjY1NyAxOS44MDEgNi43NTcgQyAxOS44OTQgNi43NTcgMTkuOTg3IDYuNzU3IDIwLjA4MiA2Ljc1NyBDIDIwLjM2MiA2Ljg1NyAyMC42NDMgNy4wNTcgMjAuOTI0IDcuMTU3IEMgMjEuMjA0IDUuMDU3IDIwLjkyNCAzLjY1NyAxOS44MDEgMi4yNTcgQyAxOC42NzcgMC44NTcgMTYuNTI1IDAuMjU3IDEzLjgwOSAwLjI1NyBMIDUuNzU4IDAuMjU3IEMgNS4yOSAwLjI1NyA0LjcyOSAwLjY1NyA0LjYzNCAxLjI1NyBMIDEuMzU4IDIzLjQ1NyBDIDEuMzU4IDIzLjg1NyAxLjYzOSAyNC4zNTcgMi4xMDcgMjQuMzU3IEwgNi45NzUgMjQuMzU3IEwgOC4yODYgMTYuMDU3IEwgOS41MDQgNy4xNTcgWiI+PC9wYXRoPjwvc3ZnPg==" />
                <span style={{ width: "4px" }} />
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0IiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSAxMi4yMzcgMi40NDQgTCA0LjQzNyAyLjQ0NCBDIDMuOTM3IDIuNDQ0IDMuNDM3IDIuODQ0IDMuMzM3IDMuMzQ0IEwgMC4yMzcgMjMuMzQ0IEMgMC4xMzcgMjMuNzQ0IDAuNDM3IDI0LjA0NCAwLjgzNyAyNC4wNDQgTCA0LjUzNyAyNC4wNDQgQyA1LjAzNyAyNC4wNDQgNS41MzcgMjMuNjQ0IDUuNjM3IDIzLjE0NCBMIDYuNDM3IDE3Ljc0NCBDIDYuNTM3IDE3LjI0NCA2LjkzNyAxNi44NDQgNy41MzcgMTYuODQ0IEwgMTAuMDM3IDE2Ljg0NCBDIDE1LjEzNyAxNi44NDQgMTguMTM3IDE0LjM0NCAxOC45MzcgOS40NDQgQyAxOS4yMzcgNy4zNDQgMTguOTM3IDUuNjQ0IDE3LjkzNyA0LjQ0NCBDIDE2LjgzNyAzLjE0NCAxNC44MzcgMi40NDQgMTIuMjM3IDIuNDQ0IFogTSAxMy4xMzcgOS43NDQgQyAxMi43MzcgMTIuNTQ0IDEwLjUzNyAxMi41NDQgOC41MzcgMTIuNTQ0IEwgNy4zMzcgMTIuNTQ0IEwgOC4xMzcgNy4zNDQgQyA4LjEzNyA3LjA0NCA4LjQzNyA2Ljg0NCA4LjczNyA2Ljg0NCBMIDkuMjM3IDYuODQ0IEMgMTAuNjM3IDYuODQ0IDExLjkzNyA2Ljg0NCAxMi42MzcgNy42NDQgQyAxMy4xMzcgOC4wNDQgMTMuMzM3IDguNzQ0IDEzLjEzNyA5Ljc0NCBaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSAzNS40MzcgOS42NDQgTCAzMS43MzcgOS42NDQgQyAzMS40MzcgOS42NDQgMzEuMTM3IDkuODQ0IDMxLjEzNyAxMC4xNDQgTCAzMC45MzcgMTEuMTQ0IEwgMzAuNjM3IDEwLjc0NCBDIDI5LjgzNyA5LjU0NCAyOC4wMzcgOS4xNDQgMjYuMjM3IDkuMTQ0IEMgMjIuMTM3IDkuMTQ0IDE4LjYzNyAxMi4yNDQgMTcuOTM3IDE2LjY0NCBDIDE3LjUzNyAxOC44NDQgMTguMDM3IDIwLjk0NCAxOS4zMzcgMjIuMzQ0IEMgMjAuNDM3IDIzLjY0NCAyMi4xMzcgMjQuMjQ0IDI0LjAzNyAyNC4yNDQgQyAyNy4zMzcgMjQuMjQ0IDI5LjIzNyAyMi4xNDQgMjkuMjM3IDIyLjE0NCBMIDI5LjAzNyAyMy4xNDQgQyAyOC45MzcgMjMuNTQ0IDI5LjIzNyAyMy45NDQgMjkuNjM3IDIzLjk0NCBMIDMzLjAzNyAyMy45NDQgQyAzMy41MzcgMjMuOTQ0IDM0LjAzNyAyMy41NDQgMzQuMTM3IDIzLjA0NCBMIDM2LjEzNyAxMC4yNDQgQyAzNi4yMzcgMTAuMDQ0IDM1LjgzNyA5LjY0NCAzNS40MzcgOS42NDQgWiBNIDMwLjMzNyAxNi44NDQgQyAyOS45MzcgMTguOTQ0IDI4LjMzNyAyMC40NDQgMjYuMTM3IDIwLjQ0NCBDIDI1LjAzNyAyMC40NDQgMjQuMjM3IDIwLjE0NCAyMy42MzcgMTkuNDQ0IEMgMjMuMDM3IDE4Ljc0NCAyMi44MzcgMTcuODQ0IDIzLjAzNyAxNi44NDQgQyAyMy4zMzcgMTQuNzQ0IDI1LjEzNyAxMy4yNDQgMjcuMjM3IDEzLjI0NCBDIDI4LjMzNyAxMy4yNDQgMjkuMTM3IDEzLjY0NCAyOS43MzcgMTQuMjQ0IEMgMzAuMjM3IDE0Ljk0NCAzMC40MzcgMTUuODQ0IDMwLjMzNyAxNi44NDQgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0gNTUuMzM3IDkuNjQ0IEwgNTEuNjM3IDkuNjQ0IEMgNTEuMjM3IDkuNjQ0IDUwLjkzNyA5Ljg0NCA1MC43MzcgMTAuMTQ0IEwgNDUuNTM3IDE3Ljc0NCBMIDQzLjMzNyAxMC40NDQgQyA0My4yMzcgOS45NDQgNDIuNzM3IDkuNjQ0IDQyLjMzNyA5LjY0NCBMIDM4LjYzNyA5LjY0NCBDIDM4LjIzNyA5LjY0NCAzNy44MzcgMTAuMDQ0IDM4LjAzNyAxMC41NDQgTCA0Mi4xMzcgMjIuNjQ0IEwgMzguMjM3IDI4LjA0NCBDIDM3LjkzNyAyOC40NDQgMzguMjM3IDI5LjA0NCAzOC43MzcgMjkuMDQ0IEwgNDIuNDM3IDI5LjA0NCBDIDQyLjgzNyAyOS4wNDQgNDMuMTM3IDI4Ljg0NCA0My4zMzcgMjguNTQ0IEwgNTUuODM3IDEwLjU0NCBDIDU2LjEzNyAxMC4yNDQgNTUuODM3IDkuNjQ0IDU1LjMzNyA5LjY0NCBaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSA2Ny43MzcgMi40NDQgTCA1OS45MzcgMi40NDQgQyA1OS40MzcgMi40NDQgNTguOTM3IDIuODQ0IDU4LjgzNyAzLjM0NCBMIDU1LjczNyAyMy4yNDQgQyA1NS42MzcgMjMuNjQ0IDU1LjkzNyAyMy45NDQgNTYuMzM3IDIzLjk0NCBMIDYwLjMzNyAyMy45NDQgQyA2MC43MzcgMjMuOTQ0IDYxLjAzNyAyMy42NDQgNjEuMDM3IDIzLjM0NCBMIDYxLjkzNyAxNy42NDQgQyA2Mi4wMzcgMTcuMTQ0IDYyLjQzNyAxNi43NDQgNjMuMDM3IDE2Ljc0NCBMIDY1LjUzNyAxNi43NDQgQyA3MC42MzcgMTYuNzQ0IDczLjYzNyAxNC4yNDQgNzQuNDM3IDkuMzQ0IEMgNzQuNzM3IDcuMjQ0IDc0LjQzNyA1LjU0NCA3My40MzcgNC4zNDQgQyA3Mi4yMzcgMy4xNDQgNzAuMzM3IDIuNDQ0IDY3LjczNyAyLjQ0NCBaIE0gNjguNjM3IDkuNzQ0IEMgNjguMjM3IDEyLjU0NCA2Ni4wMzcgMTIuNTQ0IDY0LjAzNyAxMi41NDQgTCA2Mi44MzcgMTIuNTQ0IEwgNjMuNjM3IDcuMzQ0IEMgNjMuNjM3IDcuMDQ0IDYzLjkzNyA2Ljg0NCA2NC4yMzcgNi44NDQgTCA2NC43MzcgNi44NDQgQyA2Ni4xMzcgNi44NDQgNjcuNDM3IDYuODQ0IDY4LjEzNyA3LjY0NCBDIDY4LjYzNyA4LjA0NCA2OC43MzcgOC43NDQgNjguNjM3IDkuNzQ0IFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNIDkwLjkzNyA5LjY0NCBMIDg3LjIzNyA5LjY0NCBDIDg2LjkzNyA5LjY0NCA4Ni42MzcgOS44NDQgODYuNjM3IDEwLjE0NCBMIDg2LjQzNyAxMS4xNDQgTCA4Ni4xMzcgMTAuNzQ0IEMgODUuMzM3IDkuNTQ0IDgzLjUzNyA5LjE0NCA4MS43MzcgOS4xNDQgQyA3Ny42MzcgOS4xNDQgNzQuMTM3IDEyLjI0NCA3My40MzcgMTYuNjQ0IEMgNzMuMDM3IDE4Ljg0NCA3My41MzcgMjAuOTQ0IDc0LjgzNyAyMi4zNDQgQyA3NS45MzcgMjMuNjQ0IDc3LjYzNyAyNC4yNDQgNzkuNTM3IDI0LjI0NCBDIDgyLjgzNyAyNC4yNDQgODQuNzM3IDIyLjE0NCA4NC43MzcgMjIuMTQ0IEwgODQuNTM3IDIzLjE0NCBDIDg0LjQzNyAyMy41NDQgODQuNzM3IDIzLjk0NCA4NS4xMzcgMjMuOTQ0IEwgODguNTM3IDIzLjk0NCBDIDg5LjAzNyAyMy45NDQgODkuNTM3IDIzLjU0NCA4OS42MzcgMjMuMDQ0IEwgOTEuNjM3IDEwLjI0NCBDIDkxLjYzNyAxMC4wNDQgOTEuMzM3IDkuNjQ0IDkwLjkzNyA5LjY0NCBaIE0gODUuNzM3IDE2Ljg0NCBDIDg1LjMzNyAxOC45NDQgODMuNzM3IDIwLjQ0NCA4MS41MzcgMjAuNDQ0IEMgODAuNDM3IDIwLjQ0NCA3OS42MzcgMjAuMTQ0IDc5LjAzNyAxOS40NDQgQyA3OC40MzcgMTguNzQ0IDc4LjIzNyAxNy44NDQgNzguNDM3IDE2Ljg0NCBDIDc4LjczNyAxNC43NDQgODAuNTM3IDEzLjI0NCA4Mi42MzcgMTMuMjQ0IEMgODMuNzM3IDEzLjI0NCA4NC41MzcgMTMuNjQ0IDg1LjEzNyAxNC4yNDQgQyA4NS43MzcgMTQuOTQ0IDg1LjkzNyAxNS44NDQgODUuNzM3IDE2Ljg0NCBaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTSA5NS4zMzcgMi45NDQgTCA5Mi4xMzcgMjMuMjQ0IEMgOTIuMDM3IDIzLjY0NCA5Mi4zMzcgMjMuOTQ0IDkyLjczNyAyMy45NDQgTCA5NS45MzcgMjMuOTQ0IEMgOTYuNDM3IDIzLjk0NCA5Ni45MzcgMjMuNTQ0IDk3LjAzNyAyMy4wNDQgTCAxMDAuMjM3IDMuMTQ0IEMgMTAwLjMzNyAyLjc0NCAxMDAuMDM3IDIuNDQ0IDk5LjYzNyAyLjQ0NCBMIDk2LjAzNyAyLjQ0NCBDIDk1LjYzNyAyLjQ0NCA5NS40MzcgMi42NDQgOTUuMzM3IDIuOTQ0IFoiPjwvcGF0aD48L3N2Zz4=" />
              </span>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </SimpleActionTemplate>
  );
};

const ADD_PAYMENT_METHOD = "add-payment-method";
const ADD_CREDIT_OR_DEBIT_CARD = "add-credit-or-debit-card";
const ADD_PAYPAL = "add-paypal";

const PaymentMethodSelection = ({ onFinish }) => {
  const [stage, setStage] = useState(ADD_PAYMENT_METHOD);

  function openAddCreditorDebitCard() {
    setStage(ADD_CREDIT_OR_DEBIT_CARD);
  }

  function openAddPaypal() {
    setStage(ADD_PAYPAL);
  }

  switch (stage) {
    case ADD_PAYMENT_METHOD:
      return (
        <AddPaymentMethod
          onAddCreditCardClick={openAddCreditorDebitCard}
          onPaypalClick={openAddPaypal}
        />
      );

    case ADD_CREDIT_OR_DEBIT_CARD:
      return <AddCreditCardOrDebitCard onAddCardClick={onFinish} />;

    case ADD_PAYPAL:
      return <AddPaypal />;

    default:
      return;
  }
};

export default PaymentMethodSelection;
