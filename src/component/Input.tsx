type InputProps = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    value: string;
  };
  
  export const Input = (props: InputProps) => {
    return (
      <input
        type="text"
        value={props.value}
        onChange={props.handleChange} // This now matches the expected type
        placeholder={props.placeholder}
      />
    );
  };