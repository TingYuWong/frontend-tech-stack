import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

export type CustomInputBaseProps = {
  value: string;
  handleValueChange: any;
};

const CustomizedInput = styled(TextField)({
  backgroundColor: "#fff",
  borderRadius: "8px",
  height: "80px",
  "& .MuiOutlinedInput-input": {
    borderRadius: "8px",
    height: "80px",
    fontSize: "30px",
    fontWeight: 600,
    color: "#ff7f50",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    height: "80px",
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#ffcab7",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ff7f50",
    },
  },
});

export default function CustomInput({
  value,
  handleValueChange,
}: CustomInputBaseProps) {
  return (
    <CustomizedInput
      fullWidth
      size="small"
      value={value}
      onChange={handleValueChange}
    />
  );
}
