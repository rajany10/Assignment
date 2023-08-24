import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const departments = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

export default function LeftSidebar() {
  const [checked, setChecked] = React.useState([false, false]);
  const [checkedSecondDept, setCheckedSecondDept] = React.useState([
    false,
    false,
    false,
  ]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedSecondDept([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedSecondDept([
      event.target.checked,
      checkedSecondDept[1],
      checkedSecondDept[2],
    ]);
  };

  const handleChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedSecondDept([
      checkedSecondDept[0],
      event.target.checked,
      checkedSecondDept[2],
    ]);
  };

  const handleChange7 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedSecondDept([
      checkedSecondDept[0],
      checkedSecondDept[1],
      event.target.checked,
    ]);
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label={departments[0].sub_departments[0]}
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label={departments[0].sub_departments[1]}
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  const children2 = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label={departments[1].sub_departments[0]}
        control={
          <Checkbox checked={checkedSecondDept[0]} onChange={handleChange5} />
        }
      />
      <FormControlLabel
        label={departments[1].sub_departments[1]}
        control={
          <Checkbox checked={checkedSecondDept[1]} onChange={handleChange6} />
        }
      />
      <FormControlLabel
        label={departments[1].sub_departments[2]}
        control={
          <Checkbox checked={checkedSecondDept[2]} onChange={handleChange7} />
        }
      />
    </Box>
  );

  return (
    <div style={{marginTop: "36px", width: "360px"}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <FormControlLabel
            label={departments[0].department}
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
          />
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <FormControlLabel
            label={departments[1].department}
            control={
              <Checkbox
                checked={
                  checkedSecondDept[0] &&
                  checkedSecondDept[1] &&
                  checkedSecondDept[2]
                }
                indeterminate={new Set(checkedSecondDept).size > 1}
                onChange={handleChange4}
              />
            }
          />
        </AccordionSummary>
        <AccordionDetails>{children2}</AccordionDetails>
      </Accordion>
    </div>
  );
}
