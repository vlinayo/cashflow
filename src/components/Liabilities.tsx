import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  CardActions,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface LiabilitiesProps {
  onNextStep: () => void;
  onBackStep: () => void;
}

const Liabilities = (props: LiabilitiesProps) => {
  const { onNextStep, onBackStep } = props;

  const [realstateBusinessGroup, setRealstateBusinessGroup] = useState([
    { realStateBusiness: "", mortgageLiability: "" },
  ]);

  const handleAddRealstateBusinessGroup = () => {
    setRealstateBusinessGroup([
      ...realstateBusinessGroup,
      { realStateBusiness: "", mortgageLiability: "" },
    ]);
  }

  const handleRemoveRealstateBusinessGroup = (index: number) => {
    setRealstateBusinessGroup(realstateBusinessGroup.filter((_, i) => i !== index));
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <CardHeader title="Enter your Liabilities:"></CardHeader>
        <Box display="flex" flexDirection="column" alignItems="stretch" gap={2}>
        <TextField id="home-morgage" label="Home Mortgage" variant="outlined" />
        <TextField id="school-loans" label="School Loans" variant="outlined" />
        <TextField id="car-loans" label="Car Loans" variant="outlined" />
        <TextField id="credit-cards" label="Credit Cards" variant="outlined" />
        <TextField id="loan" label="Loan" variant="outlined" />
          {/* Real State/Business group */}
          {realstateBusinessGroup.map((group, index) => 
          <Box key={index} display="flex" gap={1} alignItems="center">
            <TextField
              id={`real-state-business-${index}`}
              label="Real State/Business"
              value={group.realStateBusiness}
              variant="outlined"
              onChange={(e) => {
                const newGroups = [...realstateBusinessGroup];
                newGroups[index].realStateBusiness = e.target.value;
                setRealstateBusinessGroup(newGroups);
              }}
              fullWidth
            />
            <TextField
              id={`mortgage-liability-${index}`}
              label="Mortgage Liability"
              variant="outlined"
              value={group.mortgageLiability}
              onChange={(e) => {
                const newGroups = [...realstateBusinessGroup];
                newGroups[index].mortgageLiability = e.target.value;
                setRealstateBusinessGroup(newGroups);
              }}
              fullWidth

            />
                {index === 0 && realstateBusinessGroup.length > 1 && (
                  <IconButton
                    onClick={() => handleRemoveRealstateBusinessGroup(index)}
                    size="small"
                    disabled={realstateBusinessGroup.length <= 1}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                )}
                {index === 0 && (
                  <IconButton onClick={handleAddRealstateBusinessGroup} size="small">
                    <AddIcon fontSize="small" />
                  </IconButton>
                )}
          </Box>
          )}
        </Box>
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
              Start Game
            </Button>
          </Box>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Liabilities;
