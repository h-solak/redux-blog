export const RqErrorMessage = (errors, touched) => {
  return (
    <div style={{ color: "red", zIndex: 1 }}>
      {errors && touched ? errors : ""}
    </div>
  );
};
