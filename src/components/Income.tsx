import {
    Card,
    CardContent,
    CardHeader,
    TextField,
    CardActions,
    Button,
    Box,
  } from "@mui/material";
  
  interface IncomeProps {
    onNextStep: () => void;
  }
  
  const Income = (props: IncomeProps) => {
    const { onNextStep } = props;
  
    return (
      <Card variant="outlined">
        <CardContent>
          <CardHeader title="Enter your professional Income:" />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center" // Center items horizontally
            gap={2} // Adds equal spacing between items
          >
            <TextField id="salary" label="Salary" variant="outlined" fullWidth />
            <TextField
              id="interests-dividends"
              label="Interest/Dividends"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="real-state-business"
              label="Real State Business"
              variant="outlined"
              fullWidth
            />
          </Box>
        </CardContent>
        <CardActions style={{ justifyContent: 'flex-end' }}>
          <Button variant="contained" onClick={onNextStep}>
            Next
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default Income;
  