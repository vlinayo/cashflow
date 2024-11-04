import {
    Card,
    CardContent,
    CardHeader,
    TextField,
    CardActions,
    Button,
    Box,
  } from "@mui/material";
  
  interface ExpensesProps {
    onNextStep: () => void;
    onBackStep: () => void;
  }
  
  const Expenses = (props: ExpensesProps) => {
    const { onNextStep, onBackStep } = props;
  
    return (
      <Card variant="outlined">
        <CardContent>
          <CardHeader title="Enter your Expenses:" />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center" // Center items horizontally
            gap={2} // Adds equal spacing between items
          >
            <TextField id="taxes" label="Taxes" variant="outlined" fullWidth />
            <TextField
              id="home-mortgage-payment"
              label="Home Mortgage Payment"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="school-loan-payment"
              label="School Loan Payment"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="car-loan-payment"
              label="Car Loan Payment"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="credit-card-payment"
              label="Credit Card Payment"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="other-expenses"
              label="Other Expenses"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="child-expenses"
              helperText="N. of children x Per child expense"
              label="Child Expenses"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="loan-payment"
              label="Loan Payment"
              variant="outlined"
              fullWidth
            />
          </Box>
        </CardContent>
        <CardActions>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
          >
            <Button variant="contained" onClick={onBackStep}>
              Back
            </Button>
            <Button variant="contained" onClick={onNextStep}>
              Next
            </Button>
          </Box>
        </CardActions>
      </Card>
    );
  };
  
  export default Expenses;
  