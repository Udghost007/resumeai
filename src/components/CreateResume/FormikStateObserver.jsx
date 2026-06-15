import { useEffect, useRef } from "react";
import { useFormikContext } from "formik";

const FormikStateObserver = ({ onChange }) => {
  const { values } = useFormikContext();
  const onChangeRef = useRef(onChange);

  // Keep ref updated with latest callback reference
  useEffect(() => {
    onChangeRef.current = onChange;
  });

  useEffect(() => {
    if (onChangeRef.current) {
      onChangeRef.current(values);
    }
  }, [values]); // Only trigger when Formik values actually change

  return null;
};

export default FormikStateObserver;
