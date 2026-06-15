import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { updateResume } from "../../pages/Resume/Slice/action";
import { summarySchema } from "../../Schemas/Schemas";
import { generateAiAction } from "../../services/generateAiAction";
import { SummaryPrompt } from "../prompt/SummaryPrompt";
import PrimaryButton from "../ui/Buttons/PrimaryButton";
import NormalTextArea from "../ui/InputField/NormalTextArea";
import FormikStateObserver from "./FormikStateObserver";

const ProfessionalSummary = ({ onNext, onChange, id }) => {
  const selectedResume = useAppSelector((state) => state.resume.selectedResume);
  const dispatch = useAppDispatch();

  const initialValues = {
    summary: selectedResume?.summary || "",
  };

  const handleSubmit = async (values) => {
    try {
      const payload = {
        summary: values.summary,
      };
      const result = await dispatch(
        updateResume({ id: id, resumeData: payload }),
      ).unwrap();
      onNext();
      toast.success("Professional summary saved successfully.");
      console.log("Professional Summary:", result);
    } catch (error) {
      console.error("Save summary failed:", error);
      toast.error(error?.message || "Failed to save professional summary.");
    }
  };

  const handleGenerateAI = async (setFieldValue) => {
    try {
      const prompt = SummaryPrompt();
      const resp = await dispatch(generateAiAction(prompt)).unwrap();
      const options = resp?.description_options;

      console.log("AI Response:", options);

      if (!options || !Array.isArray(options)) {
        return;
      }

      const summaryText = options
        .map((option) => {
          const bullets = Array.isArray(option.bullets)
            ? option.bullets.map((bullet) => `- ${bullet}`).join("\n")
            : "";
          return options.length > 1
            ? `Option ${option.option_number || ""}\n${bullets}`.trim()
            : bullets;
        })
        .join("\n\n");

      setFieldValue("summary", summaryText);
    } catch (error) {
      console.error("AI generation failed:", error);
      toast.error(error?.message || "Failed to generate AI summary.");
    }
  };

  return (
    <div className="">
      <Formik
        initialValues={initialValues}
        validationSchema={summarySchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
          <Form>
            <FormikStateObserver onChange={(val) => onChange({ summary: val.summary })} />

            <NormalTextArea
              name="summary"
              rows={8}
              placeholder="Write your professional summary..."
              value={values.summary}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.summary && errors.summary}
            />

            <div className="flex justify-between mt-6">
              <PrimaryButton
                type="button"
                text="Generate with AI"
                onClick={() => handleGenerateAI(setFieldValue)}
              />
              <PrimaryButton type="submit" text="Save Summary" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfessionalSummary;

