import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import PrimaryButton from "../ui/Buttons/PrimaryButton";
import { updateResume } from "../../pages/Resume/Slice/action";
import FormikStateObserver from "./FormikStateObserver";

const validationSchema = Yup.object({
  skills: Yup.array().min(1, "At least one skill is required"),
});

const Skills = ({ onNext, onChange, id }) => {
  const selectedResume = useAppSelector((state) => state.resume.selectedResume);
  const dispatch = useAppDispatch();
  const [skillInput, setSkillInput] = useState("");

  // Map database skills { name, level } to simple strings for the Formik state
  const savedSkills = selectedResume?.skills || [];
  const initialValues = {
    skills: savedSkills.map((s) => (typeof s === "object" ? s.name : s)),
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const payload = {
        skills: values.skills.map((skill) => ({
          name: skill,
          level: "Intermediate",
        })),
      };

      const result = await dispatch(
        updateResume({ id: id, resumeData: payload }),
      ).unwrap();
      onNext();
      console.log("Skills saved:", result);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ values, errors, touched, setFieldValue, isSubmitting }) => (
          <Form>
            <FormikStateObserver onChange={(val) => onChange({ skills: val.skills })} />

            {/* Add Skill */}
            <div className="flex gap-3">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                placeholder="Enter skill"
                className="flex-1 border p-3 rounded-xl"
              />

              <button
                type="button"
                onClick={() => {
                  if (!skillInput.trim()) return;

                  setFieldValue("skills", [
                    ...values.skills,
                    skillInput.trim(),
                  ]);

                  setSkillInput("");
                }}
                className="bg-indigo-600 text-white px-5 rounded-xl font-semibold hover:bg-indigo-700 transition"
              >
                Add Skill
              </button>
            </div>

            {/* Validation */}
            {touched.skills && errors.skills && (
              <p className="text-red-500 text-sm mt-2">{errors.skills}</p>
            )}

            {/* Skills List */}
            <div className="flex flex-wrap gap-3 mt-6 mb-6">
              {values.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium"
                >
                  <span>{skill}</span>

                  <button
                    type="button"
                    onClick={() =>
                      setFieldValue(
                        "skills",
                        values.skills.filter((_, i) => i !== index),
                      )
                    }
                    className="font-bold hover:text-indigo-950 transition"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <PrimaryButton
              type="submit"
              text={isSubmitting ? "Saving..." : "Save Skills & Next"}
              loader={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Skills;

