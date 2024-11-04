import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  CardActions,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface AssetsProps {
  onNextStep: () => void;
  onBackStep: () => void;
}

const Assets = (props: AssetsProps) => {
  const { onNextStep, onBackStep } = props;

  const [investmentGroups, setInvestmentGroups] = useState([
    { stocks: "", shares: "", cost: "" },
  ]);
  const [realEstateGroups, setRealEstateGroups] = useState([
    { business: "", downPay: "", cost: "" },
  ]);

  const handleAddInvestmentGroup = () => {
    setInvestmentGroups([
      ...investmentGroups,
      { stocks: "", shares: "", cost: "" },
    ]);
  };

  const handleRemoveInvestmentGroup = (index: number) => {
    setInvestmentGroups(investmentGroups.filter((_, i) => i !== index));
  };

  const handleAddRealEstateGroup = () => {
    setRealEstateGroups([
      ...realEstateGroups,
      { business: "", downPay: "", cost: "" },
    ]);
  };

  const handleRemoveRealEstateGroup = (index: number) => {
    setRealEstateGroups(realEstateGroups.filter((_, i) => i !== index));
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <CardHeader title="Enter your Assets:" />
        <Box display="flex" flexDirection="column" alignItems="stretch" gap={2}>
          <TextField
            id="savings"
            label="Savings"
            variant="outlined"
            fullWidth
          />

          {/* Investment Groups */}
          {investmentGroups.map((group, index) => (
            <Box key={index} display="flex" gap={1} alignItems="center">
              <TextField
                id={`stocks-funds-cds-${index}`}
                label="Stocks/Funds/CDs"
                variant="outlined"
                value={group.stocks}
                onChange={(e) => {
                  const newGroups = [...investmentGroups];
                  newGroups[index].stocks = e.target.value;
                  setInvestmentGroups(newGroups);
                }}
                fullWidth
              />
              <TextField
                id={`number-of-shares-${index}`}
                label="Number of Shares"
                variant="outlined"
                value={group.shares}
                onChange={(e) => {
                  const newGroups = [...investmentGroups];
                  newGroups[index].shares = e.target.value;
                  setInvestmentGroups(newGroups);
                }}
                fullWidth
              />
              <TextField
                id={`cost-per-share-${index}`}
                label="Cost/Share"
                variant="outlined"
                value={group.cost}
                onChange={(e) => {
                  const newGroups = [...investmentGroups];
                  newGroups[index].cost = e.target.value;
                  setInvestmentGroups(newGroups);
                }}
                fullWidth
              />
              {index === 0 && investmentGroups.length > 1 && (
                <IconButton
                  onClick={() => handleRemoveInvestmentGroup(index)}
                  size="small"
                  disabled={investmentGroups.length <= 1}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
              )}
              {index === 0 && (
                <IconButton onClick={handleAddInvestmentGroup} size="small">
                  <AddIcon fontSize="small" />
                </IconButton>
              )}
            </Box>
          ))}

          {/* Real Estate Groups */}
          {realEstateGroups.map((group, index) => (
            <Box key={index} display="flex" gap={1} alignItems="center">
              <TextField
                id={`real-state-business-${index}`}
                label="Real Estate Business"
                variant="outlined"
                value={group.business}
                onChange={(e) => {
                  const newGroups = [...realEstateGroups];
                  newGroups[index].business = e.target.value;
                  setRealEstateGroups(newGroups);
                }}
                fullWidth
              />
              <TextField
                id={`down-pay-${index}`}
                label="Down Pay"
                variant="outlined"
                value={group.downPay}
                onChange={(e) => {
                  const newGroups = [...realEstateGroups];
                  newGroups[index].downPay = e.target.value;
                  setRealEstateGroups(newGroups);
                }}
                fullWidth
              />
              <TextField
                id={`cost-${index}`}
                label="Cost"
                variant="outlined"
                value={group.cost}
                onChange={(e) => {
                  const newGroups = [...realEstateGroups];
                  newGroups[index].cost = e.target.value;
                  setRealEstateGroups(newGroups);
                }}
                fullWidth
              />
              {index === 0 && realEstateGroups.length > 1 && (
                <IconButton
                  onClick={() => handleRemoveRealEstateGroup(index)}
                  size="small"
                  disabled={realEstateGroups.length <= 1}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
              )}
              {index === 0 && (
                <IconButton onClick={handleAddRealEstateGroup} size="small">
                  <AddIcon fontSize="small" />
                </IconButton>
              )}
            </Box>
          ))}
        </Box>

        <CardActions>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Button variant="contained" onClick={onBackStep}>
              Back
            </Button>
            <Button variant="contained" onClick={onNextStep}>
              Next
            </Button>
          </Box>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Assets;
